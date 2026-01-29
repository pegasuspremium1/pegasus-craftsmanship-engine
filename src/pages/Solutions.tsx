import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const solutionsData: Record<string, {
  title: string;
  description: string;
  heroImage: string;
  benefits: string[];
  features: { title: string; description: string }[];
}> = {
  "pre-packing": {
    title: "Pre-Packing Solutions",
    description: "Custom packing solutions tailored to your production line requirements. Reduce handling time, minimize errors, and increase efficiency with our bespoke packaging services.",
    heroImage: "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=1200&q=80",
    benefits: [
      "Reduce assembly line handling time by up to 40%",
      "Eliminate counting and sorting at point of use",
      "Custom quantities matched to your production runs",
      "Clear labeling and barcoding options",
      "Reduced inventory management overhead",
    ],
    features: [
      { title: "Custom Quantities", description: "Fasteners packed in exact quantities you need, from single units to thousands." },
      { title: "Branded Packaging", description: "Your logo and specifications on every pack for easy identification." },
      { title: "Kitting Services", description: "Multiple components assembled into single kits for production stations." },
      { title: "Quality Sealed", description: "Protected packaging ensures components arrive in perfect condition." },
    ],
  },
  "retail-sales": {
    title: "Retail Sales Solutions",
    description: "Point-of-sale ready packaging and display solutions for retail environments, trade counters, and hardware stores. Professional presentation that drives sales.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    benefits: [
      "Attractive, professional retail packaging",
      "Ready-to-shelf display solutions",
      "Competitive pricing for resellers",
      "Flexible order quantities",
      "Rapid restocking capabilities",
    ],
    features: [
      { title: "Display Ready", description: "Packaging designed for immediate shelf placement with hanging tabs and barcodes." },
      { title: "Bulk Pricing", description: "Competitive wholesale pricing structures for retailers of all sizes." },
      { title: "Quick Turnaround", description: "Fast order processing and dispatch for efficient inventory replenishment." },
      { title: "Marketing Support", description: "POS materials and product information sheets available." },
    ],
  },
  "how-to-order": {
    title: "How to Order",
    description: "Our streamlined ordering process is designed to make procurement simple and efficient. From quote request to delivery, we handle every detail with precision.",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    benefits: [
      "Simple online or phone ordering",
      "Dedicated account management",
      "Flexible payment terms available",
      "Order tracking and notifications",
      "Easy reordering of previous purchases",
    ],
    features: [
      { title: "Request a Quote", description: "Submit your requirements and receive a detailed quotation within 24 hours." },
      { title: "Place Your Order", description: "Order via phone, email, or your dedicated account portal." },
      { title: "Order Confirmation", description: "Receive confirmation with expected delivery date and tracking information." },
      { title: "Fast Delivery", description: "UK next-day delivery on stock items ordered before 2pm." },
    ],
  },
  "delivery": {
    title: "Delivery Services",
    description: "Reliable logistics with next-day UK delivery and efficient international shipping solutions. We ensure your fasteners arrive when you need them.",
    heroImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80",
    benefits: [
      "Next-day UK delivery on stock items",
      "Same-day dispatch on orders before 2pm",
      "International shipping to 50+ countries",
      "Live tracking on all shipments",
      "Flexible delivery scheduling options",
    ],
    features: [
      { title: "UK Next-Day", description: "Orders placed before 2pm dispatched same day for next-day delivery." },
      { title: "International", description: "Competitive international shipping with customs documentation handled." },
      { title: "Scheduled Delivery", description: "Choose your preferred delivery date and time window." },
      { title: "Track & Trace", description: "Real-time tracking information sent directly to your inbox." },
    ],
  },
};

const Solutions = () => {
  const { slug } = useParams();
  
  // If we have a slug, show the specific solution page
  if (slug && solutionsData[slug]) {
    const solution = solutionsData[slug];
    
    return (
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pb-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={solution.heroImage}
              alt={solution.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-copper" />
                <span className="text-copper text-sm font-semibold uppercase tracking-[0.2em]">
                  Solutions
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
                {solution.title}
              </h1>
              <p className="text-xl text-white/60 max-w-2xl">
                {solution.description}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
                  Key Benefits
                </h2>
                <ul className="space-y-4">
                  {solution.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <img
                  src={solution.heroImage}
                  alt={solution.title}
                  className="rounded-2xl shadow-elevated"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                How It Works
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solution.features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-background rounded-2xl p-8 h-full shadow-premium-sm hover:shadow-premium-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                      <span className="font-display font-bold text-accent">{index + 1}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-charcoal">
          <div className="container-wide text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
                Contact our team to discuss how we can tailor our solutions to your needs.
              </p>
              <Link to="/contact" className="btn-premium-copper">
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </Layout>
    );
  }

  // Solutions overview page
  const allSolutions = Object.entries(solutionsData).map(([slug, data]) => ({
    slug,
    ...data,
  }));

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 bg-gradient-hero">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-copper" />
              <span className="text-copper text-sm font-semibold uppercase tracking-[0.2em]">
                Solutions
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
              Tailored to Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-copper-light">
                Business Needs
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              End-to-end fastener solutions designed to streamline your operations 
              and maximize efficiency.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {allSolutions.map((solution, index) => (
              <ScrollReveal key={solution.slug} delay={index * 0.1}>
                <Link to={`/solutions/${solution.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative bg-card rounded-2xl overflow-hidden shadow-premium-md hover:shadow-elevated transition-all h-full"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={solution.heroImage}
                        alt={solution.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-copper transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-white/70 mb-4">
                        {solution.description.slice(0, 120)}...
                      </p>
                      <div className="inline-flex items-center gap-2 text-copper font-semibold text-sm">
                        Learn More
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
