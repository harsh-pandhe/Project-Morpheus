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
    <footer className="relative py-16 px-4 border-t border-primary/20 bg-black/80 backdrop-blur-sm">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
      
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-4 gap-8 items-start">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="font-arcade text-sm text-primary text-glow">
              PROJECT
              <br />
              MORPHEUS
            </div>
            <p className="font-mono text-xs text-muted-foreground mt-2">
              © 2026 All Rights Reserved
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-arcade text-sm text-primary">CONTACT</h3>
            <div className="space-y-3">
              {contactLinks.map((contact, i) => (
                <motion.a
                  key={i}
                  href={contact.href}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 font-mono text-xs text-muted-foreground hover:text-primary transition-colors group"
                >
                  <contact.icon size={16} className="group-hover:text-secondary transition-colors" />
                  <span>{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-arcade text-sm text-primary">CONNECT</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* System info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-arcade text-sm text-primary">SYSTEM</h3>
            <div className="font-mono text-xs text-muted-foreground space-y-1">
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
          className="mt-12 pt-8 border-t border-primary/10 text-center"
        >
          <p className="font-mono text-xs text-muted-foreground mt-1">
            DEVELOPED BY: <span className="text-secondary">HARSH PANDHE</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground/60 mt-2">
            "Free your mind" — Morpheus
          </p>
        </motion.div>

        {/* ASCII art decoration */}
        <div className="mt-8 text-center font-mono text-xs text-primary/20 hidden md:block">
          <pre className="inline-block text-left">
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
