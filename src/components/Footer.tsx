import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone, MessageCircle, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/projectmorpheus2026', label: 'Instagram' },
    { icon: ExternalLink, href: 'https://iicsit.in/', label: 'IIC Website' },
    { icon: MessageCircle, href: 'https://wa.me/918308878586', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:support@projectmorpheus.in', label: 'Email' },
  ];

  const contactLinks = [
    { icon: Phone, href: 'tel:+918308878586', label: 'Call us', text: '+91 8308878586' },
    { icon: Mail, href: 'mailto:support@projectmorpheus.in', label: 'Email us', text: 'support@projectmorpheus.in' },
    { icon: MessageCircle, href: 'https://wa.me/918308878586', label: 'WhatsApp', text: 'WhatsApp Chat' },
    { icon: ExternalLink, href: 'https://unstop.com/p/project-morpheus-2026-24-hour-hackathon-sinhgad-institute-of-technology-lonavala-1605670', label: 'Register on Unstop', text: 'Register on Unstop' },
  ];

  return (
    <footer className="relative py-8 xs:py-10 sm:py-12 md:py-16 px-2 xs:px-3 sm:px-4 border-t border-primary/20 bg-black/80 backdrop-blur-sm">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
      
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 xs:gap-8 items-start">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center xs:text-left"
          >
            <div className="font-arcade text-sm xs:text-base sm:text-lg md:text-xl text-primary text-glow break-words">
              PROJECT
              <br />
              MORPHEUS
            </div>
            <p className="font-mono text-xs xs:text-sm text-muted-foreground mt-2">
              © 2026 All Rights Reserved
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 xs:space-y-4 text-center xs:text-left"
          >
            <h3 className="font-arcade text-sm xs:text-base text-primary">CONTACT</h3>
            <div className="space-y-2 xs:space-y-3">
              {contactLinks.map((contact, i) => (
                <motion.a
                  key={i}
                  href={contact.href}
                  whileHover={{ x: 3 }}
                  className="flex items-center justify-center xs:justify-start gap-2 xs:gap-3 font-mono text-[10px] xs:text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors group break-words"
                >
                  <contact.icon size={14} className="xs:w-4 xs:h-4 group-hover:text-secondary transition-colors flex-shrink-0" />
                  <span className="truncate">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 xs:space-y-4 text-center xs:text-left"
          >
            <h3 className="font-arcade text-sm xs:text-base text-primary">CONNECT</h3>
            <div className="flex justify-center xs:justify-start gap-3 xs:gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary transition-colors rounded-sm"
                  aria-label={link.label}
                >
                  <link.icon size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* System info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-3 xs:space-y-4 text-center xs:text-left xs:col-span-2 md:col-span-1"
          >
            <h3 className="font-arcade text-sm xs:text-base text-primary">SYSTEM</h3>
            <div className="font-mono text-[10px] xs:text-xs sm:text-sm text-muted-foreground space-y-1 break-words">
              <p>{'>'} STES Campus</p>
              <p>{'>'} IIC - Institution Innovation Council</p>
              <p>{'>'} Feb 26, 2026</p>
              <p className="text-primary">{'>'} System v2.026</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 xs:mt-10 sm:mt-12 pt-6 xs:pt-8 border-t border-primary/10 text-center"
        >
          <p className="font-mono text-[10px] xs:text-xs sm:text-sm text-muted-foreground mt-1 break-words">
            DEVELOPED BY: <span className="text-secondary">HARSH PANDHE</span>
          </p>
          <p className="font-mono text-[9px] xs:text-[10px] sm:text-xs text-muted-foreground/60 mt-2 break-words">
            "Free your mind" — Morpheus
          </p>
        </motion.div>

        {/* ASCII art decoration */}
        <div className="mt-6 xs:mt-8 text-center font-mono text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-primary/20 hidden sm:block">
          <pre className="inline-block text-left overflow-x-auto max-w-full">
{`
    ╔═══════════════════════════════════════╗
    ║  THERE IS NO SPOON                    ║
    ║  [■■■■■■■■■■■■■■■■■■■] 100% LOADED    ║
    ╚═══════════════════════════════════════╝
`}
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
