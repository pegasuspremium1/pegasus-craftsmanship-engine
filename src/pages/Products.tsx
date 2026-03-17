import { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Plus, Minus, X, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { pdfProducts } from "@/data/productspp";

const products = pdfProducts.map((p) => ({
  id: p.id,
  name: p.name,
  category: p.category ?? "Products",
  image: p.image,
  price: 0,
}));

const toAnchorId = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { items, addItem, removeItem, updateQuantity, total, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"All" | string>("All");

  const categories = useMemo(
    () =>
      Array.from(new Set(products.map((p) => p.category))).sort((a, b) => a.localeCompare(b)),
    []
  );

  const normalizedQuery = query.trim().toLowerCase();
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = categoryFilter === "All" || p.category === categoryFilter;
      const matchesQuery = !normalizedQuery || p.name.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [categoryFilter, normalizedQuery]);

  const groupedProducts = useMemo(() => {
    return filteredProducts.reduce<Record<string, typeof products>>((acc, p) => {
      (acc[p.category] ??= []).push(p);
      return acc;
    }, {});
  }, [filteredProducts]);

  const visibleCategories = useMemo(() => {
    return categoryFilter === "All"
      ? Object.keys(groupedProducts).sort((a, b) => a.localeCompare(b))
      : [categoryFilter];
  }, [categoryFilter, groupedProducts]);

  const jumpCategories = useMemo(() => {
    if (categoryFilter !== "All") return [];
    if (normalizedQuery) return [];
    return categories;
  }, [categories, categoryFilter, normalizedQuery]);

  const scrollToCategory = (category: string) => {
    const el = document.getElementById(toAnchorId(category));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleRequestQuote = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    
    const cartMessage = items.map(item => 
      `- ${item.name} x${item.quantity}`
    ).join('\n');
    
    const fullMessage = `Quote Request:\n\n${cartMessage}\n\nPlease provide pricing and availability for these items.`;
    
    navigate('/contact', { 
      state: { 
        quoteMessage: fullMessage,
        cartItems: items,
        cartTotal: total
      } 
    });
    
    setIsCartOpen(false);
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 lg:pb-20 hero-gradient">
        <div className="container-wide">
          <ScrollReveal>
            <span className="text-accent text-xs md:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 block">
              Product Range
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-3 md:mb-4">
              Industrial Fasteners & Components
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl">
              Premium quality fasteners for every application. Browse our full range below.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12 lg:py-24 bg-background">
        <div className="container-wide">
          {/* Filters */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6 md:mb-10">
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="w-full sm:w-80">
                <label className="sr-only" htmlFor="product-search">
                  Search products
                </label>
                <input
                  id="product-search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products…"
                  className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>

              <div className="w-full sm:w-64">
                <label className="sr-only" htmlFor="category-filter">
                  Filter by category
                </label>
                <select
                  id="category-filter"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                >
                  <option value="All">All categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">{filteredProducts.length}</span>{" "}
              items
            </div>
          </div>

          {/* Category jump links */}
          {jumpCategories.length > 0 && (
            <div className="mb-8 md:mb-10">
              <div className="flex items-center justify-between gap-4 mb-3">
                <h2 className="text-sm font-semibold text-foreground">Jump to category</h2>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-sm text-accent hover:underline"
                >
                  Back to top
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {jumpCategories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => scrollToCategory(c)}
                    className="px-3 py-1.5 rounded-full border border-border bg-background text-sm text-foreground hover:bg-accent/10 transition-colors"
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Grouped Products */}
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">No products match your search.</p>
            </div>
          ) : (
            <div className="space-y-10 md:space-y-14">
              {visibleCategories.map((category) => {
                const categoryProducts = groupedProducts[category] ?? [];
                if (categoryProducts.length === 0) return null;

                return (
                  <div key={category} id={toAnchorId(category)} className="scroll-mt-28 md:scroll-mt-32">
                    {categoryFilter === "All" && (
                      <div className="flex items-end justify-between gap-4 mb-4 md:mb-6">
                        <div>
                          <h2 className="text-lg md:text-2xl font-bold text-foreground">
                            {category}
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            {categoryProducts.length} item{categoryProducts.length === 1 ? "" : "s"}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                      {categoryProducts.map((product, index) => (
                        <ScrollReveal key={product.id} delay={index * 0.02}>
                          <motion.div
                            whileHover={{ y: -4 }}
                            className="bg-card rounded-lg md:rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
                          >
                            <div className="aspect-square overflow-hidden bg-white">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain p-2"
                                loading="lazy"
                              />
                            </div>
                            <div className="p-3 md:p-4">
                              <h3 className="font-semibold text-foreground text-sm md:text-base line-clamp-2">
                                {product.name}
                              </h3>
                              <div className="flex items-center justify-end mt-2">
                                <button
                                  onClick={() => handleAddToCart(product)}
                                  className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 bg-accent text-white rounded-lg text-xs md:text-sm font-medium hover:bg-accent/90 transition-colors"
                                >
                                  <Plus className="w-3 h-3 md:w-4 md:h-4" />
                                  <span className="hidden sm:inline">Add</span>
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-accent text-white rounded-full shadow-elevated hover:shadow-dramatic transition-all"
      >
        <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
        <span className="font-semibold text-sm md:text-base">
          ({totalItems})
        </span>
        <span className="font-bold text-sm md:text-base">Quote</span>
      </button>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-background shadow-dramatic"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-bold text-foreground">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 bg-secondary rounded-lg">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded bg-background hover:bg-accent/10">
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded bg-background hover:bg-accent/10">
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-foreground">x{item.quantity}</p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-destructive mt-2"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="p-6 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-medium text-foreground">Items:</span>
                    <span className="text-2xl font-bold text-foreground">{totalItems}</span>
                  </div>
                  <button onClick={handleRequestQuote} className="btn-accent w-full mb-3">
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button onClick={clearCart} className="w-full text-sm text-muted-foreground hover:text-destructive">
                    Clear Cart
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </Layout>
  );
};

export default Products;
