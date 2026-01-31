import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const orderSteps = [
  { step: "01", text: "Browse our extensive product catalog" },
  { step: "02", text: "Request a quote or add items to order" },
  { step: "03", text: "Our team confirms specifications" },
  { step: "04", text: "Fast, reliable delivery to you" },
];

export function OrderCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-editorial opacity-30" />

      <div className="container-wide relative">
        {/* Section marker */}
        <div className="section-marker">
          <span className="section-marker-number">04</span>
          <div className="section-marker-line" />
          <span className="section-marker-text">How to Order</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left content */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <h2 className="display-lg text-foreground mb-6">
                Simple,
                <br />
                <span className="font-serif italic text-accent">Streamlined</span>
                <br />
                Ordering
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="body-lg mb-12 max-w-md">
                Our efficient ordering process saves you time. From quote to delivery, 
                we handle every detail with precision.
              </p>
            </ScrollReveal>

            {/* Steps - Kanban style */}
            <div className="space-y-0 border-l border-border">
              {orderSteps.map((item, index) => (
                <ScrollReveal key={item.step} delay={0.15 + index * 0.1}>
                  <motion.div
                    whileHover={{ x: 4, backgroundColor: "hsl(var(--secondary) / 0.5)" }}
                    className="group flex items-start gap-4 pl-6 py-4 -ml-px border-l-2 border-transparent hover:border-accent transition-all duration-300"
                  >
                    <span className="font-mono text-xs text-accent mt-1">
                      {item.step}
                    </span>
                    <span className="text-foreground group-hover:text-accent transition-colors">
                      {item.text}
                    </span>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.5} className="mt-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/solutions/how-to-order" className="btn-editorial-primary">
                  <span className="flex items-center gap-3">
                    Start Ordering
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link to="/contact" className="btn-editorial-outline">
                  Request a Quote
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Visual */}
          <div className="lg:col-span-7 lg:pl-12">
            <ScrollReveal delay={0.2} direction="right">
              <motion.div style={{ y }} className="relative">
                {/* Main image */}
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                    alt="Manufacturing precision"
                    className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Overlay with grid */}
                  <div className="absolute inset-0 bg-primary/10" />
                </div>

                {/* Floating stat card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-8 -left-8 bg-background border border-border p-6 shadow-elevated max-w-[280px]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-display font-medium text-foreground mb-1">
                        Same Day Dispatch
                      </p>
                      <p className="text-sm text-muted-foreground">
                        On orders placed before 2pm
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-accent -translate-y-4 translate-x-4" />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
