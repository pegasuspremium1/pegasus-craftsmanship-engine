import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Shield, Truck, Award, Users, ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    id: "01",
    icon: Shield,
    title: "Quality Assured",
    description: "ISO 9001 certified manufacturing with rigorous quality control at every stage of production.",
    highlight: "ISO 9001",
  },
  {
    id: "02",
    icon: Truck,
    title: "Fast Delivery",
    description: "Next-day UK delivery and efficient international shipping to keep your production moving.",
    highlight: "Next-Day",
  },
  {
    id: "03",
    icon: Award,
    title: "Industry Leaders",
    description: "25+ years serving aerospace, automotive, construction, and marine industries.",
    highlight: "25+ Years",
  },
  {
    id: "04",
    icon: Users,
    title: "Expert Support",
    description: "Dedicated technical team for product selection, specifications, and custom solutions.",
    highlight: "24/7 Support",
  },
];

export function TrustIndicators() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="section-padding bg-background relative">
      <div className="container-wide">
        {/* Section marker */}
        <div className="section-marker">
          <span className="section-marker-number">01</span>
          <div className="section-marker-line" />
          <span className="section-marker-text">Why Choose Us</span>
        </div>

        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          {/* Left - Title */}
          <ScrollReveal className="lg:col-span-5">
            <h2 className="display-lg text-foreground mb-6">
              Trusted by
              <br />
              <span className="font-serif italic text-accent">Industry Leaders</span>
            </h2>
            <p className="body-lg max-w-md">
              Decades of expertise delivering precision fasteners to the world's 
              most demanding industries. No compromises.
            </p>
          </ScrollReveal>

          {/* Right - Large number */}
          <div className="lg:col-span-7 flex items-end justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-right"
            >
              <span className="font-display text-[12rem] md:text-[16rem] lg:text-[20rem] font-medium leading-none text-muted/30">
                25
              </span>
              <p className="font-mono text-sm tracking-widest text-muted-foreground -mt-8">
                YEARS OF EXCELLENCE
              </p>
            </motion.div>
          </div>
        </div>

        {/* Kanban-style capability cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {capabilities.map((capability, index) => (
            <ScrollReveal key={capability.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ backgroundColor: "hsl(var(--card))" }}
                className="group bg-background p-8 h-full cursor-pointer transition-colors duration-400"
              >
                {/* Number + Icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs text-muted-foreground">
                    {capability.id}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-400">
                    <capability.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {capability.description}
                </p>

                {/* Highlight tag */}
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-stone-light text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {capability.highlight}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/0 group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
