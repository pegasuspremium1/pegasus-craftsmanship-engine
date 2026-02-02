import { Phone, Mail, MapPin } from "lucide-react";

export function TopBanner() {
  return (
    <div className="bg-primary md:bg-primary bg-gradient-to-r from-accent via-primary to-accent md:from-primary md:via-primary md:to-primary text-white md:text-white py-2 md:py-2.5">
      <div className="container-wide">
        {/* Mobile: Compact scrolling marquee style */}
        <div className="md:hidden overflow-hidden">
          <div className="flex items-center justify-center gap-4 text-[11px] animate-pulse">
            <a 
              href="tel:+27117941234" 
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+27 11 794 1234</span>
            </a>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3 h-3" />
              <span>Randburg, JHB</span>
            </span>
          </div>
        </div>
        
        {/* Desktop: Full layout */}
        <div className="hidden md:flex flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <a 
              href="tel:+27117941234" 
              className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+27 (0) 11 794 1234</span>
            </a>
            <a 
              href="mailto:info@pegasuspremium.co.za" 
              className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@pegasuspremium.co.za</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Randburg, Johannesburg, South Africa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
