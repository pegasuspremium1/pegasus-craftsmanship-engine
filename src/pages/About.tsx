import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Lightbulb } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every component we supply meets the highest standards of accuracy and consistency.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build lasting relationships with clients, becoming an extension of their operations.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "ISO 9001 certified processes ensure every product exceeds industry standards.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously evolving our solutions to meet the demands of modern manufacturing.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 bg-gradient-hero">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-copper" />
                <span className="text-copper text-sm font-semibold uppercase tracking-[0.2em]">
                  About Us
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
                Engineered for<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-copper-light">
                  Excellence
                </span>
              </h1>
              <p className="text-xl text-white/60">
                For over 25 years, Pegasus Premium has been at the forefront of industrial 
                fastener supply, serving manufacturers across the globe with precision, 
                reliability, and expertise.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80"
                  alt="Industrial manufacturing"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/50 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Team at work"
                  className="rounded-2xl shadow-premium-lg"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-8 -right-8 bg-gradient-copper rounded-2xl p-6 text-white shadow-copper"
                >
                  <div className="font-display text-4xl font-bold mb-1">
                    <AnimatedCounter end={25} suffix="+" />
                  </div>
                  <div className="text-sm text-white/80">Years of Excellence</div>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1998, Pegasus Premium began with a simple mission: to provide 
                  manufacturers with fastening solutions they could rely on absolutely. What 
                  started as a small warehouse operation has grown into one of the UK's leading 
                  industrial fastener suppliers.
                </p>
                <p>
                  Our success is built on understanding that in manufacturing, precision matters. 
                  Every fastener we supply is sourced from certified manufacturers and undergoes 
                  rigorous quality control. We don't just sell products; we provide solutions 
                  that keep production lines running smoothly.
                </p>
                <p>
                  Today, we serve over 500 clients across aerospace, automotive, construction, 
                  and general engineering sectors. Our team of technical experts works closely 
                  with each client to ensure they have exactly what they need, when they need it.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <ScrollReveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
                Our Values
              </span>
              <div className="w-12 h-px bg-accent" />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              What Drives Us
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-background rounded-2xl p-8 text-center h-full shadow-premium-sm hover:shadow-premium-lg transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-charcoal">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
              Join hundreds of manufacturers who trust Pegasus Premium for their fastening needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="btn-premium-copper">
                <span>View Products</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/contact" className="btn-hero">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
