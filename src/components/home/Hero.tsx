import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
export function Hero() {
  return <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 grid-editorial opacity-30" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-48 md:w-72 h-48 md:h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="container-wide relative z-10 py-12 md:py-20 pt-20 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div>
            {/* Logo + Label */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
              
              <div className="h-8 md:h-10 w-px bg-border" />
              <span className="label-sm text-xs md:text-xs">Premium Fasteners</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-4 md:mb-6">
              Quality Fasteners
              <br />
              <span className="text-accent">Built to Last</span>
            </motion.h1>

            {/* Description */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6 md:mb-10 max-w-lg">
              Your trusted partner for industrial fasteners in South Africa. 
              Premium quality bolts, screws, nuts, and engineered components 
              for every application.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/products" className="btn-accent group text-sm md:text-base px-4 md:px-6 py-2.5 md:py-3">
                <span>View Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:+27117941234" className="btn-outline text-sm md:text-base px-4 md:px-6 py-2.5 md:py-3">
                <Phone className="w-4 h-4" />
                <span>Call Us Now</span>
              </a>
            </motion.div>
          </div>

          {/* Right column - Image */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-elevated">
              <img src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80" alt="Industrial fasteners" className="w-full aspect-[4/3] object-cover" />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }} className="absolute -bottom-4 md:-bottom-6 -left-2 md:-left-6 bg-card rounded-lg md:rounded-xl p-3 md:p-5 shadow-card border border-border">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-base md:text-lg">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">Trusted Supplier</p>
                  <p className="text-xs md:text-sm text-muted-foreground">We've got everything 
you need</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
}