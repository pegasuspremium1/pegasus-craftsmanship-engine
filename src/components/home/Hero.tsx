import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import logo from "@/assets/logo.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-editorial opacity-40" />
      
      {/* Vertical side labels */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20"
      >
        <span className="text-vertical font-mono text-xs tracking-[0.3em] text-muted-foreground">
          EST. 1998 — BIRMINGHAM, UK
        </span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20"
      >
        <span className="text-vertical font-mono text-xs tracking-[0.3em] text-muted-foreground">
          INDUSTRIAL FASTENERS
        </span>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex items-center pt-32 pb-12">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-end">
            {/* Left column - Main headline */}
            <div className="lg:col-span-8">
              {/* Logo + Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-6 mb-8"
              >
                <img src={logo} alt="Pegasus Premium" className="h-14 w-auto" />
                <div className="h-8 w-px bg-border" />
                <span className="label-editorial">Premium Fasteners</span>
              </motion.div>

              {/* Headline - Split lines for impact */}
              <div className="space-y-2 mb-10">
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="display-xl text-foreground"
                  >
                    Precision
                  </motion.h1>
                </div>
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="display-xl"
                  >
                    <span className="font-serif italic text-accent">Engineered</span>
                  </motion.h1>
                </div>
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="display-xl text-foreground"
                  >
                    Excellence
                  </motion.h1>
                </div>
              </div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/products" className="btn-editorial-primary group">
                  <span className="flex items-center gap-3">
                    Explore Products
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link to="/contact" className="btn-editorial-outline">
                  Get a Quote
                </Link>
              </motion.div>
            </div>

            {/* Right column - Description + scroll hint */}
            <div className="lg:col-span-4 lg:pb-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="body-lg mb-8"
              >
                Trusted by manufacturers worldwide. Over 10,000 premium fasteners 
                and engineered components for aerospace, automotive, and construction.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center"
                >
                  <ArrowDownRight className="w-4 h-4 text-muted-foreground" />
                </motion.div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Scroll to explore
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar - Kanban style */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="border-t border-border"
      >
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "25+", label: "Years Experience" },
              { value: "10K+", label: "Products Stocked" },
              { value: "500+", label: "Global Partners" },
              { value: "99.9%", label: "Quality Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="py-8 px-6 first:pl-0 last:pr-0"
              >
                <div className="stat-display mb-1">{stat.value}</div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
