export type PdfProduct = {
  id: string;
  name: string;
  category: string;
  image: string;
};

export const pdfProducts: PdfProduct[] = [
  // Anchors & Lifting (pages 3-5)
  { id: "pp-03-01", name: "U-Bolt", category: "Anchors & Lifting", image: "/new_products/ProductsPP_images-img001-page003.png" },
  { id: "pp-03-04", name: "Screw Bolt", category: "Anchors & Lifting", image: "/products/screw-bolt.png" },
  { id: "pp-03-02", name: "Shield Anchor With Bolt", category: "Anchors & Lifting", image: "/new_products/ProductsPP_images-img002-page003.png" },
  { id: "pp-03-03", name: "Sleeve Anchor", category: "Anchors & Lifting", image: "/new_products/ProductsPP_images-img003-page003.png" },
  { id: "pp-04-01", name: "Through Bolt", category: "Anchors & Lifting", image: "/new_products/ProductsPP_images-img005-page004.png" },
  { id: "pp-04-02", name: "Nylon Plug", category: "Anchors & Lifting", image: "/new_products/ProductsPP_images-img006-page004.png" },
  { id: "pp-04-03", name: "Chemical Anchor + Stud", category: "Anchors & Lifting", image: "/new_products/ProductsPP_images-img007-page004.png" },
  { id: "pp-04-04", name: "Nail In Anchor Nylon", category: "Anchors & Lifting", image: "/new_products/ProductsPP_images-img008-page004.png" },
  { id: "pp-05-01", name: "Nail In Anchor Steel", category: "Anchors & Lifting", image: "/new_products/ProductsPP_images-img009-page005.png" },
  { id: "pp-05-02", name: "Eye Bolt (Forged)", category: "Anchors & Lifting", image: "/new_products/ProductsPP_images-img010-page005.png" },
  { id: "pp-05-03", name: "Rope Clamp", category: "Anchors & Lifting", image: "/new_products/ProductsPP_images-img011-page005.png" },

  // Sheet Metal Fasteners & Clinching (pages 6-8) — Cage Nut removed from this category
  { id: "pp-06-01", name: "Riv Nut Large Flange", category: "Sheet Metal Fasteners & Clinching", image: "/new_products/ProductsPP_images-img013-page006.png" },
  { id: "pp-06-02", name: "Self-Clinching Nut", category: "Sheet Metal Fasteners & Clinching", image: "/new_products/ProductsPP_images-img014-page006.png" },
  { id: "pp-06-03", name: "Riv Nut Low Profile", category: "Sheet Metal Fasteners & Clinching", image: "/new_products/ProductsPP_images-img015-page006.png" },
  { id: "pp-06-04", name: "TSO-Through Standoff", category: "Sheet Metal Fasteners & Clinching", image: "/new_products/ProductsPP_images-img016-page006.png" },
  { id: "pp-07-01", name: "BSO-Blind Standoff", category: "Sheet Metal Fasteners & Clinching", image: "/new_products/ProductsPP_images-img017-page007.png" },
  { id: "pp-07-02", name: "Hex Weld Nut", category: "Sheet Metal Fasteners & Clinching", image: "/new_products/ProductsPP_images-img018-page007.png" },
  { id: "pp-07-03", name: "CH-Clinch Nut", category: "Sheet Metal Fasteners & Clinching", image: "/new_products/ProductsPP_images-img019-page007.png" },
  { id: "pp-07-04", name: "Square Weld Nut", category: "Sheet Metal Fasteners & Clinching", image: "/new_products/ProductsPP_images-img020-page007.png" },
  { id: "pp-08-02", name: "Brass Inserts", category: "Sheet Metal Fasteners & Clinching", image: "/new_products/ProductsPP_images-img022-page008.png" },
  { id: "pp-08-03", name: "FH-Flush Head Stud", category: "Sheet Metal Fasteners & Clinching", image: "/new_products/ProductsPP_images-img023-page008.png" },

  // Spring Steel (pages 9-11)
  { id: "pp-09-01", name: "E-Clip", category: "Spring Steel", image: "/new_products/ProductsPP_images-img024-page009.png" },
  { id: "pp-09-02", name: "External Circlip", category: "Spring Steel", image: "/new_products/ProductsPP_images-img025-page009.png" },
  { id: "pp-09-03", name: "Internal Circlip", category: "Spring Steel", image: "/new_products/ProductsPP_images-img026-page009.png" },
  
  { id: "pp-10-01", name: "Spring Clip", category: "Spring Steel", image: "/new_products/ProductsPP_images-img028-page010.png" },
  { id: "pp-10-02", name: "Split Pin", category: "Spring Steel", image: "/new_products/ProductsPP_images-img029-page010.png" },
  { id: "pp-10-03", name: "Selloc Pin", category: "Spring Steel", image: "/new_products/ProductsPP_images-img030-page010.png" },
  { id: "pp-10-04", name: "Push On Fix Washer", category: "Spring Steel", image: "/new_products/ProductsPP_images-img031-page010.png" },
  { id: "pp-11-02", name: "R-Clip", category: "Spring Steel", image: "/new_products/ProductsPP_images-img035-page011.png" },

  // Thread Forming/Cutting Fasteners (pages 12-14)
  { id: "pp-12-01", name: "Hex Flange Lag Screw", category: "Thread Forming/Cutting Fasteners", image: "/new_products/ProductsPP_images-img036-page012.png" },
  { id: "pp-12-02", name: "Hex Flange Self Drilling", category: "Thread Forming/Cutting Fasteners", image: "/new_products/ProductsPP_images-img037-page012.png" },
  { id: "pp-12-03", name: "Hex Self Drilling", category: "Thread Forming/Cutting Fasteners", image: "/new_products/ProductsPP_images-img038-page012.png" },
  { id: "pp-12-04", name: "Wafer Phillips Self Drilling", category: "Thread Forming/Cutting Fasteners", image: "/new_products/ProductsPP_images-img039-page012.png" },
  { id: "pp-13-01", name: "Pan Pozi Self Tapping", category: "Thread Forming/Cutting Fasteners", image: "/new_products/ProductsPP_images-img040-page013.png" },
  { id: "pp-13-02", name: "Pan Combi Self Tapping", category: "Thread Forming/Cutting Fasteners", image: "/new_products/ProductsPP_images-img041-page013.png" },
  { id: "pp-13-03", name: "Hex Flange Tapping", category: "Thread Forming/Cutting Fasteners", image: "/new_products/ProductsPP_images-img042-page013.png" },
  { id: "pp-13-04", name: "CSK Pozi Self Tapping", category: "Thread Forming/Cutting Fasteners", image: "/new_products/ProductsPP_images-img043-page013.png" },
  { id: "pp-14-02", name: "Chipboard Screw", category: "Thread Forming/Cutting Fasteners", image: "/new_products/ProductsPP_images-img045-page014.png" },

  // Machine Screws (pages 15-17)
  { id: "pp-15-01", name: "CSK Pozi", category: "Machine Screws", image: "/products/csk-pozi.png" },
  { id: "pp-15-02", name: "Pan Pozi", category: "Machine Screws", image: "/products/pan-pozi.png" },
  { id: "pp-15-03", name: "CSK Slot", category: "Machine Screws", image: "/products/csk-slot.png" },
  { id: "pp-15-04", name: "Cheese Head Slot", category: "Machine Screws", image: "/new_products/ProductsPP_images-img051-page015.png" },
  { id: "pp-16-04", name: "CSK Slot Brass", category: "Machine Screws", image: "/new_products/ProductsPP_images-img055-page016.png" },
  { id: "pp-17-02", name: "Cheese Head Brass", category: "Machine Screws", image: "/new_products/ProductsPP_images-img057-page017.png" },

  // Bolts (pages 18-19)
  { id: "pp-18-01", name: "Cup Square Bolt", category: "Bolts", image: "/new_products/ProductsPP_images-img060-page018.png" },
  { id: "pp-18-02", name: "Hexagon Coach Screw", category: "Bolts", image: "/new_products/ProductsPP_images-img061-page018.png" },
  { id: "pp-18-03", name: "Hexagon Set Screw", category: "Bolts", image: "/new_products/ProductsPP_images-img062-page018.png" },
  { id: "pp-18-04", name: "Hexagon Bolt", category: "Bolts", image: "/new_products/ProductsPP_images-img063-page018.png" },
  { id: "pp-19-01", name: "Hexagon Flange", category: "Bolts", image: "/new_products/ProductsPP_images-img064-page019.png" },
  { id: "pp-19-02", name: "Coach Screw", category: "Bolts", image: "/new_products/ProductsPP_images-img065-page019.png" },
  { id: "pp-19-03", name: "CSK Socket Cap Screw", category: "Bolts", image: "/new_products/ProductsPP_images-img066-page019.png" },
  { id: "pp-19-04", name: "Hexagon Socket Cap Screw", category: "Bolts", image: "/new_products/ProductsPP_images-img067-page019.png" },
  { id: "pp-add-1", name: "Button Head Cap Screw", category: "Bolts", image: "/new_products/ProductsPP_images-img053-page016.png" },

  // Nuts (pages 20-22)
  { id: "pp-20-01", name: "Channel Nut", category: "Nuts", image: "/new_products/ProductsPP_images-img068-page020.png" },
  { id: "pp-20-02", name: "Nylon Insert Lock Nut", category: "Nuts", image: "/new_products/ProductsPP_images-img069-page020.png" },
  { id: "pp-20-03", name: "Hex Flange Nut", category: "Nuts", image: "/new_products/ProductsPP_images-img070-page020.png" },
  { id: "pp-20-04", name: "Nylon Insert Flange Lock Nut", category: "Nuts", image: "/new_products/ProductsPP_images-img071-page020.png" },
  { id: "pp-21-01", name: "Full Nut", category: "Nuts", image: "/new_products/ProductsPP_images-img072-page021.png" },
  { id: "pp-21-02", name: "Half Nut", category: "Nuts", image: "/new_products/ProductsPP_images-img073-page021.png" },
  { id: "pp-21-03", name: "Cage Nut", category: "Nuts", image: "/new_products/ProductsPP_images-img074-page021.png" },
  { id: "pp-21-04", name: "Square Pressed Nut", category: "Nuts", image: "/new_products/ProductsPP_images-img075-page021.png" },
  { id: "pp-22-01", name: "Coupling Nut", category: "Nuts", image: "/new_products/ProductsPP_images-img076-page022.png" },
  { id: "pp-22-02", name: "Shear Nut", category: "Nuts", image: "/new_products/ProductsPP_images-img077-page022.png" },
  { id: "pp-22-03", name: "Spring Nut", category: "Nuts", image: "/new_products/ProductsPP_images-img078-page022.png" },
  { id: "pp-22-04", name: "Dome Nut", category: "Nuts", image: "/new_products/ProductsPP_images-img079-page022.png" },

  // Furniture Fasteners (pages 23-25)
  { id: "pp-23-01", name: "Wooden Dowel", category: "Furniture Fasteners", image: "/new_products/ProductsPP_images-img080-page023.png" },
  { id: "pp-23-02", name: "Cam Lock", category: "Furniture Fasteners", image: "/new_products/ProductsPP_images-img081-page023.png" },
  { id: "pp-23-03", name: "Campin", category: "Furniture Fasteners", image: "/new_products/ProductsPP_images-img082-page023.png" },
  { id: "pp-23-04", name: "Hanger Bolt", category: "Furniture Fasteners", image: "/new_products/ProductsPP_images-img083-page023.png" },
  { id: "pp-24-01", name: "Cross Dowel", category: "Furniture Fasteners", image: "/new_products/ProductsPP_images-img084-page024.png" },
  { id: "pp-24-02", name: "Pan Head Joint Bolt", category: "Furniture Fasteners", image: "/new_products/ProductsPP_images-img085-page024.png" },
  { id: "pp-24-03", name: "Confirmat Screw", category: "Furniture Fasteners", image: "/new_products/ProductsPP_images-img086-page024.png" },
  { id: "pp-24-04", name: "Drywall Screw", category: "Furniture Fasteners", image: "/new_products/ProductsPP_images-img087-page024.png" },
  { id: "pp-25-01", name: "Pozi Bits", category: "Furniture Fasteners", image: "/new_products/ProductsPP_images-img088-page025.png" },
  { id: "pp-25-03", name: "Wood Insert Type D", category: "Furniture Fasteners", image: "/new_products/ProductsPP_images-img090-page025.png" },
  { id: "pp-25-04", name: "Tee Nut", category: "Furniture Fasteners", image: "/new_products/ProductsPP_images-img091-page025.png" },

  // Washers (pages 26-28)
  { id: "pp-26-01", name: "Penny Washer", category: "Washers", image: "/new_products/ProductsPP_images-img092-page026.png" },
  { id: "pp-26-02", name: "Internal Star Lock Washer", category: "Washers", image: "/new_products/ProductsPP_images-img093-page026.png" },
  { id: "pp-26-03", name: "Spring Washer Flat Medium", category: "Washers", image: "/new_products/ProductsPP_images-img094-page026.png" },
  { id: "pp-26-04", name: "External Lock Washer", category: "Washers", image: "/new_products/ProductsPP_images-img095-page026.png" },
  { id: "pp-27-03", name: "Cup Washer", category: "Washers", image: "/new_products/ProductsPP_images-img097-page027.png" },
  { id: "pp-27-04", name: "Copper Washer", category: "Washers", image: "/new_products/ProductsPP_images-img098-page027.png" },
  { id: "pp-28-01", name: "Steel Flat Washer", category: "Washers", image: "/new_products/ProductsPP_images-img100-page028.png" },
  { id: "pp-28-02", name: "Fibre Washer", category: "Washers", image: "/new_products/ProductsPP_images-img101-page028.png" },
  { id: "pp-28-03", name: "Nylon Washer", category: "Washers", image: "/new_products/ProductsPP_images-img102-page028.png" },
  { id: "pp-28-04", name: "Wavey Washer", category: "Washers", image: "/new_products/ProductsPP_images-img103-page028.png" },

  // Rivets & Specials (pages 29-30)
  { id: "pp-29-01", name: "Dome Rivet", category: "Rivets & Specials", image: "/new_products/ProductsPP_images-img104-page029.png" },
  { id: "pp-29-02", name: "Coloured Rivet", category: "Rivets & Specials", image: "/new_products/ProductsPP_images-img105-page029.png" },
  { id: "pp-29-03", name: "Large Flange Rivet", category: "Rivets & Specials", image: "/new_products/ProductsPP_images-img106-page029.png" },
  { id: "pp-30-01", name: "Semi Tubular Rivet", category: "Rivets & Specials", image: "/new_products/ProductsPP_images-img108-page030.png" },
  { id: "pp-30-04", name: "Peel Rivet", category: "Rivets & Specials", image: "/new_products/ProductsPP_images-img111-page030.png" },
] as const;
