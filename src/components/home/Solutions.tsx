import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Package, Store, Truck, Settings } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const solutions = [
  {
    icon: Package,
    title: "Pre-Packing",
    description: "Custom packing solutions tailored to your production line",
    href: "/solutions/pre-packing",
  },
  {
    icon: Store,
    title: "Retail Sales",
    description: "Point-of-sale ready packaging for retail environments",
    href: "/solutions/retail-sales",
  },
  {
    icon: Truck,
    title: "Delivery Services",
    description: "Reliable nationwide delivery across South Africa",
    href: "/solutions/delivery",
  },
  {
    icon: Settings,
    title: "Custom Orders",
    description: "Bespoke fastener solutions for unique requirements",
    href: "/solutions/how-to-order",
  },
];

export function Solutions() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <ScrollReveal>
            <span className="label-sm text-accent mb-3 md:mb-4 block">Our Services</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4 md:mb-6">
              Solutions for Every Business
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6 md:mb-8">
              From small orders to large-scale industrial supply, we provide flexible 
              solutions that fit your needs.
            </p>
            <Link to="/solutions" className="btn-primary text-sm md:text-base">
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          {/* Right - Cards */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} delay={index * 0.1}>
                <Link to={solution.href}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group bg-background rounded-lg md:rounded-xl p-4 md:p-6 shadow-subtle hover:shadow-card transition-all duration-300 border border-transparent hover:border-accent/20 h-full"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 md:mb-4">
                      <solution.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 md:mb-2 group-hover:text-accent transition-colors text-sm md:text-base">
                      {solution.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
