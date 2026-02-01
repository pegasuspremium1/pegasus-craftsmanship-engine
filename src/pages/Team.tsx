import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "James van der Berg",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "25+ years in industrial supply chain management. Leads Pegasus Premium's strategic vision.",
  },
  {
    name: "Sarah Nkosi",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Mechanical engineer with expertise in fastener specifications and quality assurance.",
  },
  {
    name: "David Molefe",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Oversees logistics and warehouse operations ensuring on-time delivery.",
  },
  {
    name: "Emma Botha",
    role: "Sales Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Builds lasting client relationships across construction and automotive sectors.",
  },
  {
    name: "Michael Dlamini",
    role: "Quality Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Leads our ISO 9001 certified quality control and testing procedures.",
  },
  {
    name: "Lisa Pretorius",
    role: "Customer Success Lead",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
    bio: "Dedicated to ensuring every client receives exceptional service and support.",
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section - Readable white text */}
      <section className="page-hero">
        <div className="container-wide">
          <ScrollReveal>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Team
            </span>
            <h1 className="display-lg mb-4">
              Meet the Experts
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
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
                  className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Social links overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-accent transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-accent transition-colors"
                        >
                          <Mail className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-3">
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
            <div className="bg-primary rounded-2xl p-12 lg:p-16 text-center">
              <h2 className="display-lg text-white mb-4">
                Join Our Team
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals to join our growing team. 
                Check out our current openings.
              </p>
              <a href="mailto:careers@pegasuspremium.co.za" className="btn-accent">
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
