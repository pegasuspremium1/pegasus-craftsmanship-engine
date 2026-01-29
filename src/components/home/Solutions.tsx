import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Store, Truck, ShoppingCart } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const solutions = [
  {
    icon: Package,
    title: "Pre-Packing",
    description: "Custom packing solutions tailored to your production line requirements. Reduce handling time and increase efficiency.",
    href: "/solutions/pre-packing",
  },
  {
    icon: Store,
    title: "Retail Sales",
    description: "Point-of-sale ready packaging and display solutions for retail environments and trade counters.",
    href: "/solutions/retail-sales",
  },
  {
    icon: ShoppingCart,
    title: "How to Order",
    description: "Simple, streamlined ordering process with dedicated account management and flexible payment options.",
    href: "/solutions/how-to-order",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Reliable logistics with next-day UK delivery and efficient international shipping solutions.",
    href: "/solutions/delivery",
  },
];

export function Solutions() {
  return (
    <section className="section-padding bg-gradient-charcoal text-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-white/5 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] border border-white/5 rounded-full"
      />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-copper" />
            <span className="text-copper text-sm font-semibold uppercase tracking-[0.2em]">
              Our Solutions
            </span>
            <div className="w-12 h-px bg-copper" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Tailored to Your Needs
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            End-to-end fastener solutions designed to streamline your operations and boost efficiency.
          </p>
        </ScrollReveal>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <ScrollReveal key={solution.title} delay={index * 0.1}>
              <Link to={solution.href}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="group flex gap-6 p-8 rounded-2xl border border-white/10 hover:border-copper/50 hover:bg-white/5 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-xl bg-copper/10 flex items-center justify-center flex-shrink-0 group-hover:bg-copper/20 transition-colors">
                    <solution.icon className="w-8 h-8 text-copper" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-copper transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-copper font-semibold text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
