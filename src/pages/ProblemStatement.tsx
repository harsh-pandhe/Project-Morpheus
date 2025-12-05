import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProblemStatement = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      {/* Matrix rain background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* Back button */}
        <Link 
          to="/"
          className="absolute -top-16 left-0 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Enhanced card container */}
        <div className="relative">
          {/* Glow effect background */}
          <div className="absolute inset-0 bg-primary/5 rounded-xl blur-2xl" />
          
          <div className="glass-card p-8 md:p-16 border-2 border-primary/50 relative bg-black/80 backdrop-blur-lg rounded-xl shadow-2xl shadow-primary/20">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] animate-shimmer opacity-10 rounded-xl" />
            
            {/* HUD corners with glow */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-primary shadow-[0_0_10px_rgba(0,255,0,0.5)]" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-primary shadow-[0_0_10px_rgba(0,255,0,0.5)]" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-primary shadow-[0_0_10px_rgba(0,255,0,0.5)]" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-primary shadow-[0_0_10px_rgba(0,255,0,0.5)]" />

            {/* Icon with enhanced animation */}
            <motion.div
              animate={{ 
                opacity: [1, 0.7, 1],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative z-10"
            >
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/30">
                <Clock className="text-primary w-12 h-12 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </motion.div>

            <div className="relative z-10 space-y-6">
              <h1 className="font-arcade text-3xl md:text-4xl text-primary mb-6 text-center">
                {'>'} PROBLEM STATEMENT
              </h1>
              
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-center space-y-4"
              >
                <div className="inline-block px-6 py-3 border-2 border-secondary/50 bg-secondary/10 rounded-lg">
                  <p className="font-arcade text-2xl text-secondary">
                    COMING SOON
                  </p>
                </div>
                <p className="font-mono text-muted-foreground text-lg max-w-md mx-auto">
                  The challenges are being prepared...
                  <span className="animate-blink text-primary">_</span>
                </p>
              </motion.div>

              {/* Progress bar */}
              <div className="mt-8">
                <div className="flex justify-between text-xs font-mono text-primary/60 mb-2">
                  <span>LOADING CHALLENGES</span>
                  <span>73%</span>
                </div>
                <div className="w-full bg-primary/10 rounded-full h-2 border border-primary/30">
                  <motion.div 
                    className="bg-primary h-full rounded-full"
                    animate={{ width: ['0%', '73%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">
                <div className="border border-primary/20 p-3 bg-black/40 rounded">
                  <p className="font-mono text-xs text-primary/60">STATUS</p>
                  <p className="font-arcade text-sm text-secondary">CLASSIFIED</p>
                </div>
                <div className="border border-primary/20 p-3 bg-black/40 rounded">
                  <p className="font-mono text-xs text-primary/60">ACCESS</p>
                  <p className="font-arcade text-sm text-secondary">RESTRICTED</p>
                </div>
                <div className="border border-primary/20 p-3 bg-black/40 rounded">
                  <p className="font-mono text-xs text-primary/60">ETA</p>
                  <p className="font-arcade text-sm text-primary">PENDING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProblemStatement;