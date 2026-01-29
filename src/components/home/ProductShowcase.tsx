import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const productCategories = [
  {
    name: "Hexagonal Fasteners",
    description: "Precision-engineered hex bolts, screws, and nuts for heavy-duty applications.",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
    href: "/products/hexagonal-fasteners",
  },
  {
    name: "Machine Screws",
    description: "High-precision machine screws in various head styles and thread configurations.",
    image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=800&q=80",
    href: "/products/machine-screws",
  },
  {
    name: "Socket Fasteners",
    description: "Allen key fasteners for applications requiring high torque and accessibility.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
    href: "/products/socket-fasteners",
  },
  {
    name: "Rivets",
    description: "Permanent fastening solutions for sheet metal and structural applications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    href: "/products/rivets",
  },
  {
    name: "Washers & Clips",
    description: "Load distribution and securing solutions for all fastening needs.",
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80",
    href: "/products/washers-clips",
  },
  {
    name: "Tools & Hardware",
    description: "Professional-grade tools and hardware for fastener installation.",
    image: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=800&q=80",
    href: "/products/tools-hardware",
  },
];

export function ProductShowcase() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
                Our Products
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Premium Fastening Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Comprehensive range of industrial fasteners engineered for precision and durability.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group"
            >
              View All Products
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {productCategories.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 0.1}>
              <Link to={product.href}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-premium-sm hover:shadow-premium-lg transition-all duration-500"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-copper transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-copper transition-colors">
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
  );
}
