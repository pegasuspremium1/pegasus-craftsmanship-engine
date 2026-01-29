import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const orderSteps = [
  "Browse our extensive product catalog",
  "Request a quote or add items to your order",
  "Our team reviews and confirms specifications",
  "Fast, reliable delivery to your location",
];

export function OrderCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
                  Order Online
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Simple, Streamlined Ordering
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Our efficient ordering process is designed to save you time. From quote to delivery, 
                we handle every detail with precision.
              </p>
            </ScrollReveal>

            <div className="space-y-4 mb-10">
              {orderSteps.map((step, index) => (
                <ScrollReveal key={step} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-copper/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-copper font-semibold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{step}</span>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/solutions/how-to-order" className="btn-premium-copper">
                  <span>Start Ordering</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/contact" className="btn-premium-outline">
                  Request a Quote
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual */}
          <ScrollReveal delay={0.2} direction="right">
            <motion.div style={{ y }} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Manufacturing precision"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/60 via-transparent to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-background rounded-2xl p-6 shadow-elevated max-w-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Same Day Dispatch</p>
                    <p className="text-sm text-muted-foreground">On orders before 2pm</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
