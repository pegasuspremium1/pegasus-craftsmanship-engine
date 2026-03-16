import catAnchorsLifting from "@/assets/cat-anchors-lifting.jpg";
import catSheetMetal from "@/assets/cat-sheet-metal.jpg";
import catSpringSteel from "@/assets/cat-spring-steel.jpg";
import catThreadForming from "@/assets/cat-thread-forming.jpg";
import catMachineScrews from "@/assets/cat-machine-screws.jpg";
import catBoltsSocket from "@/assets/cat-bolts-socket.jpg";
import catNuts from "@/assets/cat-nuts.jpg";
import catFurniture from "@/assets/cat-furniture.jpg";
import catWashers from "@/assets/cat-washers.jpg";
import catRivets from "@/assets/cat-rivets.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
}

export interface ProductCategory {
  name: string;
  image: string;
  products: Product[];
}

const makeProducts = (category: string, image: string, names: string[]): Product[] =>
  names.map((name, i) => ({
    id: `${category.toLowerCase().replace(/[^a-z]/g, "-")}-${i + 1}`,
    name,
    category,
    image,
  }));

export const categories: ProductCategory[] = [
  {
    name: "Anchors & Lifting",
    image: catAnchorsLifting,
    products: makeProducts("Anchors & Lifting", catAnchorsLifting, [
      "U-Bolt",
      "Screw Bolt",
      "Shield Anchor With Bolt",
      "Sleeve Anchor",
      "Through Bolt",
      "Chemical Anchor + Stud",
      "Nylon Plug",
      "Nail In Anchor Nylon",
      "Nail In Anchor Steel",
      "Rope Clamp",
      "Eye Bolt (Forged)",
      "Eye Bolt (Fabricated)",
    ]),
  },
  {
    name: "Sheet Metal Fasteners & Clinching",
    image: catSheetMetal,
    products: makeProducts("Sheet Metal Fasteners & Clinching", catSheetMetal, [
      "Riv Nut Large Flange",
      "Riv Nut Low Profile",
      "Self-Clinching Nut",
      "TSO-Through Standoff",
      "BSO-Blind Standoff",
      "CH-Clinch Nut",
      "Hex Weld Nut",
      "Square Weld Nut",
      "Cage Nut",
      "FH-Flush Head Stud",
      "Brass Inserts",
    ]),
  },
  {
    name: "Spring Steel",
    image: catSpringSteel,
    products: makeProducts("Spring Steel", catSpringSteel, [
      "E-Clip",
      "Internal Circlip",
      "External Circlip",
      "Starlock Washer",
      "Spring Clip",
      "Selloc Pin",
      "Split Pin",
      "Push On Fix Washer Uncapped",
      "Captive Nut",
      "Helicoil",
      "R-Clip",
    ]),
  },
  {
    name: "Thread Forming / Cutting Fasteners",
    image: catThreadForming,
    products: makeProducts("Thread Forming / Cutting Fasteners", catThreadForming, [
      "Hex Flange Lag Screw",
      "Hex Self Tapping",
      "Hex Flange Self Drilling",
      "Wafer Phillips Self Drilling",
      "Pan Pozi Self Drilling",
      "Hex Flange Tapping",
      "Pan Combi Self Tapping",
      "CSK Pozi Self Tapping",
      "Pan Pozi Self Tapping",
      "CSK Self Drilling Screw",
      "Chipboard Screw",
      "Plafast",
    ]),
  },
  {
    name: "Machine Screws & Security Screws",
    image: catMachineScrews,
    products: makeProducts("Machine Screws & Security Screws", catMachineScrews, [
      "CSK Pozi",
      "CSK Slot",
      "Pan Pozi",
      "Cheese Head Slot",
      "RSD CSK Pozi",
      "Truss Head Cross Slot",
      "Pan Slot",
      "CSK Slot Brass",
      "Cheese Head Slot Brass",
      "Security Screw CSK Pin",
      "Snake Eye",
      "Thumb Screw",
    ]),
  },
  {
    name: "Bolts & Socket Screws",
    image: catBoltsSocket,
    products: makeProducts("Bolts & Socket Screws", catBoltsSocket, [
      "Cup Square Bolt",
      "Hexagon Set Screw",
      "Hexagon Coach Screw",
      "Hexagon Bolt",
      "Hexagon Flange Coach Screw",
      "Hexagon Socket Cap Screw",
      "CSK Socket Cap Screw",
      "Button Head Cap Screw",
      "Hex Socket",
      "Cone Point Grub",
      "Cup Point Grub Screw",
      "Button Head Flange Screw",
    ]),
  },
  {
    name: "Nuts",
    image: catNuts,
    products: makeProducts("Nuts", catNuts, [
      "Channel Nut",
      "Hex Flange Nut",
      "Nylon Insert Lock Nut",
      "Nylon Insert Flange Lock Nut",
      "Full Nut",
      "Cage Nut",
      "Half Nut",
      "Square Pressed Nut",
      "Coupling Nut",
      "Spring Nut",
      "Shear Nut",
      "Dome Nut",
    ]),
  },
  {
    name: "Furniture Fasteners",
    image: catFurniture,
    products: makeProducts("Furniture Fasteners", catFurniture, [
      "Wooden Dowel",
      "Campin",
      "Cam Lock",
      "Hanger Bolt",
      "Cross Dowel",
      "Confirmat Screw",
      "Pan Head Joint Bolt",
      "Drywall Screw",
      "Pozi Bits",
      "Wood Insert Type D",
      "Collated Tee Nut",
      "Tee Nut",
    ]),
  },
  {
    name: "Washers",
    image: catWashers,
    products: makeProducts("Washers", catWashers, [
      "Penny Washer",
      "External Lock Washer",
      "Internal Star Lock Washer",
      "Spring Washer Flat Medium",
      "Spring Washer Square Medium",
      "Copper Washer",
      "Cup Washer",
      "Square Washer",
      "Steel Flat Washer",
      "Nylon Washer",
      "Fibre Washer",
      "Wavey Washer",
    ]),
  },
  {
    name: "Rivets And Specials",
    image: catRivets,
    products: makeProducts("Rivets And Specials", catRivets, [
      "Dome Rivet",
      "Large Flange Rivet",
      "Coloured Rivet",
      "Cup Head Rivet",
      "Semi Tubular Rivet",
      "Split Rivet",
      "Clevis Pin",
      "Peel Rivet",
      "Specials",
    ]),
  },
];

export const allProducts: Product[] = categories.flatMap((c) => c.products);
