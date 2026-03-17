export type PdfProduct = {
  id: string;
  name: string;
  category: string;
  image: string;
};

export const pdfProducts: PdfProduct[] = [
  // Anchors & Lifting (pages 3-5)
  { id: "pp-03-01", name: "U-Bolt", category: "Anchors & Lifting", image: "/productspp/p03-01-u-bolt.png" },
  { id: "pp-03-02", name: "Shield Anchor With Bolt", category: "Anchors & Lifting", image: "/productspp/p03-02-shield-anchor-with-bolt.png" },
  { id: "pp-03-03", name: "Sleeve Anchor", category: "Anchors & Lifting", image: "/productspp/p03-03-sleeve-anchor.png" },
  { id: "pp-04-01", name: "Through Bolt", category: "Anchors & Lifting", image: "/productspp/p04-01-through-bolt.png" },
  { id: "pp-04-02", name: "Nylon Plug", category: "Anchors & Lifting", image: "/productspp/p04-02-nylon-plug.png" },
  { id: "pp-04-03", name: "Chemical Anchor + Stud", category: "Anchors & Lifting", image: "/productspp/p04-03-chemical-anchor-stud.png" },
  { id: "pp-04-04", name: "Nail In Anchor Nylon", category: "Anchors & Lifting", image: "/productspp/p04-04-nail-in-anchor-nylon.png" },
  { id: "pp-05-01", name: "Nail In Anchor Steel", category: "Anchors & Lifting", image: "/productspp/p05-01-nail-in-anchor-steel.png" },
  { id: "pp-05-02", name: "Eye Bolt (Forged)", category: "Anchors & Lifting", image: "/productspp/p05-02-eye-bolt-forged.png" },
  { id: "pp-05-03", name: "Rope Clamp", category: "Anchors & Lifting", image: "/productspp/p05-03-rope-clamp.png" },

  // Sheet Metal Fasteners & Clinching (pages 6-8)
  { id: "pp-06-01", name: "Riv Nut Large Flange", category: "Sheet Metal Fasteners & Clinching", image: "/productspp/p06-01-riv-nut-large-flange.png" },
  { id: "pp-06-02", name: "Self-Clinching Nut", category: "Sheet Metal Fasteners & Clinching", image: "/productspp/p06-02-self-clinching-nut.png" },
  { id: "pp-06-03", name: "Riv Nut Low Profile", category: "Sheet Metal Fasteners & Clinching", image: "/productspp/p06-03-riv-nut-low-profile.png" },
  { id: "pp-06-04", name: "TSO-Through Standoff", category: "Sheet Metal Fasteners & Clinching", image: "/productspp/p06-04-tso-through-standoff.png" },
  { id: "pp-07-01", name: "BSO-Blind Standoff", category: "Sheet Metal Fasteners & Clinching", image: "/productspp/p07-01-bso-blind-standoff.png" },
  { id: "pp-07-02", name: "Hex Weld Nut", category: "Sheet Metal Fasteners & Clinching", image: "/productspp/p07-02-hex-weld-nut.png" },
  { id: "pp-07-03", name: "CH-Clinch Nut", category: "Sheet Metal Fasteners & Clinching", image: "/productspp/p07-03-ch-clinch-nut.png" },
  { id: "pp-07-04", name: "Square Weld Nut", category: "Sheet Metal Fasteners & Clinching", image: "/productspp/p07-04-square-weld-nut.png" },
  { id: "pp-08-01", name: "Cage Nut", category: "Sheet Metal Fasteners & Clinching", image: "/productspp/p08-01-cage-nut.png" },
  { id: "pp-08-02", name: "Brass Inserts", category: "Sheet Metal Fasteners & Clinching", image: "/productspp/p08-02-brass-inserts.png" },
  { id: "pp-08-03", name: "FH-Flush Head Stud", category: "Sheet Metal Fasteners & Clinching", image: "/productspp/p08-03-fh-flush-head-stud.png" },

  // Spring Steel (pages 9-11)
  { id: "pp-09-01", name: "E-Clip", category: "Spring Steel", image: "/productspp/p09-01-e-clip.png" },
  { id: "pp-09-02", name: "External Circlip", category: "Spring Steel", image: "/productspp/p09-02-external-circlip.png" },
  { id: "pp-09-03", name: "Internal Circlip", category: "Spring Steel", image: "/productspp/p09-03-internal-circlip.png" },
  { id: "pp-09-04", name: "Starlock Washer", category: "Spring Steel", image: "/productspp/p09-04-starlock-washer.png" },
  { id: "pp-10-01", name: "Spring Clip", category: "Spring Steel", image: "/productspp/p10-01-spring-clip.png" },
  { id: "pp-10-02", name: "Split Pin", category: "Spring Steel", image: "/productspp/p10-02-split-pin.png" },
  { id: "pp-10-03", name: "Selloc Pin", category: "Spring Steel", image: "/productspp/p10-03-selloc-pin.png" },
  { id: "pp-10-04", name: "Push On Fix Washer Uncapped", category: "Spring Steel", image: "/productspp/p10-04-push-on-fix-washer.png" },
  { id: "pp-11-01", name: "Push On Fix Washer Capped", category: "Spring Steel", image: "/productspp/p11-01-push-on-fix-washer.png" },
  { id: "pp-11-02", name: "R-Clip", category: "Spring Steel", image: "/productspp/p11-02-capped.png" },
  { id: "pp-11-03", name: "Helicoil", category: "Spring Steel", image: "/productspp/p11-03-helicoil.png" },
  { id: "pp-11-04", name: "Captive Nut", category: "Spring Steel", image: "/productspp/p11-04-captive-nut.png" },

  // Thread Forming/Cutting Fasteners (pages 12-14)
  { id: "pp-12-01", name: "Hex Flange Lag Screw", category: "Thread Forming/Cutting Fasteners", image: "/productspp/p12-01-hex-flange-lag-screw.png" },
  { id: "pp-12-02", name: "Hex Flange Self Drilling", category: "Thread Forming/Cutting Fasteners", image: "/productspp/p12-02-hex-flange-self-drilling.png" },
  { id: "pp-12-03", name: "Hex Self Tapping", category: "Thread Forming/Cutting Fasteners", image: "/productspp/p12-03-hex-self-tapping.png" },
  { id: "pp-12-04", name: "Wafer Phillips Self Drilling", category: "Thread Forming/Cutting Fasteners", image: "/productspp/p12-04-wafer-phillips-self.png" },
  { id: "pp-13-01", name: "Pan Pozi Self Drilling", category: "Thread Forming/Cutting Fasteners", image: "/productspp/p13-01-pan-pozi-self-drilling.png" },
  { id: "pp-13-02", name: "Pan Combi Self Tapping", category: "Thread Forming/Cutting Fasteners", image: "/productspp/p13-02-pan-combi-self-tapping.png" },
  { id: "pp-13-03", name: "Hex Flange Tapping", category: "Thread Forming/Cutting Fasteners", image: "/productspp/p13-03-hex-flange-tapping.png" },
  { id: "pp-13-04", name: "CSK Pozi Self Tapping", category: "Thread Forming/Cutting Fasteners", image: "/productspp/p13-04-csk-pozi-self-tapping.png" },
  { id: "pp-14-01", name: "Pan Pozi Self Tapping", category: "Thread Forming/Cutting Fasteners", image: "/productspp/p14-01-pan-pozi-self-tapping.png" },
  { id: "pp-14-02", name: "Chipboard Screw", category: "Thread Forming/Cutting Fasteners", image: "/productspp/p14-02-chipboard-screw.png" },
  { id: "pp-14-03", name: "CSK Self Drilling Screw", category: "Thread Forming/Cutting Fasteners", image: "/productspp/p14-03-csk-self-drilling-screw.png" },
  { id: "pp-14-04", name: "Plasfast", category: "Thread Forming/Cutting Fasteners", image: "/productspp/p14-04-plasfast.png" },

  // Machine Screws (pages 15-17)
  { id: "pp-15-01", name: "CSK Pozi", category: "Machine Screws", image: "/productspp/p15-01-csk-pozi.png" },
  { id: "pp-15-02", name: "Pan Pozi", category: "Machine Screws", image: "/productspp/p15-02-pan-pozi.png" },
  { id: "pp-15-03", name: "CSK Slot", category: "Machine Screws", image: "/productspp/p15-03-csk-slot.png" },
  { id: "pp-15-04", name: "Cheese Head Slot", category: "Machine Screws", image: "/productspp/p15-04-cheese-head-slot.png" },
  { id: "pp-16-01", name: "RSD CSK Pozi", category: "Machine Screws", image: "/productspp/p16-01-rsd-csk-pozi.png" },
  { id: "pp-16-02", name: "Snake Eye", category: "Machine Screws", image: "/productspp/p16-02-snake-eye.png" },
  { id: "pp-16-03", name: "Truss Head Cross Slot", category: "Machine Screws", image: "/productspp/p16-03-truss-head-cross-slot.png" },
  { id: "pp-16-04", name: "CSK Slot Brass", category: "Machine Screws", image: "/productspp/p16-04-csk-slot-brass.png" },
  { id: "pp-17-01", name: "Pan Slot", category: "Machine Screws", image: "/productspp/p17-01-pan-slot.png" },
  { id: "pp-17-02", name: "Cheese Head Slot", category: "Machine Screws", image: "/productspp/p17-02-cheese-head-slot.png" },
  { id: "pp-17-03", name: "Security Screw Brass", category: "Machine Screws", image: "/productspp/p17-03-brass.png" },
  { id: "pp-17-04", name: "Thumb Screw", category: "Machine Screws", image: "/productspp/p17-04-thumb-screw.png" },

  // Bolts (pages 18-19)
  { id: "pp-18-01", name: "Cup Square Bolt", category: "Bolts", image: "/productspp/p18-01-cup-square-bolt.png" },
  { id: "pp-18-02", name: "Hexagon Coach Screw", category: "Bolts", image: "/productspp/p18-02-hexagon-coach-screw.png" },
  { id: "pp-18-03", name: "Hexagon Set Screw", category: "Bolts", image: "/productspp/p18-03-hexagon-set-screw.png" },
  { id: "pp-18-04", name: "Hexagon Bolt", category: "Bolts", image: "/productspp/p18-04-hexagon-bolt.png" },
  { id: "pp-19-01", name: "Hexagon Flange", category: "Bolts", image: "/productspp/p19-01-hexagon-flange.png" },
  { id: "pp-19-02", name: "Coach Screw", category: "Bolts", image: "/productspp/p19-02-coach-screw.png" },
  { id: "pp-19-03", name: "CSK Socket Cap Screw", category: "Bolts", image: "/productspp/p19-03-csk-socket-cap-screw.png" },
  { id: "pp-19-04", name: "Hexagon Socket Cap Screw", category: "Bolts", image: "/productspp/p19-04-hexagon-socket-cap-screw.png" },

  // Nuts (pages 20-22)
  { id: "pp-20-01", name: "Channel Nut", category: "Nuts", image: "/productspp/p20-01-channel-nut.png" },
  { id: "pp-20-02", name: "Nylon Insert Lock Nut", category: "Nuts", image: "/productspp/p20-02-nylon-insert-lock-nut.png" },
  { id: "pp-20-03", name: "Hex Flange Nut", category: "Nuts", image: "/productspp/p20-03-hex-flange-nut.png" },
  { id: "pp-20-04", name: "Nylon Insert Flange Lock Nut", category: "Nuts", image: "/productspp/p20-04-nylon-insert-flange-lock.png" },
  { id: "pp-21-01", name: "Full Nut", category: "Nuts", image: "/productspp/p21-01-full-nut.png" },
  { id: "pp-21-02", name: "Half Nut", category: "Nuts", image: "/productspp/p21-02-half-nut.png" },
  { id: "pp-21-03", name: "Cage Nut", category: "Nuts", image: "/productspp/p21-03-cage-nut.png" },
  { id: "pp-21-04", name: "Square Pressed Nut", category: "Nuts", image: "/productspp/p21-04-square-pressed-nut.png" },
  { id: "pp-22-01", name: "Coupling Nut", category: "Nuts", image: "/productspp/p22-01-coupling-nut.png" },
  { id: "pp-22-02", name: "Shear Nut", category: "Nuts", image: "/productspp/p22-02-shear-nut.png" },
  { id: "pp-22-03", name: "Spring Nut", category: "Nuts", image: "/productspp/p22-03-spring-nut.png" },
  { id: "pp-22-04", name: "Dome Nut", category: "Nuts", image: "/productspp/p22-04-dome-nut.png" },

  // Furniture Fasteners (pages 23-25)
  { id: "pp-23-01", name: "Wooden Dowel", category: "Furniture Fasteners", image: "/productspp/p23-01-wooden-dowel.png" },
  { id: "pp-23-02", name: "Cam Lock", category: "Furniture Fasteners", image: "/productspp/p23-02-cam-lock.png" },
  { id: "pp-23-03", name: "Campin", category: "Furniture Fasteners", image: "/productspp/p23-03-campin.png" },
  { id: "pp-23-04", name: "Hanger Bolt", category: "Furniture Fasteners", image: "/productspp/p23-04-hanger-bolt.png" },
  { id: "pp-24-01", name: "Cross Dowel", category: "Furniture Fasteners", image: "/productspp/p24-01-cross-dowel.png" },
  { id: "pp-24-02", name: "Pan Head Joint Bolt", category: "Furniture Fasteners", image: "/productspp/p24-02-pan-head-joint-bolt.png" },
  { id: "pp-24-03", name: "Confirmat Screw", category: "Furniture Fasteners", image: "/productspp/p24-03-confirmat-screw.png" },
  { id: "pp-24-04", name: "Drywall Screw", category: "Furniture Fasteners", image: "/productspp/p24-04-drywall-screw.png" },
  { id: "pp-25-01", name: "Pozi Bits", category: "Furniture Fasteners", image: "/productspp/p25-01-pozi-bits.png" },
  { id: "pp-25-02", name: "Collated Tee Nut", category: "Furniture Fasteners", image: "/productspp/p25-02-collated-tee-nut.png" },
  { id: "pp-25-03", name: "Wood Insert Type D", category: "Furniture Fasteners", image: "/productspp/p25-03-wood-insert-type-d.png" },
  { id: "pp-25-04", name: "Tee Nut", category: "Furniture Fasteners", image: "/productspp/p25-04-tee-nut.png" },

  // Washers (pages 26-28)
  { id: "pp-26-01", name: "Penny Washer", category: "Washers", image: "/productspp/p26-01-penny-washer.png" },
  { id: "pp-26-02", name: "Internal Star Lock Washer", category: "Washers", image: "/productspp/p26-02-internal-star-lock.png" },
  { id: "pp-26-03", name: "Spring Washer Flat Medium", category: "Washers", image: "/productspp/p26-03-washer.png" },
  { id: "pp-26-04", name: "External Lock Washer", category: "Washers", image: "/productspp/p26-04-external-lock-washer.png" },
  { id: "pp-27-01", name: "Spring Washer Square Medium", category: "Washers", image: "/productspp/p27-01-spring-washer.png" },
  { id: "pp-27-02", name: "Square Washer", category: "Washers", image: "/productspp/p27-02-square-medium.png" },
  { id: "pp-27-03", name: "Cup Washer", category: "Washers", image: "/productspp/p27-03-cup-washer.png" },
  { id: "pp-27-04", name: "Copper Washer", category: "Washers", image: "/productspp/p27-04-copper-washer.png" },
  { id: "pp-28-01", name: "Steel Flat Washer", category: "Washers", image: "/productspp/p28-01-steel-flat-washer.png" },
  { id: "pp-28-02", name: "Fibre Washer", category: "Washers", image: "/productspp/p28-02-fibre-washer.png" },
  { id: "pp-28-03", name: "Nylon Washer", category: "Washers", image: "/productspp/p28-03-nylon-washer.png" },
  { id: "pp-28-04", name: "Wavey Washer", category: "Washers", image: "/productspp/p28-04-wavey-washer.png" },

  // Rivets And Specials (pages 29-30)
  { id: "pp-29-01", name: "Dome Rivet", category: "Rivets & Specials", image: "/productspp/p29-01-dome-rivet.png" },
  { id: "pp-29-02", name: "Coloured Rivet", category: "Rivets & Specials", image: "/productspp/p29-02-coloured-rivet.png" },
  { id: "pp-29-03", name: "Large Flange Rivet", category: "Rivets & Specials", image: "/productspp/p29-03-large-flange-rivet.png" },
  { id: "pp-29-04", name: "Cup Head Rivet", category: "Rivets & Specials", image: "/productspp/p29-04-cup-head-rivet.png" },
  { id: "pp-30-01", name: "Semi Tubular Rivet", category: "Rivets & Specials", image: "/productspp/p30-01-semi-tubular-rivet.png" },
  { id: "pp-30-02", name: "Clevis Pin", category: "Rivets & Specials", image: "/productspp/p30-02-clevis-pin.png" },
  { id: "pp-30-03", name: "Split Rivet", category: "Rivets & Specials", image: "/productspp/p30-03-split-rivet.png" },
  { id: "pp-30-04", name: "Peel Rivet", category: "Rivets & Specials", image: "/productspp/p30-04-peel-rivet.png" },
] as const;
