import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const productCategories = [
  {
    id: "01",
    name: "Hexagonal Fasteners",
    shortName: "Hex",
    description: "Precision-engineered hex bolts, screws, and nuts",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
    href: "/products/hexagonal-fasteners",
    size: "large",
  },
  {
    id: "02",
    name: "Machine Screws",
    shortName: "Machine",
    description: "High-precision machine screws in various configurations",
    image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=800&q=80",
    href: "/products/machine-screws",
    size: "small",
  },
  {
    id: "03",
    name: "Socket Fasteners",
    shortName: "Socket",
    description: "Allen key fasteners for high torque applications",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80",
    href: "/products/socket-fasteners",
    size: "small",
  },
  {
    id: "04",
    name: "Rivets",
    shortName: "Rivets",
    description: "Permanent fastening for sheet metal and structures",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    href: "/products/rivets",
    size: "medium",
  },
  {
    id: "05",
    name: "Washers & Clips",
    shortName: "Washers",
    description: "Load distribution and securing solutions",
    image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=800&q=80",
    href: "/products/washers-clips",
    size: "medium",
  },
  {
    id: "06",
    name: "Tools & Hardware",
    shortName: "Tools",
    description: "Professional-grade installation tools",
    image: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=800&q=80",
    href: "/products/tools-hardware",
    size: "small",
  },
];

export function ProductShowcase() {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="container-wide relative">
        {/* Section marker */}
        <div className="section-marker">
          <span className="section-marker-number">02</span>
          <div className="section-marker-line" />
          <span className="section-marker-text">Product Range</span>
        </div>

        {/* Header with link */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <ScrollReveal>
            <h2 className="display-lg text-foreground max-w-xl">
              Premium Fastening
              <br />
              <span className="font-serif italic text-accent">Solutions</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link
              to="/products"
              className="btn-editorial-ghost group inline-flex items-center gap-3"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Bento/Kanban Grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Large card */}
          <ScrollReveal className="col-span-12 lg:col-span-6 lg:row-span-2">
            <ProductCard 
              product={productCategories[0]} 
              variant="large"
            />
          </ScrollReveal>

          {/* Small cards row */}
          <ScrollReveal className="col-span-6 lg:col-span-3" delay={0.1}>
            <ProductCard 
              product={productCategories[1]} 
              variant="small"
            />
          </ScrollReveal>

          <ScrollReveal className="col-span-6 lg:col-span-3" delay={0.15}>
            <ProductCard 
              product={productCategories[2]} 
              variant="small"
            />
          </ScrollReveal>

          {/* Medium cards row */}
          <ScrollReveal className="col-span-6 lg:col-span-3" delay={0.2}>
            <ProductCard 
              product={productCategories[3]} 
              variant="small"
            />
          </ScrollReveal>

          <ScrollReveal className="col-span-6 lg:col-span-3" delay={0.25}>
            <ProductCard 
              product={productCategories[4]} 
              variant="small"
            />
          </ScrollReveal>

          {/* Bottom full-width */}
          <ScrollReveal className="col-span-12" delay={0.3}>
            <ProductCard 
              product={productCategories[5]} 
              variant="wide"
            />
          </ScrollReveal>
        </div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div className="flex items-baseline gap-4">
            <span className="stat-display">10,000+</span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Products Available
            </span>
          </div>
          <p className="body-lg max-w-md text-right">
            From micro-screws to heavy-duty bolts. Every specification, every material.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ 
  product, 
  variant = "small" 
}: { 
  product: typeof productCategories[0]; 
  variant: "large" | "small" | "wide" 
}) {
  const heights = {
    large: "h-[600px] lg:h-full",
    small: "h-[280px] lg:h-[300px]",
    wide: "h-[200px] lg:h-[240px]",
  };

  return (
    <Link to={product.href}>
      <motion.div
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative ${heights[variant]} overflow-hidden bg-primary`}
      >
        {/* Image with overlay */}
        <motion.img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between text-primary-foreground">
          {/* Top row */}
          <div className="flex items-start justify-between">
            <span className="font-mono text-xs opacity-60">{product.id}</span>
            <div className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-400">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Bottom content */}
          <div>
            <h3 className={`font-display font-medium mb-2 group-hover:text-accent transition-colors ${
              variant === "large" ? "text-3xl lg:text-4xl" : variant === "wide" ? "text-2xl" : "text-xl"
            }`}>
              {product.name}
            </h3>
            {variant !== "small" && (
              <p className="text-primary-foreground/70 text-sm max-w-md">
                {product.description}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
