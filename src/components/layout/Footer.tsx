import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  products: [
    { name: "Bolts & Screws", href: "/products/bolts-screws" },
    { name: "Nuts & Washers", href: "/products/nuts-washers" },
    { name: "Anchors & Fixings", href: "/products/anchors-fixings" },
    { name: "Tools & Hardware", href: "/products/tools-hardware" },
  ],
  company: [
    { name: "About Us", href: "/company/about" },
    { name: "Our Team", href: "/company/team" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  solutions: [
    { name: "Pre-Packing", href: "/solutions/pre-packing" },
    { name: "Retail Sales", href: "/solutions/retail-sales" },
    { name: "Delivery", href: "/solutions/delivery" },
    { name: "How to Order", href: "/solutions/how-to-order" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main footer */}
      <div className="container-wide py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-4 md:mb-6">
              <img 
                src={logo} 
                alt="Pegasus Premium" 
                className="h-12 md:h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 mb-4 md:mb-6 max-w-sm text-sm md:text-base">
              Your trusted partner for quality industrial fasteners in South Africa. 
              Serving businesses nationwide with premium products and expert service.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2 md:space-y-3">
              <a href="tel:+27117941234" className="flex items-center gap-2 md:gap-3 text-white/70 hover:text-accent transition-colors text-sm md:text-base">
                <Phone className="w-4 h-4" />
                <span>+27 (0) 11 794 1234</span>
              </a>
              <a href="mailto:info@pegasuspremium.co.za" className="flex items-center gap-2 md:gap-3 text-white/70 hover:text-accent transition-colors text-sm md:text-base">
                <Mail className="w-4 h-4" />
                <span className="truncate">info@pegasuspremium.co.za</span>
              </a>
              <div className="flex items-start gap-2 md:gap-3 text-white/70 text-sm md:text-base">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Randburg, Johannesburg<br />South Africa</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">Products</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-accent transition-colors text-sm md:text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions - hidden on smallest mobile, show on sm+ */}
          <div className="col-span-1 hidden sm:block">
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">Solutions</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-accent transition-colors text-sm md:text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">Company</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 hover:text-accent transition-colors text-sm md:text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-white/60 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Pegasus Premium. All rights reserved.
            </p>
            <p className="text-white/60 text-xs md:text-sm">
              Website by{" "}
              <a 
                href="https://architeq.co.za" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                Architeq Web Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
