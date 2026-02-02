import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Plus, Minus, X, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

const products = [
  { id: "1", name: "Hex Bolts M8x50", price: 45.00, image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&q=80", category: "Bolts" },
  { id: "2", name: "Stainless Steel Nuts M10", price: 32.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", category: "Nuts" },
  { id: "3", name: "Flat Washers 12mm", price: 18.50, image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=400&q=80", category: "Washers" },
  { id: "4", name: "Self-Tapping Screws 4x25", price: 28.00, image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=400&q=80", category: "Screws" },
  { id: "5", name: "Anchor Bolts M12x100", price: 85.00, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80", category: "Anchors" },
  { id: "6", name: "Socket Cap Screws M6x30", price: 52.00, image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&q=80", category: "Screws" },
  { id: "7", name: "Spring Washers M8", price: 22.00, image: "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=400&q=80", category: "Washers" },
  { id: "8", name: "Hex Nuts M12", price: 38.00, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", category: "Nuts" },
  { id: "9", name: "Carriage Bolts M10x80", price: 65.00, image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&q=80", category: "Bolts" },
  { id: "10", name: "Pop Rivets 4.8mm", price: 42.00, image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80", category: "Rivets" },
  { id: "11", name: "Threaded Rod M16x1000", price: 125.00, image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&q=80", category: "Rods" },
  { id: "12", name: "Combination Wrench Set", price: 285.00, image: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=400&q=80", category: "Tools" },
];

const Products = () => {
  const { items, addItem, removeItem, updateQuantity, total, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

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
      {/* Hero Section - Readable */}
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
              Premium quality fasteners for every application. All prices shown in South African Rand (ZAR).
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12 lg:py-24 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.02}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-lg md:rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <span className="text-[10px] md:text-xs text-accent font-medium uppercase tracking-wide">
                      {product.category}
                    </span>
                    <h3 className="font-semibold text-foreground mt-0.5 md:mt-1 mb-2 text-sm md:text-base line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-base md:text-lg font-bold text-foreground">
                        R{product.price.toFixed(2)}
                      </span>
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
      </section>

      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-accent text-white rounded-full shadow-elevated hover:shadow-dramatic transition-all"
      >
        <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
        <span className="font-semibold text-sm md:text-base">
          ({items.reduce((sum, i) => sum + i.quantity, 0)})
        </span>
        <span className="font-bold text-sm md:text-base">R{total.toFixed(2)}</span>
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
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-bold text-foreground">Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items */}
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
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">R{item.price.toFixed(2)}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded bg-background hover:bg-accent/10"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded bg-background hover:bg-accent/10"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-foreground">
                            R{(item.price * item.quantity).toFixed(2)}
                          </p>
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

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-medium text-foreground">Total:</span>
                    <span className="text-2xl font-bold text-foreground">R{total.toFixed(2)}</span>
                  </div>
                  <button className="btn-accent w-full mb-3">
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full text-sm text-muted-foreground hover:text-destructive"
                  >
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
