import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MessageCircle, ExternalLink, MapPin, Calendar, Cpu, ArrowUpRight, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/projectmorpheus2026', label: 'Instagram', color: 'hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-pink-400' },
    { icon: ExternalLink, href: 'https://iicsit.in/', label: 'IIC Website', color: 'hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400' },
    { icon: MessageCircle, href: 'https://wa.me/918308878586', label: 'WhatsApp', color: 'hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-400' },
    { icon: Mail, href: 'mailto:support@projectmorpheus.in', label: 'Email', color: 'hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400' },
  ];

  const quickLinks = [
    { text: 'Problem Statement', href: '/problem-statement' },
    { text: 'Guidelines', href: '/guidelines' },
    { text: 'Committees', href: '/committees' },
    { text: 'FAQs', href: '/faqs' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Animated top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary via-secondary to-primary opacity-50"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Main footer */}
      <div className="relative bg-black/95 backdrop-blur-xl py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 255, 65, 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Glow orbs */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Top section - Logo & CTA */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 mb-12 lg:mb-16 pb-12 lg:pb-16 border-b border-white/5">
            {/* Logo section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="inline-block">
                <h2 className="font-arcade text-2xl sm:text-3xl lg:text-4xl text-primary tracking-wider">
                  PROJECT
                </h2>
                <h2 className="font-arcade text-2xl sm:text-3xl lg:text-4xl text-primary tracking-wider">
                  MORPHEUS
                </h2>
                <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary mt-2 rounded-full" />
              </div>
              <p className="font-mono text-sm sm:text-base text-gray-400 mt-4 max-w-sm mx-auto lg:mx-0">
                Wake up. Build the future. <span className="text-primary">24-hour hackathon</span> experience.
              </p>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center lg:text-right"
            >
              <motion.a
                href="https://unstop.com/p/project-morpheus-2026-24-hour-hackathon-sinhgad-institute-of-technology-lonavala-1605670"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary/10 border-2 border-primary text-primary font-mono text-sm sm:text-base font-bold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 group"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 255, 65, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                REGISTER NOW
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
              <p className="font-mono text-xs text-gray-500 mt-3">
                Limited spots available
              </p>
            </motion.div>
          </div>
          
          {/* Middle section - Links grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-mono text-xs sm:text-sm text-primary font-bold tracking-widest mb-4 sm:mb-6">
                NAVIGATION
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <motion.a
                      href={link.href}
                      className="font-mono text-sm sm:text-base text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                      whileHover={{ x: 4 }}
                    >
                      <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                      {link.text}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-mono text-xs sm:text-sm text-primary font-bold tracking-widest mb-4 sm:mb-6">
                CONTACT
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+918308878586" className="font-mono text-sm sm:text-base text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2">
                    <Phone size={14} className="text-primary/60" />
                    +91 8308878586
                  </a>
                </li>
                <li>
                  <a href="mailto:support@projectmorpheus.in" className="font-mono text-sm sm:text-base text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 break-all">
                    <Mail size={14} className="text-primary/60 flex-shrink-0" />
                    <span className="truncate">support@projectmorpheus.in</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/918308878586" className="font-mono text-sm sm:text-base text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2">
                    <MessageCircle size={14} className="text-primary/60" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </motion.div>
            
            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-mono text-xs sm:text-sm text-primary font-bold tracking-widest mb-4 sm:mb-6">
                EVENT
              </h3>
              <ul className="space-y-3">
                <li className="font-mono text-sm sm:text-base text-gray-400 flex items-center gap-2">
                  <Calendar size={14} className="text-primary/60" />
                  Feb 26, 2026
                </li>
                <li className="font-mono text-sm sm:text-base text-gray-400 flex items-center gap-2">
                  <MapPin size={14} className="text-primary/60" />
                  SIT Lonavala
                </li>
                <li className="font-mono text-sm sm:text-base text-gray-400 flex items-center gap-2">
                  <Cpu size={14} className="text-primary/60" />
                  24 Hours
                </li>
              </ul>
            </motion.div>
            
            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-mono text-xs sm:text-sm text-primary font-bold tracking-widest mb-4 sm:mb-6">
                FOLLOW US
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 ${link.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <link.icon size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
              <p className="font-mono text-xs text-gray-500 mt-4">
                @projectmorpheus2026
              </p>
            </motion.div>
          </div>
          
          {/* Bottom section */}
          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-mono text-xs sm:text-sm text-gray-500 text-center sm:text-left order-2 sm:order-1"
              >
                © {currentYear} Project Morpheus. Powered by{' '}
                <a href="https://iicsit.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  IIC SIT
                </a>
              </motion.p>
              
              {/* Developer credit */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-mono text-xs sm:text-sm text-gray-500 flex items-center gap-2 order-1 sm:order-2"
              >
                Made with <Heart size={12} className="text-red-500 animate-pulse" /> by{' '}
                <span className="text-secondary font-semibold">Harsh Pandhe</span>
              </motion.p>
            </div>
            
            {/* Morpheus quote */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-mono text-[10px] sm:text-xs text-gray-600 text-center mt-6 italic"
            >
              "Free your mind" — Morpheus
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Terminal-style bottom bar */}
      <div className="bg-black py-3 px-4 border-t border-primary/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-4 sm:gap-8 font-mono text-[10px] sm:text-xs text-primary/40 overflow-x-auto">
            <span className="flex items-center gap-2 whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              SYSTEM ONLINE
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="whitespace-nowrap">v2.026</span>
            <span className="hidden sm:inline">|</span>
            <span className="whitespace-nowrap hidden sm:inline">MATRIX_OS</span>
            <span className="hidden lg:inline">|</span>
            <span className="whitespace-nowrap hidden lg:inline">STES CAMPUS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
