import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const categories = [
  {
    name: "Bolts & Screws",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80",
    href: "/products/bolts-screws",
  },
  {
    name: "Nuts & Washers",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    href: "/products/nuts-washers",
  },
  {
    name: "Anchors & Fixings",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    href: "/products/anchors-fixings",
  },
  {
    name: "Tools & Hardware",
    image: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=600&q=80",
    href: "/products/tools-hardware",
  },
];

export function ProductShowcase() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container-wide">
        {/* Header */}
        <ScrollReveal className="text-center mb-8 md:mb-12">
          <span className="label-sm text-accent mb-3 md:mb-4 block">Our Products</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-3 md:mb-4">
            Browse Our Range
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
            Comprehensive selection of fasteners and fixings for industrial, construction, 
            and manufacturing applications.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {categories.map((category, index) => (
            <ScrollReveal key={category.name} delay={index * 0.1}>
              <Link to={category.href}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative bg-card rounded-lg md:rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 md:p-5 flex items-center justify-between">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors text-sm md:text-base">
                      {category.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <Link to="/products" className="btn-primary">
            View All Products
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
