import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
export function Hero() {
  return <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 grid-editorial opacity-30" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="container-wide relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
          }} className="flex items-center gap-4 mb-8">
              
              <div className="h-10 w-px bg-border" />
              <span className="label-sm">Premium Fasteners</span>
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
          }} className="display-xl text-foreground mb-6">
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
          }} className="body-lg mb-10 max-w-lg">
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
          }} className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-accent group">
                <span>View Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:+27117941234" className="btn-outline">
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
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
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
          }} className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 shadow-card border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Trusted Supplier</p>
                  <p className="text-sm text-muted-foreground">25+ Years Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
}