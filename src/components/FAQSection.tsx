import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronRight, Terminal } from 'lucide-react';

const faqs = [
  {
    question: 'What is Project Morpheus?',
    answer: 'Project Morpheus is a 24-hour hackathon that challenges participants to build innovative solutions across 5 domains: EdTech, Healthcare, Women Safety, Agritech, and Fintech. It\'s not just a coding competition—it\'s a journey to reshape reality.',
  },
  {
    question: 'Who can participate?',
    answer: 'Teams of 2-4 members can participate. All skill levels welcome—from first-time hackers to seasoned developers. What matters is your drive to create something meaningful.',
  },
  {
    question: 'What should I bring?',
    answer: 'Your laptop, chargers, and your red pill mentality. We provide food, drinks, WiFi, and the environment. You bring the innovation.',
  },
  {
    question: 'Is there a registration fee?',
    answer: 'Registration fee: ₹200/team.',
  },
  {
    question: 'Can I work on a pre-existing project?',
    answer: 'No. All projects must be built from scratch during the hackathon. Pre-written code, templates, or previously developed solutions are not allowed. Start fresh, build real.',
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border border-primary/30 xs:border-2 bg-black/60 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group rounded-md sm:rounded-lg"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 xs:p-4 sm:p-6 md:p-8 flex items-start gap-3 xs:gap-4 sm:gap-6 text-left relative z-10"
      >
        <div className="flex items-center gap-2 xs:gap-3 flex-shrink-0">
          <ChevronRight 
            className={`text-primary transition-all duration-300 ${isOpen ? 'rotate-90 scale-110' : ''} group-hover:scale-110`} 
            size={16} 
            className="xs:w-5 xs:h-5 sm:w-6 sm:h-6"
          />
          <div className="bg-primary/20 border border-primary/40 rounded px-2 xs:px-3 py-1">
            <span className="font-mono text-[10px] xs:text-xs text-primary font-bold">
              Q{index + 1}
            </span>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="font-mono text-xs xs:text-sm sm:text-base text-secondary mb-2 xs:mb-3 tracking-wide xs:tracking-wider font-bold break-words">
            {'>'} QUERY_{String(index + 1).padStart(2, '0')}.EXE
          </div>
          <div className="font-mono text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-primary leading-relaxed font-bold tracking-wide break-words">
            {faq.question}
          </div>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 xs:px-4 xs:pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8 ml-8 xs:ml-10 sm:ml-14 relative z-10">
              <div className="bg-black/80 backdrop-blur-sm border border-primary/30 xs:border-2 rounded-md sm:rounded-lg p-3 xs:p-4 sm:p-6 shadow-lg shadow-primary/10">
                <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
                  <div className="w-2 h-2 xs:w-3 xs:h-3 bg-primary rounded-full animate-pulse" />
                  <div className="font-mono text-xs xs:text-sm sm:text-base text-secondary font-bold tracking-wide xs:tracking-wider break-words">
                    {'>'} ORACLE_RESPONSE.EXE
                  </div>
                </div>
                <div className="font-mono text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 border-l-2 xs:border-l-4 border-primary/40 pl-3 xs:pl-4 sm:pl-6 leading-relaxed xs:leading-loose font-medium break-words">
                  <TypewriterText text={faq.answer} isActive={isOpen} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-2 xs:px-3 sm:px-4 bg-black/60 backdrop-blur-sm" ref={ref}>
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-10 sm:mb-16 md:mb-20"
        >
          <div className="inline-block p-3 xs:p-4 sm:p-6 border border-primary/30 xs:border-2 bg-black/40 backdrop-blur-sm rounded-md sm:rounded-lg mb-4 xs:mb-6 w-full max-w-sm xs:max-w-md sm:max-w-lg mx-auto">
            <p className="font-mono text-[10px] xs:text-xs sm:text-sm text-muted-foreground mb-2 xs:mb-3 sm:mb-4 tracking-wider xs:tracking-widest break-words">
              {'>'} ACCESS THE ORACLE
            </p>
            <h2 className="font-arcade text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary text-glow mb-2 xs:mb-3 sm:mb-4 tracking-wide xs:tracking-wider break-words">
              FAQ.EXE
            </h2>
            <div className="w-12 xs:w-16 sm:w-20 h-0.5 xs:h-1 bg-primary mx-auto opacity-60" />
          </div>
          <p className="font-mono text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed break-words px-2">
            Your questions, decoded. The Matrix has answers.
          </p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card overflow-hidden border border-primary/50 xs:border-2 shadow-lg xs:shadow-2xl shadow-primary/20 bg-black/80 backdrop-blur-lg rounded-md sm:rounded-lg"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/5 rounded-lg pointer-events-none" />
          
          {/* Terminal header */}
          <div className="flex items-center gap-2 xs:gap-3 px-3 xs:px-4 sm:px-6 py-3 xs:py-4 border-b border-primary/30 xs:border-b-2 bg-primary/10 backdrop-blur-sm relative z-10">
            <Terminal size={16} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
            <span className="font-mono text-[10px] xs:text-xs sm:text-sm text-primary font-bold break-words flex-1 min-w-0">
              oracle@morpheus:~$ ./faq.exe
            </span>
            <div className="flex gap-1 xs:gap-2 flex-shrink-0">
              <div className="w-2 h-2 xs:w-3 xs:h-3 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 xs:w-3 xs:h-3 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 xs:w-3 xs:h-3 rounded-full bg-green-500/60" />
            </div>
          </div>

          {/* FAQ items */}
          <div className="divide-y divide-primary/20">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* Terminal footer */}
          <div className="px-3 xs:px-4 sm:px-6 py-3 xs:py-4 border-t border-primary/30 xs:border-t-2 bg-primary/10 backdrop-blur-sm relative z-10">
            <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4">
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[10px] xs:text-xs sm:text-sm text-primary font-bold break-words">
                  {'>'} More questions? Contact us at{' '}
                  <a href="mailto:support@projectmorpheus.in" className="text-secondary hover:text-secondary/80 underline break-all">
                    support@projectmorpheus.in
                  </a> or call{' '}
                  <a href="tel:+918308878586" className="text-secondary hover:text-secondary/80 underline">
                    +91 8308878586
                  </a>
                  <span className="animate-blink">_</span>
                </span>
              </div>
              <div className="font-mono text-[9px] xs:text-[10px] sm:text-xs text-muted-foreground flex-shrink-0">
                System Ready | {faqs.length} FAQ(s) Loaded
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
