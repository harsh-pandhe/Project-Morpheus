import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Star, Gift } from 'lucide-react';

const PrizeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prizes" className="relative py-4 xs:py-6 sm:py-8 md:py-12 lg:py-20 xl:py-32 px-1 xs:px-2 sm:px-3 md:px-4 lg:px-6 overflow-hidden bg-black/80 backdrop-blur-sm" ref={ref}>
      {/* Responsive background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5" />
        
        {/* Adaptive floating orbs */}
        <div className="absolute top-10 sm:top-20 left-1/4 w-24 h-24 sm:w-48 sm:h-48 lg:w-96 lg:h-96 bg-accent/10 sm:bg-accent/20 rounded-full blur-[40px] sm:blur-[60px] lg:blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-1/4 w-20 h-20 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-primary/10 sm:bg-primary/15 rounded-full blur-[30px] sm:blur-[50px] lg:blur-[100px] animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-40 sm:h-40 lg:w-80 lg:h-80 bg-secondary/5 sm:bg-secondary/10 rounded-full blur-[35px] sm:blur-[75px] lg:blur-[150px] animate-pulse" style={{animationDelay: '4s'}} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-3 xs:mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16"
        >
          <div className="inline-block p-1.5 xs:p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 border border-accent/30 bg-black/60 backdrop-blur-sm rounded-md sm:rounded-lg mb-2 xs:mb-3 sm:mb-4 md:mb-6 shadow-lg xs:shadow-xl shadow-accent/20 w-full max-w-[280px] xs:max-w-sm sm:max-w-md mx-auto">
            <motion.p 
              className="font-mono text-[8px] xs:text-[9px] sm:text-xs md:text-sm text-accent mb-1 xs:mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 tracking-wide xs:tracking-widest font-bold break-words"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {'>'} MATRIX_REWARDS.EXE
            </motion.p>
            <h2 className="font-arcade text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-accent text-glow mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 tracking-wide xs:tracking-wider sm:tracking-widest leading-tight break-words">
              PRIZE POOL
            </h2>
            <div className="flex justify-center items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4">
              <motion.div 
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                ⭐
              </motion.div>
              <div className="w-4 xs:w-6 sm:w-8 md:w-12 lg:w-16 xl:w-20 h-0.5 sm:h-1 bg-accent" />
              <motion.div 
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                ⭐
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Prize Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-3 xs:mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12"
        >
          <div className="relative">
            {/* Animated border glow */}
            <motion.div 
              className="absolute -inset-1 rounded-xl border-2 border-accent/30"
              animate={{ 
                boxShadow: [
                  '0 0 10px rgba(147, 51, 234, 0.2)',
                  '0 0 30px rgba(147, 51, 234, 0.5)',
                  '0 0 10px rgba(147, 51, 234, 0.2)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="glass-card border border-accent/40 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 text-center relative overflow-hidden bg-black/70 backdrop-blur-lg rounded-lg sm:rounded-xl">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent bg-[length:200%_100%] animate-shimmer" />
              
              {/* Prize amount with ultra-responsive text */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="relative"
              >
                <motion.div 
                  className="font-arcade text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl text-accent font-bold tracking-wide xs:tracking-wider sm:tracking-widest mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 leading-tight break-words"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(147, 51, 234, 0.5)',
                      '0 0 30px rgba(147, 51, 234, 0.8)',
                      '0 0 10px rgba(147, 51, 234, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ₹2,00,000*
                </motion.div>
                
                <motion.div 
                  className="font-mono text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-accent/80 tracking-wider xs:tracking-widest border border-accent/30 bg-accent/5 px-1.5 xs:px-2 sm:px-3 md:px-4 py-0.5 xs:py-1 sm:py-1.5 md:py-2 rounded text-center break-words inline-block"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(147, 51, 234, 0.6)' }}
                >
                  🏆 TOTAL PRIZE POOL 🏆
                </motion.div>
              </motion.div>

              {/* Corner brackets - responsive */}
              <div className="absolute top-0.5 xs:top-1 left-0.5 xs:left-1 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 border-l border-t xs:border-l-2 xs:border-t-2 border-accent opacity-60" />
              <div className="absolute top-0.5 xs:top-1 right-0.5 xs:right-1 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 border-r border-t xs:border-r-2 xs:border-t-2 border-accent opacity-60" />
              <div className="absolute bottom-0.5 xs:bottom-1 left-0.5 xs:left-1 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 border-l border-b xs:border-l-2 xs:border-b-2 border-accent opacity-60" />
              <div className="absolute bottom-0.5 xs:bottom-1 right-0.5 xs:right-1 w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 border-r border-b xs:border-r-2 xs:border-b-2 border-accent opacity-60" />
            </div>
          </div>
        </motion.div>

        {/* Prize Breakdown Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-3 xs:mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12"
        >
          {[
            { place: '1ST', amount: '₹70,000', color: 'text-yellow-400', bgColor: 'bg-yellow-400/10', borderColor: 'border-yellow-400/40', icon: Trophy, gradient: 'from-yellow-400/20 to-yellow-600/20' },
            { place: '2ND', amount: '₹35,000', color: 'text-gray-300', bgColor: 'bg-gray-300/10', borderColor: 'border-gray-300/40', icon: Trophy, gradient: 'from-gray-300/20 to-gray-500/20' },
            { place: '3RD', amount: '₹20,000', color: 'text-orange-400', bgColor: 'bg-orange-400/10', borderColor: 'border-orange-400/40', icon: Trophy, gradient: 'from-orange-400/20 to-orange-600/20' },
          ].map((prize, i) => {
            const IconComponent = prize.icon;
            return (
              <motion.div 
                key={i} 
                className={`border ${prize.borderColor} ${prize.bgColor} p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 backdrop-blur-sm relative overflow-hidden group hover:scale-105 transition-all duration-300 rounded-md sm:rounded-lg flex flex-col justify-center items-center text-center min-h-[100px] xs:min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px]`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + i * 0.1 }}
                whileHover={{ 
                  boxShadow: prize.place === '1ST' ? '0 0 20px rgba(251, 191, 36, 0.4)' : 
                             prize.place === '2ND' ? '0 0 20px rgba(209, 213, 219, 0.4)' :
                             '0 0 20px rgba(251, 146, 60, 0.4)'
                }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />
                
                <div className="relative z-10 space-y-1 xs:space-y-1.5 sm:space-y-2 md:space-y-3">
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <IconComponent className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 ${prize.color} mx-auto`} />
                  </motion.div>
                  
                  <div className={`font-arcade text-[10px] xs:text-xs sm:text-sm md:text-base ${prize.color} font-bold tracking-wide xs:tracking-wider break-words`}>
                    {prize.place} PLACE
                  </div>
                  
                  <div className={`font-arcade text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${prize.color} font-bold tracking-wide break-words`}>
                    {prize.amount}
                  </div>
                  
                  <motion.div 
                    className={`text-xs xs:text-sm sm:text-base ${prize.color}`}
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                  >
                    <Star className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mx-auto" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Prizes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <div className="inline-block border border-accent/40 bg-black/60 backdrop-blur-sm rounded-md sm:rounded-lg p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 hover:border-accent/60 transition-all duration-300 w-full max-w-[280px] xs:max-w-sm sm:max-w-md mx-auto">
            <motion.div
              className="flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 mb-1.5 xs:mb-2 sm:mb-3"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Gift className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent" />
              <p className="font-mono text-xs xs:text-sm sm:text-base md:text-lg text-accent font-bold tracking-wide xs:tracking-wider break-words">
                DOMAIN PRIZES
              </p>
              <Gift className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent" />
            </motion.div>
            
            <p className="font-mono text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed mb-2 xs:mb-3 sm:mb-4 break-words px-1">
              Special category rewards, exclusive swag & premium perks!
            </p>
            
            <div className="flex justify-center items-center gap-1 xs:gap-2">
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizeSection;
