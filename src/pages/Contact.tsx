import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/contact/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+44 (0) 123 456 789", "+44 (0) 123 456 790"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@pegasuspremium.com", "sales@pegasuspremium.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Industrial Estate", "Birmingham, B1 1AA", "United Kingdom"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"],
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 bg-gradient-hero">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-copper" />
              <span className="text-copper text-sm font-semibold uppercase tracking-[0.2em]">
                Contact Us
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
              Let's Build Something<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-copper-light">
                Great Together
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Have a question about our products or need a custom solution? 
              Our team of experts is ready to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                  Get in Touch
                </h2>
              </ScrollReveal>

              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <ScrollReveal key={item.title} delay={index * 0.1}>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Map placeholder */}
              <ScrollReveal delay={0.4} className="mt-12">
                <div className="aspect-video rounded-2xl overflow-hidden bg-secondary">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155422.85519980658!2d-1.9983319!3d52.4862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham%2C%20UK!5e0!3m2!1sen!2s!4v1635959481000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.2}>
                <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-premium-md">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
