import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disc3, Menu, X } from 'lucide-react';
import GLBLoader from './GLBLoader';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/8bit/navigation-menu";

const HeroSection = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setTilt({ x: -y, y: x });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Enhanced dark blur background with gradient edges */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-0 pointer-events-none" />
      
      {/* Radial glow center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0 pointer-events-none" />
      
      {/* Top Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 py-4">
        <div className="w-full flex justify-between items-center px-4 md:justify-center">
          {/* Logo/Brand - Mobile */}
          <div className="md:hidden">
            <span className="font-arcade text-primary text-lg"> PROJECT MORPHEUS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="text-sm hover:underline">Home</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/problem-statement" className="text-sm hover:underline">Problem Statement</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/guidelines" className="text-sm hover:underline">Guidelines</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/committees" className="text-sm hover:underline">Committees</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="/faqs" className="text-sm hover:underline">FAQs</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="https://unstop.com/p/project-morpheus-2026-24-hour-hackathon-sinhgad-institute-of-technology-lonavala-1605670" target="_blank" className="text-sm hover:underline bg-secondary/20 px-3 py-1 rounded border border-secondary/50 hover:bg-secondary/30 transition-colors">Register Now</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-primary hover:text-primary/80 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-primary/20"
            >
              <div className="px-4 py-6 space-y-4">
                <motion.a
                  href="/"
                  className="block font-mono text-sm text-muted-foreground hover:text-primary transition-colors py-2 border-b border-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  {'>'} Home
                </motion.a>
                
                <motion.a
                  href="/problem-statement"
                  className="block font-mono text-sm text-muted-foreground hover:text-primary transition-colors py-2 border-b border-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  {'>'} Problem Statement
                </motion.a>
                
                <motion.a
                  href="/guidelines"
                  className="block font-mono text-sm text-muted-foreground hover:text-primary transition-colors py-2 border-b border-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  {'>'} Guidelines
                </motion.a>
                
                <motion.a
                  href="/committees"
                  className="block font-mono text-sm text-muted-foreground hover:text-primary transition-colors py-2 border-b border-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  {'>'} Committees
                </motion.a>
                
                <motion.a
                  href="/faqs"
                  className="block font-mono text-sm text-muted-foreground hover:text-primary transition-colors py-2 border-b border-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  {'>'} FAQs
                </motion.a>
                
                <motion.a
                  href="https://unstop.com/p/project-morpheus-2026-24-hour-hackathon-sinhgad-institute-of-technology-lonavala-1605670"
                  target="_blank"
                  className="block font-mono text-sm text-secondary hover:text-secondary/80 transition-colors py-3 px-4 mt-4 bg-secondary/10 border border-secondary/30 rounded text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  ▶ REGISTER NOW
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-primary text-sm tracking-[0.3em] uppercase"
            >
              {'>'} System Initializing...
            </motion.p>
            
            <h1 className="font-arcade text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary text-3d-large leading-tight">
              PROJECT
              <br />
              MORPHEUS
            </h1>
            
            <p className="font-mono text-muted-foreground text-lg max-w-md">
              WAKE UP. BUILD THE FUTURE.
              <span className="text-primary animate-blink">_</span>
            </p>
          </div>



          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="https://unstop.com/p/project-morpheus-2026-24-hour-hackathon-sinhgad-institute-of-technology-lonavala-1605670"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 65, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="arcade-btn px-8 py-4 text-primary-foreground font-arcade text-sm font-bold shadow-lg hover:shadow-primary/50 transition-all duration-300 inline-block"
            >
              ▶ REGISTER NOW
            </motion.a>
            <motion.a
              href="https://wa.me/918308878586"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 64, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-secondary px-8 py-4 text-secondary font-arcade text-sm font-bold hover:bg-secondary/10 transition-all duration-300 inline-block"
            >
              CONTACT US
            </motion.a>
          </div>
        </motion.div>

          {/* Right Content - Holographic Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="perspective-1000 flex justify-center"
          >
            <div
              className="preserve-3d relative w-full max-w-md aspect-[3/4] cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 glass-card rounded-lg overflow-hidden border-2 border-primary/60 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300">
                {/* Holographic shimmer */}
                <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] animate-shimmer opacity-30" />
                
                {/* Scan line */}
                <div className="scan-line" />
                
                {/* HUD Elements */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="font-mono text-xs text-primary/60">
                    <p>ID: MRP-2026</p>
                    <p>CLASS: OPERATOR</p>
                  </div>
                  <Disc3 className="text-primary animate-spin" style={{ animationDuration: '3s' }} />
                </div>

                {/* Center Content - GLB 3D Model */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* 3D Model Container */}
                    <div className="absolute inset-8 z-10">
                      <GLBLoader modelPath="/models/matrix_-_sentinel_-_tentacles_-_robot__eo_total.glb" />
                    </div>
                    
                    {/* Status overlay */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20">
                      <div className="font-arcade text-xs text-primary/60 text-center">
                        [SENTINEL]
                        <br />
                        <span className="text-secondary text-glow">ACTIVE</span>
                      </div>
                    </div>
                    
                    {/* Red scan beam */}
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-secondary via-secondary/50 to-transparent z-30"
                      animate={{ 
                        scaleY: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Data particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-0.5 h-0.5 bg-primary/60 rounded-full"
                        style={{
                          left: `${25 + i * 8}%`,
                          top: `${20 + (i % 4) * 20}%`,
                        }}
                        animate={{ 
                          y: [-15, 15, -15],
                          opacity: [0.3, 1, 0.3],
                          scale: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 3 + i * 0.2, 
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-mono text-xs text-primary/60 space-y-1">
                    <div className="flex justify-between">
                      <span>STATUS:</span>
                      <span className="text-primary flicker">ACTIVE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>LOCATION:</span>
                      <span>SIT LONAVALA</span>
                    </div>
                    <div className="flex justify-between">
                      <span>DATE:</span>
                      <span>FEB 26, 2026</span>
                    </div>
                  </div>
                </div>

                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-primary" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-primary" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-primary" />
              </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
