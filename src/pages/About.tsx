import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Lightbulb } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
      {/* Hero Section - Readable white text */}
      <section className="page-hero">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h1 className="display-lg mb-4">
                Your Trusted Fastener Partner
              </h1>
              <p className="text-lg text-white/80">
                Pegasus Premium is at the forefront of industrial fastener supply, 
                serving manufacturers across South Africa with precision, reliability, 
                and expertise.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80"
                  alt="Industrial manufacturing"
                  className="w-full aspect-[4/3] object-cover"
                />
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
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Team at work"
                className="rounded-2xl shadow-card"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <span className="label-sm text-accent mb-4 block">Our Story</span>
              <h2 className="display-lg text-foreground mb-6">
                Built on Quality & Trust
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Based in Johannesburg, Pegasus Premium was founded with a simple mission: to provide 
                  South African manufacturers with fastening solutions they could rely on absolutely.
                </p>
                <p>
                  We are committed to becoming one of South Africa's leading industrial fastener 
                  suppliers. Our focus is built on understanding that in manufacturing, quality 
                  and reliability matter above all else.
                </p>
                <p>
                  We serve clients across construction, automotive, and general engineering 
                  sectors throughout South Africa and beyond.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <ScrollReveal className="text-center mb-12">
            <span className="label-sm text-accent mb-4 block">Our Values</span>
            <h2 className="display-lg text-foreground">
              What Drives Us
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-background rounded-xl p-8 text-center h-full shadow-subtle hover:shadow-card transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
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
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="display-lg text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Join hundreds of South African manufacturers who trust Pegasus Premium for their fastening needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="btn-accent">
                <span>View Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline-white">
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
