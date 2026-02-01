import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/contact/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+27 (0) 11 794 1234", "+27 (0) 11 794 1235"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@pegasuspremium.co.za", "sales@pegasuspremium.co.za"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Industrial Road", "Randburg, Johannesburg", "South Africa"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 7:30 AM - 5:00 PM", "Sat: 8:00 AM - 12:00 PM"],
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section - Readable white text on dark bg */}
      <section className="page-hero">
        <div className="container-wide">
          <ScrollReveal>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
              Contact Us
            </span>
            <h1 className="display-lg mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Have a question about our products or need a custom solution? 
              Our team of experts is ready to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="heading-xl text-foreground mb-8">
                  Contact Details
                </h2>
              </ScrollReveal>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <ScrollReveal key={item.title} delay={index * 0.1}>
                    <div className="flex gap-4 p-4 bg-secondary rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Map */}
              <ScrollReveal delay={0.4} className="mt-8">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57371.47775689776!2d27.9833!3d-26.0936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sRandburg%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1635959481000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.2}>
                <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card">
                  <h2 className="heading-xl text-foreground mb-2">
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
