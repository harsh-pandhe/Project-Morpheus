import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gem } from 'lucide-react';

const PrizeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prizes" className="relative py-32 px-4 overflow-hidden bg-black/80 backdrop-blur-sm" ref={ref}>
      {/* Enhanced background layers */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-primary/5" />
        
        {/* Multiple floating orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-primary/15 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '4s'}} />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-2 h-2 bg-accent rounded-full opacity-60"
            animate={{ y: [0, -100, 0], x: [0, 50, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-1 h-1 bg-primary rounded-full opacity-40"
            animate={{ y: [0, 80, 0], x: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-secondary rounded-full opacity-50"
            animate={{ y: [0, -60, 0], x: [0, 40, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
          />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block p-6 border-2 border-accent/30 bg-black/60 backdrop-blur-sm rounded-lg mb-6 shadow-2xl shadow-accent/20">
            <motion.p 
              className="font-mono text-sm text-accent mb-4 tracking-widest font-bold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {'>'} THE_REWARDS.EXE
            </motion.p>
            <h2 className="font-arcade text-5xl md:text-6xl lg:text-7xl text-accent text-glow mb-4 tracking-wider">
              PRIZE POOL
            </h2>
            <div className="flex justify-center items-center gap-4">
              <motion.div 
                className="text-4xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                ⭐
              </motion.div>
              <div className="w-20 h-1 bg-accent" />
              <motion.div 
                className="text-4xl"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                ⭐
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Enhanced treasure vault */}
          <div className="relative">
            {/* Outer glow ring */}
            <motion.div 
              className="absolute inset-0 rounded-lg border-4 border-accent/30"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(147, 51, 234, 0.3)',
                  '0 0 60px rgba(147, 51, 234, 0.6)',
                  '0 0 20px rgba(147, 51, 234, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="glass-card border-2 border-accent/50 p-16 md:p-20 text-center relative overflow-hidden bg-black/80 backdrop-blur-lg">
              {/* Enhanced shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent bg-[length:200%_100%] animate-shimmer" />
              
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 text-accent text-2xl animate-pulse">💎</div>
              <div className="absolute top-2 right-2 text-primary text-xl animate-pulse" style={{animationDelay: '1s'}}>💎</div>
              <div className="absolute bottom-2 left-2 text-secondary text-lg animate-pulse" style={{animationDelay: '2s'}}>💎</div>
              <div className="absolute bottom-2 right-2 text-accent text-2xl animate-pulse" style={{animationDelay: '0.5s'}}>💎</div>
              
              {/* Floating gems with enhanced animations */}
              <motion.div
                className="absolute top-6 left-12 text-accent"
                animate={{ 
                  y: [0, -15, 0], 
                  rotate: [0, 360, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Gem size={28} />
              </motion.div>
              <motion.div
                className="absolute top-12 right-16 text-primary"
                animate={{ 
                  y: [0, -20, 0], 
                  rotate: [0, -360, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                <Gem size={24} />
              </motion.div>
              <motion.div
                className="absolute bottom-12 left-20 text-secondary"
                animate={{ 
                  y: [0, -12, 0], 
                  rotate: [0, 180, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              >
                <Gem size={22} />
              </motion.div>
              <motion.div
                className="absolute bottom-6 right-8 text-accent"
                animate={{ 
                  y: [0, -18, 0], 
                  rotate: [0, 270, 0],
                  scale: [1, 1.4, 1]
                }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
              >
                <Gem size={26} />
              </motion.div>

              {/* Simple centered icon */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="mb-12 text-center"
              >
                <div className="text-6xl mb-4">💰</div>
              </motion.div>

              {/* Enhanced prize amount */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="relative mb-16 text-center"
              >
                <motion.div 
                  className="font-arcade text-4xl md:text-6xl lg:text-7xl text-accent font-bold tracking-wider mb-8"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(147, 51, 234, 0.5)',
                      '0 0 40px rgba(147, 51, 234, 0.8)',
                      '0 0 20px rgba(147, 51, 234, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ₹2,00,000*
                </motion.div>
                
                <motion.div 
                  className="font-mono text-lg md:text-xl text-accent/80 tracking-widest border-2 border-accent/30 bg-accent/10 px-8 py-4 rounded-lg inline-block"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(147, 51, 234, 0.6)' }}
                >
                  🏆 TOTAL LOOT 🏆
                </motion.div>
              </motion.div>

              {/* Enhanced prize breakdown */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto"
              >
                {[
                  { place: '1ST', amount: '₹70,000', color: 'text-yellow-400', bgColor: 'bg-yellow-400/10', borderColor: 'border-yellow-400/40', emoji: '🥇' },
                  { place: '2ND', amount: '₹35,000', color: 'text-gray-300', bgColor: 'bg-gray-300/10', borderColor: 'border-gray-300/40', emoji: '🥈' },
                  { place: '3RD', amount: '₹20,000', color: 'text-orange-400', bgColor: 'bg-orange-400/10', borderColor: 'border-orange-400/40', emoji: '🥉' },
                ].map((prize, i) => (
                  <motion.div 
                    key={i} 
                    className={`border-2 ${prize.borderColor} ${prize.bgColor} p-8 md:p-10 backdrop-blur-sm relative overflow-hidden group hover:scale-105 transition-all duration-300 min-h-[280px] flex flex-col justify-center`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    whileHover={{ 
                      boxShadow: prize.place === '1ST' ? '0 0 30px rgba(251, 191, 36, 0.4)' : 
                                 prize.place === '2ND' ? '0 0 30px rgba(209, 213, 219, 0.4)' :
                                 '0 0 30px rgba(251, 146, 60, 0.4)'
                    }}
                  >
                    {/* Background glow effect */}
                    <div className={`absolute inset-0 ${prize.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2">{prize.emoji}</div>
                        <div className={`font-arcade text-sm md:text-base ${prize.color} font-bold tracking-wider`}>
                          {prize.place} PLACE
                        </div>
                      </div>
                      
                      <div className={`font-arcade text-2xl md:text-3xl ${prize.color} text-center font-bold tracking-wide`}>
                        {prize.amount}
                      </div>
                      
                      <motion.div 
                        className={`mt-4 text-center text-xl ${prize.color}`}
                        animate={{ rotate: [0, 10, 0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                      >
                        ⭐
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced HUD corners */}
              <motion.div 
                className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-accent"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-accent"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-accent"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-accent"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="inline-block border-2 border-accent/40 bg-black/60 backdrop-blur-sm rounded-lg p-6 hover:border-accent/60 transition-all duration-300">
            <motion.p 
              className="font-mono text-lg md:text-xl text-accent font-bold mb-3 tracking-wider"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🎁 DOMAIN-WISE GIFTS 🎁
            </motion.p>
            <p className="font-mono text-base text-gray-400 leading-relaxed">
              Special category prizes, exclusive swag, and premium perks await!
            </p>
            <div className="flex justify-center items-center gap-2 mt-4">
              <motion.span 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.span>
              <span className="font-mono text-sm text-accent/80">More surprises loading...</span>
              <motion.span 
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizeSection;
