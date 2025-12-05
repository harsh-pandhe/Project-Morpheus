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
      className="border-2 border-primary/30 bg-black/60 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 md:p-8 flex items-start gap-6 text-left relative z-10"
      >
        <div className="flex items-center gap-3">
          <ChevronRight 
            className={`text-primary transition-all duration-300 ${isOpen ? 'rotate-90 scale-110' : ''} group-hover:scale-110`} 
            size={20} 
          />
          <div className="bg-primary/20 border border-primary/40 rounded px-3 py-1">
            <span className="font-mono text-xs text-primary font-bold">
              Q{index + 1}
            </span>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="font-mono text-base text-secondary mb-3 tracking-wider font-bold">
            {'>'} QUERY_{String(index + 1).padStart(2, '0')}.EXE
          </div>
          <div className="font-mono text-xl md:text-2xl text-primary leading-relaxed font-bold tracking-wide">
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
            <div className="px-6 pb-6 md:px-8 md:pb-8 ml-14 relative z-10">
              <div className="bg-black/80 backdrop-blur-sm border-2 border-primary/30 rounded-lg p-6 shadow-lg shadow-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <div className="font-mono text-base text-secondary font-bold tracking-wider">
                    {'>'} ORACLE_RESPONSE.EXE
                  </div>
                </div>
                <div className="font-mono text-lg md:text-xl text-gray-300 border-l-4 border-primary/40 pl-6 leading-loose font-medium">
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
    <section id="faq" className="relative py-32 px-4 bg-black/60 backdrop-blur-sm" ref={ref}>
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block p-6 border-2 border-primary/30 bg-black/40 backdrop-blur-sm rounded-lg mb-6">
            <p className="font-mono text-sm text-muted-foreground mb-4 tracking-widest">
              {'>'} ACCESS THE ORACLE
            </p>
            <h2 className="font-arcade text-5xl md:text-6xl lg:text-7xl text-primary text-glow mb-4 tracking-wider">
              FAQ.EXE
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto opacity-60" />
          </div>
          <p className="font-mono text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Your questions, decoded. The Matrix has answers.
          </p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/20 bg-black/80 backdrop-blur-lg"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/5 rounded-lg pointer-events-none" />
          
          {/* Terminal header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b-2 border-primary/30 bg-primary/10 backdrop-blur-sm relative z-10">
            <Terminal size={20} className="text-primary animate-pulse" />
            <span className="font-mono text-sm text-primary font-bold">
              oracle@morpheus:~$ ./faq.exe
            </span>
            <div className="ml-auto flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
          </div>

          {/* FAQ items */}
          <div className="divide-y divide-primary/20">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* Terminal footer */}
          <div className="px-6 py-4 border-t-2 border-primary/30 bg-primary/10 backdrop-blur-sm relative z-10">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <span className="font-mono text-sm text-primary font-bold">
                  {'>'} More questions? Contact us at 
                  <a href="mailto:support@projectmorpheus.in" className="text-secondary hover:text-secondary/80 underline">
                    support@projectmorpheus.in
                  </a> or call 
                  <a href="tel:+918308878586" className="text-secondary hover:text-secondary/80 underline ml-2">
                    +91 8308878586
                  </a>
                  <span className="animate-blink">_</span>
                </span>
              </div>
              <div className="font-mono text-xs text-muted-foreground">
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
