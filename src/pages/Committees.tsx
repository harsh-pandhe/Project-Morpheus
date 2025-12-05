import { motion } from 'framer-motion';
import { ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Committees = () => {
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
          <div className="absolute inset-0 bg-purple-500/5 rounded-xl blur-2xl" />
          
          <div className="glass-card p-8 md:p-16 border-2 border-purple-400/50 relative bg-black/80 backdrop-blur-lg rounded-xl shadow-2xl shadow-purple-400/20">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl" />
            
            {/* HUD corners with glow */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

            {/* Icon with enhanced animation */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="relative z-10"
            >
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-purple-400/20 to-purple-600/5 rounded-full flex items-center justify-center border border-purple-400/30">
                <Users className="text-purple-400 w-12 h-12" />
              </div>
            </motion.div>

            <div className="relative z-10 space-y-6">
              <h1 className="font-arcade text-3xl md:text-4xl text-purple-400 mb-6 text-center">
                {'>'} COMMITTEES
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
                  Team formation in progress...
                  <span className="animate-blink text-purple-400">_</span>
                </p>
              </motion.div>

              {/* Committee preview cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="border border-purple-400/20 p-4 bg-black/40 rounded-lg text-center">
                  <div className="w-8 h-8 bg-purple-400/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                  </div>
                  <p className="font-arcade text-xs text-purple-400">TECH TEAM</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">Core Development</p>
                </div>
                <div className="border border-purple-400/20 p-4 bg-black/40 rounded-lg text-center">
                  <div className="w-8 h-8 bg-purple-400/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                  </div>
                  <p className="font-arcade text-xs text-purple-400">DESIGN TEAM</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">UI/UX Design</p>
                </div>
                <div className="border border-purple-400/20 p-4 bg-black/40 rounded-lg text-center">
                  <div className="w-8 h-8 bg-purple-400/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                  </div>
                  <p className="font-arcade text-xs text-purple-400">ORGANIZERS</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">Event Management</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">
                <div className="border border-purple-400/20 p-3 bg-black/40 rounded">
                  <p className="font-mono text-xs text-purple-400/60">STATUS</p>
                  <p className="font-arcade text-sm text-secondary">RECRUITING</p>
                </div>
                <div className="border border-purple-400/20 p-3 bg-black/40 rounded">
                  <p className="font-mono text-xs text-purple-400/60">ACCESS</p>
                  <p className="font-arcade text-sm text-secondary">CONFIDENTIAL</p>
                </div>
                <div className="border border-purple-400/20 p-3 bg-black/40 rounded">
                  <p className="font-mono text-xs text-purple-400/60">MEMBERS</p>
                  <p className="font-arcade text-sm text-purple-400">45+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Committees;