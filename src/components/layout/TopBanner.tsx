import { Phone, Mail, MapPin } from "lucide-react";

export function TopBanner() {
  return (
    <div className="bg-primary text-white py-2.5 text-sm">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a 
              href="tel:+27117941234" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+27 (0) 11 794 1234</span>
            </a>
            <a 
              href="mailto:info@pegasuspremium.co.za" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@pegasuspremium.co.za</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Randburg, Johannesburg, South Africa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
