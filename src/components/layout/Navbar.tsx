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
    name: "Company", 
    href: "/company",
    children: [
      { name: "About Pegasus Premium", href: "/company/about" },
      { name: "Meet the Team", href: "/company/team" },
      { name: "Case Studies", href: "/company/case-studies" },
    ]
  },
  { name: "Products", href: "/products", hasProducts: true },
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
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/98 backdrop-blur-md border-b border-border py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={logo} 
                alt="Pegasus Premium" 
                className="h-10 w-auto object-contain"
              />
              <div className="hidden sm:block h-6 w-px bg-border" />
              <span className="hidden sm:block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Premium Fasteners
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0">
            {mainNavItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1.5 px-4 py-2 font-medium text-sm transition-colors duration-300 ${
                    location.pathname === item.href 
                      ? "text-accent" 
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.name}
                  {(item.children || item.hasProducts) && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`} />
                  )}
                </Link>

                {/* Dropdown for company/solutions */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-0 mt-2 w-64 bg-background border border-border shadow-elevated p-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="flex items-center justify-between px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-accent transition-colors group"
                          >
                            {child.name}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
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
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-background border border-border shadow-elevated p-6"
                      >
                        <div className="flex gap-8">
                          <div className="flex-1">
                            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                              Product Categories
                            </h3>
                            <div className="grid grid-cols-3 gap-1">
                              {productCategories.map((category) => (
                                <Link
                                  key={category.name}
                                  to={category.href}
                                  className="px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-accent transition-colors"
                                >
                                  {category.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div className="w-48 bg-primary p-5 text-primary-foreground flex flex-col justify-between">
                            <div>
                              <h3 className="font-display font-medium text-base mb-2">
                                Need Help?
                              </h3>
                              <p className="text-xs text-primary-foreground/70 mb-4">
                                Our team is ready to assist with product selection.
                              </p>
                            </div>
                            <Link
                              to="/contact"
                              className="inline-flex items-center gap-2 text-xs font-medium hover:gap-3 transition-all"
                            >
                              Contact Us <ArrowRight className="w-3.5 h-3.5" />
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
              className="btn-editorial-primary text-xs px-6 py-3"
            >
              <span>Order Online</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="pt-24 px-6 h-full overflow-y-auto">
              <nav className="space-y-0 border-t border-border">
                {mainNavItems.map((item, index) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border"
                  >
                    <Link
                      to={item.href}
                      className="flex items-center justify-between py-5 font-display text-xl font-medium text-foreground"
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-mono text-xs text-muted-foreground">
                          0{index + 1}
                        </span>
                        {item.name}
                      </span>
                      {(item.children || item.hasProducts) && (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      )}
                    </Link>
                    {item.children && (
                      <div className="pl-10 pb-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block py-2 text-muted-foreground hover:text-accent transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>
              <div className="mt-8">
                <Link to="/solutions/how-to-order" className="btn-editorial-primary w-full justify-center">
                  <span>Order Online</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
