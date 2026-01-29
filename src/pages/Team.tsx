import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "James Harrison",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "25+ years in industrial supply chain management. Leads Pegasus Premium's strategic vision.",
  },
  {
    name: "Sarah Mitchell",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Mechanical engineer with expertise in fastener specifications and quality assurance.",
  },
  {
    name: "David Chen",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Oversees logistics and warehouse operations ensuring on-time delivery.",
  },
  {
    name: "Emma Thompson",
    role: "Sales Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Builds lasting client relationships across aerospace and automotive sectors.",
  },
  {
    name: "Michael Roberts",
    role: "Quality Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Leads our ISO 9001 certified quality control and testing procedures.",
  },
  {
    name: "Lisa Anderson",
    role: "Customer Success Lead",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
    bio: "Dedicated to ensuring every client receives exceptional service and support.",
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 bg-gradient-hero">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-copper" />
              <span className="text-copper text-sm font-semibold uppercase tracking-[0.2em]">
                Our Team
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
              Meet the Experts<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-copper-light">
                Behind Pegasus
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Our dedicated team brings decades of combined experience in industrial 
              fasteners, engineering, and customer service.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-premium-sm hover:shadow-premium-lg transition-all duration-500"
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
                    
                    {/* Social links overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-copper transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-copper transition-colors"
                        >
                          <Mail className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-wide">
          <ScrollReveal>
            <div className="bg-gradient-charcoal rounded-3xl p-12 lg:p-16 text-center">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                Join Our Team
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals to join our growing team. 
                Check out our current openings.
              </p>
              <a href="mailto:careers@pegasuspremium.com" className="btn-premium-copper">
                View Opportunities
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
