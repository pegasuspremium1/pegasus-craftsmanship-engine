import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function OrderCTA() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-wide text-center">
        <ScrollReveal>
          <h2 className="display-lg text-white mb-4">
            Ready to Place an Order?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Contact our team today for competitive pricing and expert advice on your fastener requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent">
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+27117941234" className="btn-outline-white">
              <Phone className="w-4 h-4" />
              <span>+27 (0) 11 794 1234</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
