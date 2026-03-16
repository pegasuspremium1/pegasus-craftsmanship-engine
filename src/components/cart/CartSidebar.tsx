import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, ArrowRight } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const navigate = useNavigate();
  const { items, removeItem, clearCart } = useCart();

  const handleRequestQuote = () => {
    if (items.length === 0) {
      toast.error("Your quote list is empty");
      return;
    }
    
    const cartMessage = items.map(item => 
      `- ${item.name} (${item.category})`
    ).join('\n');
    
    const fullMessage = `Quote Request:\n\n${cartMessage}\n\nPlease provide pricing and availability for these items.`;
    
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
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-bold text-foreground">Your Quote List</h2>
                <button onClick={onClose} className="p-2 text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Your quote list is empty</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 bg-secondary rounded-lg items-center">
                        <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground text-sm">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">{item.category}</p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-xs text-destructive hover:underline">
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="p-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    {items.length} item{items.length !== 1 ? "s" : ""} selected — tell us the quantities you need and we'll quote you.
                  </p>
                  <button onClick={handleRequestQuote} className="btn-accent w-full mb-3">
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button onClick={clearCart} className="w-full text-sm text-muted-foreground hover:text-destructive">
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
