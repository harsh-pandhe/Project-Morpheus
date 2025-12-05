import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Circle, CheckCircle2, AlertCircle, Zap } from 'lucide-react';

const timelineEvents = [
  {
    date: 'DEC 5',
    year: '2025',
    title: 'Registration Opens',
    description: 'The portal opens. Teams can begin registration.',
    status: 'active',
    icon: CheckCircle2,
    color: 'text-primary',
    lineColor: 'bg-primary',
  },
  {
    date: 'JAN 28',
    year: '2026',
    title: 'Registration Closes',
    description: 'Final deadline. No extensions. Choose wisely.',
    status: 'upcoming',
    icon: AlertCircle,
    color: 'text-secondary',
    lineColor: 'bg-secondary',
  },
  {
    date: 'FEB W1',
    year: '2026',
    title: 'Round Two Begins',
    description: 'Google Meet encounters. Pitch to the Council.',
    status: 'upcoming',
    icon: Circle,
    color: 'text-muted-foreground',
    lineColor: 'bg-muted-foreground/30',
  },
  {
    date: 'FEB 26',
    year: '2026',
    title: 'The Construct Awaits',
    description: '24 hours at SIT Lonavala. Build. Code. Deploy.',
    status: 'flashing',
    icon: Zap,
    color: 'text-primary',
    lineColor: 'bg-primary',
  },
];

const TimelineNode = ({ event, index, isLast }: { 
  event: typeof timelineEvents[0]; 
  index: number;
  isLast: boolean;
}) => {
  const Icon = event.icon;
  const isFlashing = event.status === 'flashing';

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative flex gap-8 md:gap-12"
    >
      {/* Line and node */}
      <div className="flex flex-col items-center shrink-0">
        <motion.div
          className={`
            relative z-10 w-16 h-16 rounded-full border-3 
            flex items-center justify-center cursor-pointer mb-0
            ${event.color} border-current
            ${isFlashing ? 'node-pulse' : ''}
            ${event.status === 'active' ? 'bg-primary/30 shadow-lg shadow-primary/50' : 'bg-black/60 backdrop-blur-sm'}
            hover:shadow-2xl transition-all duration-300
          `}
          whileHover={{ 
            scale: 1.2,
            rotate: 360,
            boxShadow: event.status === 'active' ? '0 0 30px rgba(0, 255, 65, 0.6)' : '0 0 20px rgba(255, 255, 255, 0.3)'
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon size={24} />
          
          {/* Ripple effect */}
          {event.status === 'active' && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/50"
              animate={{ 
                scale: [1, 1.5, 2],
                opacity: [0.8, 0.3, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          )}
        </motion.div>
        
        {/* Enhanced connecting line */}
        {!isLast && (
          <div className={`relative w-1 h-full ${event.lineColor} rounded-full`} style={{ minHeight: '120px' }}>
            {/* Animated pulse on line */}
            {event.status === 'active' && (
              <>
                <motion.div
                  className="absolute inset-0 w-full h-6 bg-primary rounded-full blur-sm"
                  animate={{ y: [0, '100%', 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 w-full h-3 bg-primary/80 rounded-full"
                  animate={{ y: [0, '100%', 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />
              </>
            )}
            
            {/* Flowing particles for upcoming events */}
            {event.status === 'upcoming' && (
              <motion.div
                className="absolute inset-0 w-full h-2 bg-muted-foreground/50 rounded-full"
                animate={{ y: [0, '100%', 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <motion.div 
        className={`group flex-1 min-w-0 ${!isLast ? 'pb-8' : 'pb-0'}`}
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-8 md:p-10 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 min-w-full">
          <div className="flex items-baseline gap-6 mb-6">
            <motion.span 
              className={`font-arcade text-3xl md:text-4xl lg:text-5xl ${event.color} font-bold`}
              whileHover={{ scale: 1.1 }}
            >
              {event.date}
            </motion.span>
            <span className="font-mono text-base text-muted-foreground bg-muted-foreground/10 px-3 py-2 rounded">
              {event.year}
            </span>
          </div>
          
          <motion.h3 
            className={`font-arcade text-2xl md:text-3xl lg:text-4xl ${event.color} mb-6 font-bold tracking-wide`}
            whileHover={{ x: 5 }}
          >
            {event.title}
          </motion.h3>
          
          <p className="font-mono text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed mb-6">
            {event.description}
          </p>

          {event.status === 'active' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 inline-block"
              whileHover={{ scale: 1.1 }}
            >
              <motion.span 
                className="font-mono text-base md:text-lg text-primary border-2 border-primary bg-primary/20 px-6 py-3 rounded font-bold shadow-lg shadow-primary/30"
                animate={{ 
                  boxShadow: [
                    "0 0 10px rgba(0, 255, 65, 0.5)",
                    "0 0 20px rgba(0, 255, 65, 0.8)",
                    "0 0 10px rgba(0, 255, 65, 0.5)"
                  ]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🟢 LIVE NOW
              </motion.span>
            </motion.div>
          )}

          {event.status === 'critical' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 inline-block"
              whileHover={{ scale: 1.1 }}
            >
              <motion.span 
                className="font-mono text-base md:text-lg text-secondary border-2 border-secondary bg-secondary/20 px-6 py-3 rounded font-bold shadow-lg shadow-secondary/30"
                animate={{ 
                  opacity: [1, 0.5, 1],
                  boxShadow: [
                    "0 0 10px rgba(255, 0, 64, 0.5)",
                    "0 0 25px rgba(255, 0, 64, 0.9)",
                    "0 0 10px rgba(255, 0, 64, 0.5)"
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ⚠️ CRITICAL
              </motion.span>
            </motion.div>
          )}

          {event.status === 'upcoming' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 inline-block"
              whileHover={{ scale: 1.1 }}
            >
              <span className="font-mono text-base md:text-lg text-muted-foreground border border-muted-foreground/50 bg-muted-foreground/10 px-6 py-3 rounded">
                📅 UPCOMING
              </span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="relative py-32 px-4 bg-black/70 backdrop-blur-sm" ref={ref}>
      {/* Multiple background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/5 pointer-events-none" />
      
      {/* Enhanced circuit board pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 50h40M60 50h40M50 0v40M50 60v40" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            <circle cx="50" cy="50" r="4" fill="currentColor" className="text-primary animate-pulse"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
      
      {/* Moving data streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-10 top-20 w-1 h-32 bg-gradient-to-b from-transparent via-primary to-transparent opacity-30"
          animate={{ y: [0, 400, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute right-20 top-40 w-1 h-24 bg-gradient-to-b from-transparent via-secondary to-transparent opacity-30"
          animate={{ y: [0, 500, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.div
          className="absolute left-1/3 top-0 w-1 h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-20"
          animate={{ y: [0, 600, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 4 }}
        />
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-secondary/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative z-10"
        >
          <div className="inline-block p-8 border-2 border-primary/30 bg-black/60 backdrop-blur-sm rounded-lg mb-6 shadow-2xl shadow-primary/20">
            <motion.p 
              className="font-mono text-sm text-secondary mb-4 tracking-widest font-bold"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {'>'} MISSION_TIMELINE.EXE
            </motion.p>
            <h2 className="font-arcade text-4xl md:text-5xl lg:text-6xl text-primary text-glow mb-4 tracking-wider">
              THE PATH
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto opacity-60" />
            <motion.div 
              className="mt-4 text-lg text-gray-400 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Follow the white rabbit through time
            </motion.div>
          </div>
        </motion.div>

        <div className="ml-4 md:ml-8 space-y-0">
          {timelineEvents.map((event, index) => (
            <TimelineNode 
              key={index} 
              event={event} 
              index={index}
              isLast={index === timelineEvents.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
