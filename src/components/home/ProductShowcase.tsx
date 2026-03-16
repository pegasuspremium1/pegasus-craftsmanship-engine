import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import catAnchorsLifting from "@/assets/cat-anchors-lifting.jpg";
import catBoltsSocket from "@/assets/cat-bolts-socket.jpg";
import catNuts from "@/assets/cat-nuts.jpg";
import catWashers from "@/assets/cat-washers.jpg";

const categories = [
  {
    name: "Bolts & Socket Screws",
    image: catBoltsSocket,
    href: "/products",
  },
  {
    name: "Nuts",
    image: catNuts,
    href: "/products",
  },
  {
    name: "Anchors & Lifting",
    image: catAnchorsLifting,
    href: "/products",
  },
  {
    name: "Washers",
    image: catWashers,
    href: "/products",
  },
];

export function ProductShowcase() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container-wide">
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

        <ScrollReveal delay={0.4} className="text-center mt-12">
          <Link to="/products" className="btn-primary">
            View All Products
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
