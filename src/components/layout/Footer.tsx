import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  company: [
    { name: "About Pegasus Premium", href: "/company/about" },
    { name: "Meet the Team", href: "/company/team" },
    { name: "Case Studies", href: "/company/case-studies" },
    { name: "Blog", href: "/blog" },
  ],
  products: [
    { name: "Anchors & Nails", href: "/products/anchors-nails" },
    { name: "Hexagonal Fasteners", href: "/products/hexagonal-fasteners" },
    { name: "Machine Screws", href: "/products/machine-screws" },
    { name: "View All Products", href: "/products" },
  ],
  solutions: [
    { name: "Pre-Packing", href: "/solutions/pre-packing" },
    { name: "Retail Sales", href: "/solutions/retail-sales" },
    { name: "How to Order", href: "/solutions/how-to-order" },
    { name: "Delivery", href: "/solutions/delivery" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container-wide py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl lg:text-4xl font-bold mb-3"
              >
                Ready to get started?
              </motion.h2>
              <p className="text-white/60 text-lg max-w-xl">
                Partner with Pegasus Premium for your industrial fastening needs. 
                Quality, reliability, and precision guaranteed.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="btn-premium text-sm bg-white text-primary hover:bg-white/90"
              >
                Get in Touch
              </Link>
              <Link
                to="/solutions/how-to-order"
                className="btn-premium text-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary"
              >
                Order Online
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="mb-6">
              <img 
                src={logo} 
                alt="Pegasus Premium" 
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              Industry-leading supplier of premium fasteners, fixings, and engineered components 
              for manufacturers worldwide.
            </p>
            <div className="space-y-3">
              <a href="tel:+44123456789" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +44 (0) 123 456 789
              </a>
              <a href="mailto:info@pegasuspremium.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@pegasuspremium.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Industrial Estate<br />Birmingham, B1 1AA<br />United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest mb-6">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest mb-6">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest mb-6">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Pegasus Premium. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/40">
            <span>Website built by</span>
            <a 
              href="https://architeq.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors font-medium"
            >
              Architeq Web Agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}