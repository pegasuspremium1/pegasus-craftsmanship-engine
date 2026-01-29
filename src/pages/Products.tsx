import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const productCategories = [
  {
    name: "Anchors & Nails",
    description: "Heavy-duty anchoring solutions and industrial nails for construction and manufacturing.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    href: "/products/anchors-nails",
    count: "500+",
  },
  {
    name: "Furniture Fasteners",
    description: "Specialized fasteners for furniture assembly and cabinetry applications.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    href: "/products/furniture-fasteners",
    count: "300+",
  },
  {
    name: "Hexagonal Fasteners",
    description: "Precision-engineered hex bolts, screws, and nuts for heavy-duty applications.",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
    href: "/products/hexagonal-fasteners",
    count: "800+",
  },
  {
    name: "Machined Parts",
    description: "Custom-machined components manufactured to exact specifications.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    href: "/products/machined-parts",
    count: "200+",
  },
  {
    name: "Machine Screws",
    description: "High-precision machine screws in various head styles and thread configurations.",
    image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=800&q=80",
    href: "/products/machine-screws",
    count: "1000+",
  },
  {
    name: "Nuts",
    description: "Comprehensive range of nuts including hex, lock, flange, and specialty types.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    href: "/products/nuts",
    count: "600+",
  },
  {
    name: "Pins",
    description: "Dowel pins, split pins, cotter pins, and specialty fastening pins.",
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80",
    href: "/products/pins",
    count: "400+",
  },
  {
    name: "Rivets",
    description: "Permanent fastening solutions for sheet metal and structural applications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    href: "/products/rivets",
    count: "350+",
  },
  {
    name: "Self Drilling Screws",
    description: "Self-drilling fasteners for metal and composite material applications.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
    href: "/products/self-drilling-screws",
    count: "450+",
  },
  {
    name: "Self Tapping Screws",
    description: "Thread-forming screws for plastic, metal, and wood applications.",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
    href: "/products/self-tapping-screws",
    count: "550+",
  },
  {
    name: "Socket Fasteners",
    description: "Allen key fasteners for applications requiring high torque and accessibility.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
    href: "/products/socket-fasteners",
    count: "700+",
  },
  {
    name: "Threaded Rods & Studs",
    description: "Fully and partially threaded rods and studs in various materials and sizes.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    href: "/products/threaded-rods-studs",
    count: "250+",
  },
  {
    name: "Washers & Clips",
    description: "Load distribution and securing solutions for all fastening needs.",
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80",
    href: "/products/washers-clips",
    count: "400+",
  },
  {
    name: "Tools & Hardware",
    description: "Professional-grade tools and hardware for fastener installation.",
    image: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=800&q=80",
    href: "/products/tools-hardware",
    count: "300+",
  },
  {
    name: "Wood Screws",
    description: "High-quality wood screws for carpentry and woodworking projects.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    href: "/products/wood-screws",
    count: "650+",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 bg-gradient-hero">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-copper" />
              <span className="text-copper text-sm font-semibold uppercase tracking-[0.2em]">
                Product Range
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
              Industrial Fasteners &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-copper-light">
                Engineered Components
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Comprehensive range of premium fasteners and fixings. From standard specifications 
              to custom solutions, we have the expertise to meet your needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {productCategories.map((product, index) => (
              <ScrollReveal key={product.name} delay={index * 0.05}>
                <Link to={product.href}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-card rounded-2xl overflow-hidden shadow-premium-sm hover:shadow-premium-lg transition-all duration-500 h-full"
                  >
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                    </div>

                    {/* Product count badge */}
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-semibold">{product.count} items</span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-copper transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-white/70 text-sm leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-copper transition-colors ml-4 flex-shrink-0">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-wide">
          <ScrollReveal>
            <div className="bg-gradient-charcoal rounded-3xl p-12 lg:p-16 text-center">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                Can't Find What You Need?
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
                We offer custom solutions and can source specialty fasteners to meet your exact specifications.
              </p>
              <Link to="/contact" className="btn-premium-copper">
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
