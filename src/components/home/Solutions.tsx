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
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <ScrollReveal>
            <span className="label-sm text-accent mb-4 block">Our Services</span>
            <h2 className="display-lg text-foreground mb-6">
              Solutions for Every Business
            </h2>
            <p className="body-lg mb-8">
              From small orders to large-scale industrial supply, we provide flexible 
              solutions that fit your needs.
            </p>
            <Link to="/solutions" className="btn-primary">
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          {/* Right - Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} delay={index * 0.1}>
                <Link to={solution.href}>
                  <motion.div
                    whileHover={{ y: -4, x: 4 }}
                    className="group bg-background rounded-xl p-6 shadow-subtle hover:shadow-card transition-all duration-300 border border-transparent hover:border-accent/20"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <solution.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
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
