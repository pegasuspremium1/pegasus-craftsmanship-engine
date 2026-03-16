import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Plus, Check, Search } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { categories, type ProductCategory } from "@/data/products";

const Products = () => {
  const { items, addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const isInCart = (id: string) => items.some((i) => i.id === id);

  const handleAddToCart = (product: { id: string; name: string; category: string; image: string }) => {
    if (isInCart(product.id)) {
      toast.info(`${product.name} is already in your quote list`);
      return;
    }
    addItem(product);
    toast.success(`${product.name} added to quote list`);
  };

  const filteredCategories = categories
    .filter((cat) => !selectedCategory || cat.name === selectedCategory)
    .map((cat) => ({
      ...cat,
      products: cat.products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.products.length > 0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-12 md:pb-16 lg:pb-20 hero-gradient">
        <div className="container-wide">
          <ScrollReveal>
            <span className="text-accent text-xs md:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 block">
              Product Range
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-3 md:mb-4">
              Industrial Fasteners & Components
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl">
              Browse our full range below. Select the products you need and request a quote — tell us the quantities and we'll get back to you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-6 bg-card border-b border-border sticky top-0 z-30">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>
            {/* Category filter */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  !selectedCategory
                    ? "bg-accent text-white"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === cat.name
                      ? "bg-accent text-white"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container-wide space-y-12 md:space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.name}>
              {/* Category Header */}
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">
                      {category.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {category.products.length} products
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Product Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                {category.products.map((product, index) => {
                  const inCart = isInCart(product.id);
                  return (
                    <ScrollReveal key={product.id} delay={index * 0.015}>
                      <motion.div
                        whileHover={{ y: -3 }}
                        className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
                      >
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="font-medium text-foreground text-xs md:text-sm leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">
                            {product.name}
                          </h3>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className={`w-full flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                              inCart
                                ? "bg-accent/10 text-accent"
                                : "bg-accent text-white hover:bg-accent/90"
                            }`}
                          >
                            {inCart ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Added</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" />
                                <span>Add to Quote</span>
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Cart Button */}
      {items.length > 0 && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <button
            onClick={() => {
              const event = new CustomEvent("open-cart");
              window.dispatchEvent(event);
            }}
            className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-accent text-white rounded-full shadow-elevated hover:shadow-dramatic transition-all"
          >
            <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-semibold text-sm md:text-base">
              {items.length} item{items.length !== 1 ? "s" : ""}
            </span>
            <span className="font-bold text-sm md:text-base">Get Quote</span>
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Products;
