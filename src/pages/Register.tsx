import { motion } from 'framer-motion';
import { ArrowLeft, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
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
          <div className="absolute inset-0 bg-orange-500/5 rounded-xl blur-2xl" />
          
          <div className="glass-card p-8 md:p-16 border-2 border-orange-400/50 relative bg-black/80 backdrop-blur-lg rounded-xl shadow-2xl shadow-orange-400/20">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-xl" />
            
            {/* HUD corners with glow */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.5)]" />

            {/* Icon with enhanced animation */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative z-10"
            >
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-orange-400/20 to-orange-600/5 rounded-full flex items-center justify-center border border-orange-400/30">
                <UserPlus className="text-orange-400 w-12 h-12" />
              </div>
            </motion.div>

            <div className="relative z-10 space-y-6">
              <h1 className="font-arcade text-3xl md:text-4xl text-orange-400 mb-6 text-center">
                {'>'} REGISTER
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
                  Registration portal initializing...
                  <span className="animate-blink text-orange-400">_</span>
                </p>
              </motion.div>

              {/* Registration info cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="border border-orange-400/20 p-6 bg-black/40 rounded-lg">
                  <h3 className="font-arcade text-sm text-orange-400 mb-3">TEAM REGISTRATION</h3>
                  <ul className="space-y-2 font-mono text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-400 rounded-full" />
                      Max 4 members per team
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-400 rounded-full" />
                      Cross-college teams allowed
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-400 rounded-full" />
                      Early bird benefits
                    </li>
                  </ul>
                </div>
                <div className="border border-orange-400/20 p-6 bg-black/40 rounded-lg">
                  <h3 className="font-arcade text-sm text-orange-400 mb-3">REQUIREMENTS</h3>
                  <ul className="space-y-2 font-mono text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-400 rounded-full" />
                      Valid college ID
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-400 rounded-full" />
                      Contact information
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-orange-400 rounded-full" />
                      Domain preference
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">
                <div className="border border-orange-400/20 p-3 bg-black/40 rounded">
                  <p className="font-mono text-xs text-orange-400/60">STATUS</p>
                  <p className="font-arcade text-sm text-secondary">OFFLINE</p>
                </div>
                <div className="border border-orange-400/20 p-3 bg-black/40 rounded">
                  <p className="font-mono text-xs text-orange-400/60">LAUNCH</p>
                  <p className="font-arcade text-sm text-secondary">SOON</p>
                </div>
                <div className="border border-orange-400/20 p-3 bg-black/40 rounded">
                  <p className="font-mono text-xs text-orange-400/60">SLOTS</p>
                  <p className="font-arcade text-sm text-orange-400">LIMITED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;