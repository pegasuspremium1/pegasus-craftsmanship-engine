import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Shield, Truck, Award, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "ISO 9001 certified manufacturing processes with rigorous quality control at every stage.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Reliable next-day delivery across the UK and efficient international shipping solutions.",
  },
  {
    icon: Award,
    title: "Industry Leaders",
    description: "25+ years of expertise serving aerospace, automotive, and construction sectors.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Dedicated technical team ready to assist with product selection and specifications.",
  },
];

const stats = [
  { value: 10000, suffix: "+", label: "Products Available" },
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Active Clients" },
  { value: 98, suffix: "%", label: "On-Time Delivery" },
];

export function TrustIndicators() {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
              Why Choose Us
            </span>
            <div className="w-12 h-px bg-accent" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Decades of expertise delivering precision fasteners to the world's most demanding industries.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-2xl p-8 h-full shadow-premium-sm hover:shadow-premium-lg transition-shadow duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-copper flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Banner */}
        <ScrollReveal>
          <div className="bg-gradient-charcoal rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
