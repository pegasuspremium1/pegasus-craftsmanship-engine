import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Plus, Minus, X, ArrowRight } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar() {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, clearCart, isOpen, setIsOpen } = useCart();

  const onClose = () => setIsOpen(false);

  const handleRequestQuote = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    
    // Total number of items
    const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
    
    // Build message with cart items (NO PRICE)
    const cartMessage = items.map(item => 
      `- ${item.name} (Quantity: ${item.quantity})`
    ).join('\n');
    
    const fullMessage = `Quote Request (Total Items: ${totalCount}):\n\n${cartMessage}\n\nPlease provide pricing and availability for these items.`;
    
    // Navigate to contact with cart data
    navigate('/contact', { 
      state: { 
        quoteMessage: fullMessage,
        cartItems: items,
      } 
    });
    
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-background shadow-dramatic"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-bold text-foreground">Your Order Request</h2>
                <button
                  onClick={onClose}
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
                    <p className="text-muted-foreground">Your request list is empty</p>
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
                    <span className="text-lg font-medium text-foreground">Total Items:</span>
                    <span className="text-2xl font-bold text-foreground">
                      {items.reduce((sum, i) => sum + i.quantity, 0)}
                    </span>
                  </div>
                  <button 
                    onClick={handleRequestQuote}
                    className="btn-accent w-full mb-3"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full text-sm text-muted-foreground hover:text-destructive"
                  >
                    Clear List
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
