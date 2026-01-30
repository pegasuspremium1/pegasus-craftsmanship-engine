import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const productCategories = [
  { name: "Anchors & Nails", href: "/products/anchors-nails" },
  { name: "Furniture Fasteners", href: "/products/furniture-fasteners" },
  { name: "Hexagonal Fasteners", href: "/products/hexagonal-fasteners" },
  { name: "Machined Parts", href: "/products/machined-parts" },
  { name: "Machine Screws", href: "/products/machine-screws" },
  { name: "Nuts", href: "/products/nuts" },
  { name: "Pins", href: "/products/pins" },
  { name: "Rivets", href: "/products/rivets" },
  { name: "Self Drilling Screws", href: "/products/self-drilling-screws" },
  { name: "Self Tapping Screws", href: "/products/self-tapping-screws" },
  { name: "Socket Fasteners", href: "/products/socket-fasteners" },
  { name: "Threaded Rods & Studs", href: "/products/threaded-rods-studs" },
  { name: "Washers & Clips", href: "/products/washers-clips" },
  { name: "Tools & Hardware", href: "/products/tools-hardware" },
  { name: "Wood Screws", href: "/products/wood-screws" },
];

const mainNavItems = [
  { name: "Home", href: "/" },
  { 
    name: "Our Company", 
    href: "/company",
    children: [
      { name: "About Pegasus Premium", href: "/company/about" },
      { name: "Meet the Team", href: "/company/team" },
      { name: "Case Studies", href: "/company/case-studies" },
    ]
  },
  { name: "Product Range", href: "/products", hasProducts: true },
  { 
    name: "Solutions", 
    href: "/solutions",
    children: [
      { name: "Pre-Packing", href: "/solutions/pre-packing" },
      { name: "Retail Sales", href: "/solutions/retail-sales" },
      { name: "How to Order", href: "/solutions/how-to-order" },
      { name: "Delivery", href: "/solutions/delivery" },
    ]
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-premium-md py-3"
            : "bg-background/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={logo} 
                alt="Pegasus Premium" 
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-4 py-2 font-medium text-sm transition-colors duration-300 text-foreground hover:text-primary"
                >
                  {item.name}
                  {(item.children || item.hasProducts) && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`} />
                  )}
                </Link>

                {/* Dropdown for company/solutions */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-background rounded-xl shadow-elevated border border-border p-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="flex items-center justify-between px-4 py-3 rounded-lg text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors group"
                          >
                            {child.name}
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Mega menu for products */}
                {item.hasProducts && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-background rounded-xl shadow-elevated border border-border p-6"
                      >
                        <div className="flex gap-8">
                          <div className="flex-1">
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                              Product Categories
                            </h3>
                            <div className="grid grid-cols-3 gap-2">
                              {productCategories.map((category) => (
                                <Link
                                  key={category.name}
                                  to={category.href}
                                  className="px-3 py-2 rounded-lg text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                                >
                                  {category.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div className="w-64 bg-primary rounded-xl p-6 text-white">
                            <h3 className="font-display font-bold text-lg mb-2">
                              Need Help?
                            </h3>
                            <p className="text-sm text-white/70 mb-4">
                              Our team is ready to assist with product selection and custom solutions.
                            </p>
                            <Link
                              to="/contact"
                              className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all"
                            >
                              Contact Us <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/solutions/how-to-order"
              className="btn-premium text-xs px-6 py-3 bg-primary text-white hover:bg-primary/90 shadow-blue"
            >
              Order Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="pt-24 px-6 h-full overflow-y-auto">
              <nav className="space-y-1">
                {mainNavItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="flex items-center justify-between py-4 text-xl font-display font-semibold text-foreground border-b border-border"
                    >
                      {item.name}
                      {(item.children || item.hasProducts) && <ChevronDown className="w-5 h-5" />}
                    </Link>
                    {item.children && (
                      <div className="pl-4 py-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block py-2 text-muted-foreground hover:text-primary"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-8">
                <Link to="/solutions/how-to-order" className="btn-premium-copper w-full justify-center">
                  Order Online
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}