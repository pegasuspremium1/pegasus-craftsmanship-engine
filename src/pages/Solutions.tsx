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
      { title: "Fast Delivery", description: "Nationwide delivery across South Africa on orders placed before 2pm." },
    ],
  },
  "delivery": {
    title: "Delivery Services",
    description: "Reliable logistics with nationwide South African delivery and efficient service. We ensure your fasteners arrive when you need them.",
    heroImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80",
    benefits: [
      "Fast delivery across Gauteng",
      "Same-day dispatch on orders before 2pm",
      "Nationwide delivery across South Africa",
      "Live tracking on all shipments",
      "Flexible delivery scheduling options",
    ],
    features: [
      { title: "Gauteng Express", description: "Orders placed before 2pm dispatched same day for next-day Gauteng delivery." },
      { title: "National Coverage", description: "Reliable delivery to all major centers across South Africa." },
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
        {/* Hero - White text on dark bg */}
        <section className="page-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={solution.heroImage}
              alt={solution.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
                Solutions
              </span>
              <h1 className="display-lg mb-4">
                {solution.title}
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
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
                <span className="label-sm text-accent mb-4 block">Benefits</span>
                <h2 className="display-lg text-foreground mb-8">
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
                  className="rounded-2xl shadow-card"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <ScrollReveal className="text-center mb-12">
              <h2 className="display-lg text-foreground">
                How It Works
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solution.features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-background rounded-xl p-8 h-full shadow-subtle hover:shadow-card transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                      <span className="font-bold text-accent">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
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
        <section className="section-padding bg-primary">
          <div className="container-wide text-center">
            <ScrollReveal>
              <h2 className="display-lg text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Contact our team to discuss how we can tailor our solutions to your needs.
              </p>
              <Link to="/contact" className="btn-accent">
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
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
      {/* Hero - White text */}
      <section className="page-hero">
        <div className="container-wide">
          <ScrollReveal>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
              Solutions
            </span>
            <h1 className="display-lg mb-4">
              Tailored to Your Business
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
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
                    className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all h-full"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={solution.heroImage}
                        alt={solution.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-white/70 mb-4 line-clamp-2">
                        {solution.description}
                      </p>
                      <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm">
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
