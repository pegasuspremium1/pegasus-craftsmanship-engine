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
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="label-sm text-accent mb-4 block">Our Products</span>
          <h2 className="display-lg text-foreground mb-4">
            Browse Our Range
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Comprehensive selection of fasteners and fixings for industrial, construction, 
            and manufacturing applications.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <ScrollReveal key={category.name} delay={index * 0.1}>
              <Link to={category.href}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {category.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
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
