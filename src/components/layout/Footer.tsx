import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  company: [
    { name: "About", href: "/company/about" },
    { name: "Team", href: "/company/team" },
    { name: "Case Studies", href: "/company/case-studies" },
    { name: "Blog", href: "/blog" },
  ],
  products: [
    { name: "Hexagonal Fasteners", href: "/products/hexagonal-fasteners" },
    { name: "Machine Screws", href: "/products/machine-screws" },
    { name: "Socket Fasteners", href: "/products/socket-fasteners" },
    { name: "All Products", href: "/products" },
  ],
  solutions: [
    { name: "Pre-Packing", href: "/solutions/pre-packing" },
    { name: "Retail Sales", href: "/solutions/retail-sales" },
    { name: "How to Order", href: "/solutions/how-to-order" },
    { name: "Delivery", href: "/solutions/delivery" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-wide py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <span className="label-editorial text-primary-foreground/50 mb-6 block">
                Get Started
              </span>
              <h2 className="display-lg mb-4">
                Ready to
                <br />
                <span className="font-serif italic text-accent">Partner?</span>
              </h2>
              <p className="text-primary-foreground/60 text-lg max-w-md">
                Join 500+ manufacturers who trust Pegasus Premium 
                for their industrial fastening needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-5 flex flex-col sm:flex-row gap-4 lg:justify-end"
            >
              <Link
                to="/contact"
                className="btn-editorial text-sm px-8 py-4 bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <span>Get in Touch</span>
              </Link>
              <Link
                to="/solutions/how-to-order"
                className="btn-editorial text-sm px-8 py-4 border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors"
              >
                <span>Order Online</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-4">
            <div className="mb-6">
              <img 
                src={logo} 
                alt="Pegasus Premium" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/50 text-sm mb-8 max-w-xs leading-relaxed">
              Industry-leading supplier of premium fasteners and engineered 
              components for manufacturers worldwide.
            </p>
            <div className="space-y-3">
              <a href="tel:+44123456789" className="flex items-center gap-3 text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors group">
                <Phone className="w-4 h-4" />
                <span>+44 (0) 123 456 789</span>
              </a>
              <a href="mailto:info@pegasuspremium.com" className="flex items-center gap-3 text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@pegasuspremium.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/50">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Industrial Estate<br />Birmingham, B1 1AA</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary-foreground/40 mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary-foreground/40 mb-6">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary-foreground/40 mb-6">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Pegasus Premium
            </p>
            <div className="flex items-center gap-4 text-xs text-primary-foreground/40">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms</Link>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-primary-foreground/40">
            <span>Website by</span>
            <a 
              href="https://architeq.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors font-medium"
            >
              Architeq Web Agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
