import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronRight, Terminal, Zap, Code, Users, Backpack, CreditCard, FileCode } from 'lucide-react';

const faqs = [
  {
    question: 'What is Project Morpheus?',
    answer: 'Project Morpheus is a 24-hour hackathon that challenges participants to build innovative solutions across 5 domains: EdTech, Healthcare, Women Safety, Agritech, and Fintech. It\'s not just a coding competition—it\'s a journey to reshape reality.',
    icon: Code,
  },
  {
    question: 'Who can participate?',
    answer: 'Teams of 3-5 members can participate. All skill levels welcome—from first-time hackers to seasoned developers. What matters is your drive to create something meaningful.',
    icon: Users,
  },
  {
    question: 'What should I bring?',
    answer: 'Your laptop, chargers, and your red pill mentality. We provide food, drinks, WiFi, and the environment. You bring the innovation.',
    icon: Backpack,
  },
  {
    question: 'Is there a registration fee?',
    answer: 'Registration fee: ₹200/team.',
    icon: CreditCard,
  },
  {
    question: 'Can I work on a pre-existing project?',
    answer: 'No. All projects must be built from scratch during the hackathon. Pre-written code, templates, or previously developed solutions are not allowed. Start fresh, build real.',
    icon: FileCode,
  },
];

const TypewriterText = ({ text, isActive }: { text: string; isActive: boolean }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    if (isActive) {
      setDisplayText('');
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 20);
      return () => clearInterval(interval);
    } else {
      setDisplayText('');
    }
  }, [isActive, text]);

  return (
    <span>
      {displayText}
      {isActive && displayText.length < text.length && (
        <span className="animate-blink">▊</span>
      )}
    </span>
  );
};

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const Icon = faq.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-black/60 backdrop-blur-sm transition-all duration-300 group"
    >
      {/* Background glow on hover - PC only */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 pointer-events-none hidden lg:block"
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      
      {/* Left accent bar with enhanced glow */}
      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-1 lg:w-1.5 bg-primary/30"
        animate={{ 
          backgroundColor: isOpen ? 'rgba(0, 255, 65, 0.9)' : isHovered ? 'rgba(0, 255, 65, 0.6)' : 'rgba(0, 255, 65, 0.3)',
          boxShadow: isOpen ? '0 0 20px rgba(0, 255, 65, 0.6), 0 0 40px rgba(0, 255, 65, 0.3)' : isHovered ? '0 0 10px rgba(0, 255, 65, 0.4)' : 'none'
        }}
      />
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-5 md:p-6 lg:p-8 flex items-center gap-3 sm:gap-4 lg:gap-6 text-left relative z-10"
      >
        {/* Question number - PC only */}
        <div className="hidden lg:flex flex-shrink-0 w-8 items-center justify-center">
          <span className="font-mono text-xs text-primary/40 group-hover:text-primary/60 transition-colors">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        
        {/* Icon with enhanced hover */}
        <motion.div 
          className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg lg:rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
            isOpen 
              ? 'bg-primary/20 border-primary text-primary shadow-lg shadow-primary/30' 
              : 'bg-primary/5 border-primary/30 text-primary/60 group-hover:border-primary/50 group-hover:text-primary/80'
          }`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </motion.div>
        
        {/* Question text */}
        <div className="flex-1 min-w-0">
          <motion.div 
            className={`font-arcade text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-primary leading-tight sm:leading-normal transition-all duration-300 ${
              isOpen ? 'text-glow' : ''
            }`}
          >
            {faq.question}
          </motion.div>
          
          {/* Subtitle hint - PC only */}
          <motion.p 
            className="hidden lg:block font-mono text-xs text-primary/40 mt-1 group-hover:text-primary/60 transition-colors"
            animate={{ opacity: isOpen ? 0 : 1, height: isOpen ? 0 : 'auto' }}
          >
            Click to {isOpen ? 'collapse' : 'expand'}
          </motion.p>
        </div>

        {/* Chevron with enhanced animation */}
        <motion.div
          animate={{ 
            rotate: isOpen ? 90 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors"
        >
          <ChevronRight 
            className={`transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-primary/50 group-hover:text-primary/80'}`} 
            size={20}
          />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6 lg:px-8 lg:pb-8 pl-[calc(1rem+2.5rem+0.75rem)] sm:pl-[calc(1.25rem+3rem+1rem)] lg:pl-[calc(2rem+2rem+3.5rem+1.5rem)]">
              <motion.div 
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-lg lg:rounded-xl p-4 sm:p-5 lg:p-6"
              >
                {/* Decorative corner brackets - PC only */}
                <div className="hidden lg:block">
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/40" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/40" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/40" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/40" />
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/5 rounded-lg lg:rounded-xl blur-sm" />
                
                {/* Response header - PC only */}
                <div className="hidden lg:flex items-center gap-2 mb-3 relative">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-secondary">ORACLE_RESPONSE.EXE</span>
                </div>
                
                <p className="relative font-mono text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed lg:leading-loose">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="faq" className="relative py-16 sm:py-20 md:py-28 lg:py-36 xl:py-40 px-4 sm:px-6 lg:px-8 bg-black/60 backdrop-blur-sm overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      
      {/* Enhanced grid pattern - PC only */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none hidden lg:block">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 65, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating particles - more on PC */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i < 6 ? 'w-1 h-1 bg-primary/40' : 'hidden lg:block w-1.5 h-1.5 bg-primary/30'}`}
            style={{
              left: `${8 + i * 8}%`,
              top: `${15 + (i % 4) * 22}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </div>
      
      {/* Side decorations - PC only */}
      <div className="hidden lg:block absolute left-8 xl:left-16 top-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 border border-primary/30 rotate-45"
              animate={{ 
                borderColor: ['rgba(0, 255, 65, 0.3)', 'rgba(0, 255, 65, 0.6)', 'rgba(0, 255, 65, 0.3)']
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </motion.div>
      </div>
      
      <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 border border-primary/30 rotate-45"
              animate={{ 
                borderColor: ['rgba(0, 255, 65, 0.3)', 'rgba(0, 255, 65, 0.6)', 'rgba(0, 255, 65, 0.3)']
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 + 0.5 }}
            />
          ))}
        </motion.div>
      </div>
      
      <div className="container mx-auto max-w-4xl lg:max-w-5xl xl:max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-primary/10 border border-primary/30 rounded-full mb-6 lg:mb-8"
            whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 65, 0.5)', boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)' }}
          >
            <Zap size={14} className="text-primary lg:w-5 lg:h-5" />
            <span className="font-mono text-xs sm:text-sm lg:text-base text-primary">ACCESS THE ORACLE</span>
          </motion.div>
          
          <motion.h2 
            className="font-arcade text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary text-glow mb-4 lg:mb-6 whitespace-nowrap"
            whileHover={{ textShadow: '0 0 30px rgba(0, 255, 65, 0.8)' }}
          >
            FAQ.EXE
          </motion.h2>
          
          <p className="font-mono text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-md lg:max-w-xl mx-auto">
            Your questions decoded. The Matrix has answers.
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative rounded-xl lg:rounded-2xl overflow-hidden border border-primary/40 lg:border-2 shadow-2xl shadow-primary/10"
          whileHover={{ boxShadow: '0 0 60px rgba(0, 255, 65, 0.15)' }}
        >
          {/* Terminal glow */}
          <div className="absolute -inset-1 lg:-inset-2 bg-primary/10 blur-xl lg:blur-2xl opacity-50 pointer-events-none" />
          
          {/* Terminal header */}
          <div className="relative flex items-center gap-3 lg:gap-4 px-4 py-3 sm:px-5 sm:py-4 lg:px-8 lg:py-5 border-b border-primary/30 bg-black/90">
            <div className="flex gap-2 lg:gap-2.5">
              <motion.div 
                className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-red-500/70 cursor-pointer" 
                whileHover={{ scale: 1.2, backgroundColor: 'rgb(239, 68, 68)' }}
              />
              <motion.div 
                className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-yellow-500/70 cursor-pointer"
                whileHover={{ scale: 1.2, backgroundColor: 'rgb(234, 179, 8)' }}
              />
              <motion.div 
                className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-green-500/70 cursor-pointer"
                whileHover={{ scale: 1.2, backgroundColor: 'rgb(34, 197, 94)' }}
              />
            </div>
            <div className="flex-1 flex items-center gap-2 lg:gap-3 justify-center sm:justify-start">
              <Terminal size={14} className="text-primary/60 lg:w-5 lg:h-5" />
              <span className="font-mono text-xs sm:text-sm lg:text-base text-primary/60 hidden sm:inline">
                oracle@morpheus:~$ ./faq.exe
              </span>
              <span className="font-mono text-xs text-primary/60 sm:hidden">
                faq.exe
              </span>
              <motion.span 
                className="hidden lg:inline-block font-mono text-sm text-primary/40 ml-2"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ▊
              </motion.span>
            </div>
            
            {/* Extra terminal buttons - PC only */}
            <div className="hidden lg:flex items-center gap-4 text-primary/40">
              <span className="font-mono text-xs">v2.026</span>
              <div className="w-px h-4 bg-primary/20" />
              <span className="font-mono text-xs">SECURE</span>
            </div>
          </div>

          {/* FAQ items */}
          <div className="relative bg-black/80 divide-y divide-primary/10">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* Terminal footer */}
          <div className="relative px-4 py-3 sm:px-5 sm:py-4 lg:px-8 lg:py-5 border-t border-primary/30 bg-black/90">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 lg:gap-6">
              <p className="font-mono text-xs sm:text-sm lg:text-base text-primary/70 flex-1">
                <span className="text-secondary">{'>'}</span> More questions?{' '}
                <a 
                  href="mailto:support@projectmorpheus.in" 
                  className="text-secondary hover:text-secondary/80 underline underline-offset-2 transition-colors"
                >
                  Contact us
                </a>
                <span className="hidden lg:inline"> or call <a href="tel:+918308878586" className="text-secondary hover:text-secondary/80 underline underline-offset-2">+91 8308878586</a></span>
              </p>
              <div className="font-mono text-[10px] sm:text-xs lg:text-sm text-primary/40 flex items-center gap-2 lg:gap-3">
                <motion.span 
                  className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="hidden lg:inline">System Ready |</span> {faqs.length} queries loaded
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
