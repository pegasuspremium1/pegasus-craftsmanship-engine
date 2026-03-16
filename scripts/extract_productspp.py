import re
import json
from pathlib import Path

import fitz  # PyMuPDF
from PIL import Image

PDF_PATH = Path(r"C:\Users\katli\Downloads\ProductsPP.pdf")
OUT_DIR = Path(__file__).resolve().parents[1] / "public" / "productspp"
DATA_OUT = Path(__file__).resolve().parents[1] / "src" / "data" / "productspp.ts"

CATEGORY_HINTS = {
    "Anchors & Lifting",
    "Sheet Metal Fasteners & Clinching",
    "Spring Steel",
    "Thread Forming / Cutting Fasteners",
    "Thread Forming/cutting Fasterners",
    "Thread Forming/cutting Fasteners",
    "Nuts",
    "Furniture Fasteners",
    "Washers",
    "Rivets And Specials",
}

def slugify(name: str) -> str:
    name = name.strip().lower()
    name = re.sub(r"\s+", "-", name)
    name = re.sub(r"[^a-z0-9\-]+", "", name)
    name = re.sub(r"-+", "-", name).strip("-")
    return name or "item"

def extract_lines(page_text: str) -> list[str]:
    lines = [ln.strip() for ln in page_text.splitlines()]
    lines = [ln for ln in lines if ln]

    # remove page markers like "-- 3 of 30 --"
    lines = [ln for ln in lines if not re.match(r"^--\s*\d+\s+of\s+\d+\s*--$", ln)]
    return lines

def guess_category_and_names(lines: list[str]) -> tuple[str | None, list[str]]:
    if not lines:
        return None, []

    category = None

    # Often the first non-empty line is the category header
    first = lines[0]
    if first in CATEGORY_HINTS or ("&" in first) or ("/" in first and len(first) > 10):
        category = first
        lines = lines[1:]

    # Filter out accidental category repeats inside the page
    names = [ln for ln in lines if ln not in CATEGORY_HINTS]

    # Some pages have duplicate labels (e.g. "U-Bolt" twice). Keep one.
    deduped = []
    seen = set()
    for n in names:
        key = n.lower()
        if key in seen:
            continue
        seen.add(key)
        deduped.append(n)

    return category, deduped

def crop_tiles(img: Image.Image, n: int) -> list[Image.Image]:
    w, h = img.size
    if n <= 1:
        return [img]

    tiles = []
    if n == 2:
        boxes = [(0, 0, w // 2, h), (w // 2, 0, w, h)]
    else:
        # 2x2 grid for 3-4 items
        boxes = [
            (0, 0, w // 2, h // 2),
            (w // 2, 0, w, h // 2),
            (0, h // 2, w // 2, h),
            (w // 2, h // 2, w, h),
        ]
    for b in boxes[: max(n, 1)]:
        tiles.append(img.crop(b))
    return tiles[:n]


def main():
    if not PDF_PATH.exists():
        raise SystemExit(f"PDF not found: {PDF_PATH}")

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    (DATA_OUT.parent).mkdir(parents=True, exist_ok=True)

    doc = fitz.open(str(PDF_PATH))

    items = []
    used_filenames = set()

    for page_index in range(doc.page_count):
        page = doc.load_page(page_index)
        text = page.get_text("text")
        lines = extract_lines(text)
        category, names = guess_category_and_names(lines)

        # If we can’t confidently detect names, skip page
        if not names:
            continue

        # Render page to image
        zoom = 2.0
        mat = fitz.Matrix(zoom, zoom)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        page_img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)

        tiles = crop_tiles(page_img, len(names))

        for i, (name, tile) in enumerate(zip(names, tiles), start=1):
            base = f"p{page_index+1:02d}-{i:02d}-{slugify(name)}.png"
            filename = base
            k = 2
            while filename in used_filenames:
                filename = base.replace(".png", f"-{k}.png")
                k += 1
            used_filenames.add(filename)

            out_path = OUT_DIR / filename
            tile.save(out_path, format="PNG", optimize=True)

            items.append({
                "id": f"pp-{page_index+1:02d}-{i:02d}",
                "name": name,
                "category": category,
                "image": f"/productspp/{filename}",
            })

    doc.close()

    # Write TS data file
    ts = [
        "export type PdfProduct = {\n  id: string;\n  name: string;\n  category?: string;\n  image: string;\n};\n",
        "export const pdfProducts: PdfProduct[] = [\n",
    ]
    for it in items:
        cat = f"{json.dumps(it['category'])}" if it.get("category") else "undefined"
        ts.append(
            f"  {{ id: {json.dumps(it['id'])}, name: {json.dumps(it['name'])}, category: {cat}, image: {json.dumps(it['image'])} }},\n"
        )
    ts.append("] as const;\n")

    DATA_OUT.write_text("".join(ts), encoding="utf-8")

    print(f"Wrote {len(items)} items")
    print(f"Images in: {OUT_DIR}")
    print(f"Data file: {DATA_OUT}")


if __name__ == "__main__":
    main()
