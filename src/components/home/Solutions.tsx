import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Store, Truck, ShoppingCart } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const solutions = [
  {
    id: "01",
    icon: Package,
    title: "Pre-Packing",
    description: "Custom packing solutions tailored to your production line. Reduce handling time and boost efficiency.",
    href: "/solutions/pre-packing",
    stat: "40%",
    statLabel: "Time Saved",
  },
  {
    id: "02",
    icon: Store,
    title: "Retail Sales",
    description: "Point-of-sale ready packaging and display solutions for retail environments and trade counters.",
    href: "/solutions/retail-sales",
    stat: "500+",
    statLabel: "Retail Partners",
  },
  {
    id: "03",
    icon: ShoppingCart,
    title: "How to Order",
    description: "Simple, streamlined ordering with dedicated account management and flexible payment options.",
    href: "/solutions/how-to-order",
    stat: "24hr",
    statLabel: "Quote Response",
  },
  {
    id: "04",
    icon: Truck,
    title: "Delivery",
    description: "Reliable logistics with next-day UK delivery and efficient international shipping solutions.",
    href: "/solutions/delivery",
    stat: "98%",
    statLabel: "On-Time Rate",
  },
];

export function Solutions() {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Section marker - inverted */}
        <div className="section-marker mb-16">
          <span className="font-mono text-xs text-accent">03</span>
          <div className="flex-1 h-px bg-primary-foreground/10" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground/50">
            Our Solutions
          </span>
        </div>

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <ScrollReveal>
            <h2 className="display-lg">
              Tailored to
              <br />
              <span className="font-serif italic text-accent">Your Needs</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="flex items-end">
            <p className="text-xl text-primary-foreground/60 max-w-md">
              End-to-end fastener solutions designed to streamline your 
              operations and boost efficiency at every stage.
            </p>
          </ScrollReveal>
        </div>

        {/* Solutions - Horizontal kanban cards */}
        <div className="space-y-4">
          {solutions.map((solution, index) => (
            <ScrollReveal key={solution.id} delay={index * 0.1}>
              <Link to={solution.href}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group grid grid-cols-12 gap-6 p-6 lg:p-8 border border-primary-foreground/10 hover:border-accent/50 hover:bg-primary-foreground/5 transition-all duration-400"
                >
                  {/* Number */}
                  <div className="col-span-2 lg:col-span-1">
                    <span className="font-mono text-xs text-primary-foreground/40">
                      {solution.id}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="col-span-10 lg:col-span-1 flex lg:justify-center">
                    <div className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-400">
                      <solution.icon className="w-5 h-5 text-primary-foreground/60 group-hover:text-accent transition-colors" />
                    </div>
                  </div>

                  {/* Title + Description */}
                  <div className="col-span-12 lg:col-span-6">
                    <h3 className="font-display text-2xl font-medium mb-2 group-hover:text-accent transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-primary-foreground/50 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  {/* Stat */}
                  <div className="col-span-6 lg:col-span-2 flex flex-col justify-center">
                    <span className="font-display text-3xl font-medium text-accent">
                      {solution.stat}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-primary-foreground/40">
                      {solution.statLabel}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-6 lg:col-span-2 flex items-center justify-end">
                    <div className="flex items-center gap-3 text-primary-foreground/40 group-hover:text-accent transition-colors">
                      <span className="font-mono text-xs uppercase tracking-wider hidden md:block">
                        Learn More
                      </span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
