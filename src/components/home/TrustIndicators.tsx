import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Shield, Truck, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All products meet strict industry standards",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Nationwide delivery across South Africa",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Technical assistance when you need it",
  },
  {
    icon: Award,
    title: "ISO Certified",
    description: "Quality management systems in place",
  },
];

export function TrustIndicators() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container-wide">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-subtle"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
