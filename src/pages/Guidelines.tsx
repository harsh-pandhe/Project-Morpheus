import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Users, Code, Trophy, AlertTriangle, Clock, Shield, Calendar, Award, Mail, Phone, Zap, Target, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

const Guidelines = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Matrix Memory Game State
  const [gameActive, setGameActive] = useState(false);
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerSequence, setPlayerSequence] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState<'idle' | 'showing' | 'input' | 'success' | 'failed'>('idle');
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const matrixColors = ['#00ff41', '#ff0040', '#00bfff', '#ffff00'];
  const gameButtons = [0, 1, 2, 3];

  const startGame = () => {
    setGameActive(true);
    setSequence([]);
    setPlayerSequence([]);
    setScore(0);
    setGameStatus('idle');
    addToSequence();
  };

  const addToSequence = () => {
    const newNumber = Math.floor(Math.random() * 4);
    const newSequence = [...sequence, newNumber];
    setSequence(newSequence);
    setPlayerSequence([]);
    setGameStatus('showing');
    playSequence(newSequence);
  };

  const playSequence = async (seq: number[]) => {
    setIsPlaying(true);
    for (let i = 0; i < seq.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 600));
      setActiveButton(seq[i]);
      await new Promise(resolve => setTimeout(resolve, 400));
      setActiveButton(null);
    }
    setIsPlaying(false);
    setGameStatus('input');
  };

  const handleButtonClick = (buttonIndex: number) => {
    if (gameStatus !== 'input' || isPlaying) return;
    
    const newPlayerSequence = [...playerSequence, buttonIndex];
    setPlayerSequence(newPlayerSequence);
    
    // Check if current input is correct
    if (sequence[newPlayerSequence.length - 1] !== buttonIndex) {
      setGameStatus('failed');
      setTimeout(() => {
        setGameActive(false);
        setGameStatus('idle');
      }, 2000);
      return;
    }
    
    // Check if sequence is complete
    if (newPlayerSequence.length === sequence.length) {
      setScore(score + 1);
      setGameStatus('success');
      setTimeout(() => {
        addToSequence();
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white" ref={ref}>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      </div>

      <div className="relative z-10 py-8 sm:py-12 px-2 xs:px-3 sm:px-4">
        {/* Back button */}
        <div className="container mx-auto max-w-6xl mb-6 sm:mb-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm"
          >
            <ArrowLeft size={16} />
            Back to Matrix
          </Link>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-block p-4 sm:p-6 border border-primary/30 xs:border-2 bg-black/60 backdrop-blur-sm rounded-lg mb-4 sm:mb-6 shadow-lg xs:shadow-2xl shadow-primary/20 w-full max-w-sm xs:max-w-md sm:max-w-lg mx-auto">
            <motion.p 
              className="font-mono text-xs sm:text-sm text-secondary mb-3 sm:mb-4 tracking-wider xs:tracking-widest font-bold break-words"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {'>'} PROTOCOL_GUIDELINES.EXE
            </motion.p>
            <h1 className="font-arcade text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary text-glow mb-3 sm:mb-4 tracking-wide xs:tracking-wider break-words">
              MATRIX RULES
            </h1>
            <div className="w-16 xs:w-20 sm:w-24 h-0.5 xs:h-1 bg-primary mx-auto opacity-60" />
          </div>
          <p className="font-mono text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-medium break-words px-2">
            Wake up. Read the rules. Enter The Construct.
          </p>
        </motion.div>

        {/* Content */}
        <div className="container mx-auto max-w-6xl space-y-8 sm:space-y-12">
          
          {/* Eligibility Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card border border-primary/30 xs:border-2 bg-black/60 backdrop-blur-sm rounded-lg p-4 xs:p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-primary/20 border border-primary/40 rounded-lg flex items-center justify-center">
                <Users className="text-primary w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="font-arcade text-lg xs:text-xl sm:text-2xl text-primary break-words">ELIGIBILITY MATRIX</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 xs:gap-6">
              <div className="space-y-3">
                <h3 className="font-mono text-sm xs:text-base text-secondary font-bold">✅ AUTHORIZED ACCESS:</h3>
                <ul className="space-y-2 font-mono text-xs xs:text-sm text-gray-300">
                  <li>• Engineering students (B.Tech/B.E.)</li>
                  <li>• All branches welcome</li>
                  <li>• All academic years (1st-4th)</li>
                  <li>• Diploma students</li>
                  <li>• International students in India</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-mono text-sm xs:text-base text-secondary font-bold">❌ ACCESS DENIED:</h3>
                <ul className="space-y-2 font-mono text-xs xs:text-sm text-gray-300">
                  <li>• Non-engineering students</li>
                  <li>• Graduated students</li>
                  <li>• Working professionals</li>
                  <li>• Faculty members</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Team Formation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="glass-card border border-primary/30 xs:border-2 bg-black/60 backdrop-blur-sm rounded-lg p-4 xs:p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-secondary/20 border border-secondary/40 rounded-lg flex items-center justify-center">
                <Code className="text-secondary w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="font-arcade text-lg xs:text-xl sm:text-2xl text-secondary break-words">TEAM PROTOCOL</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 xs:gap-6 mb-6">
              <div className="text-center border border-primary/20 rounded-lg p-3 xs:p-4 bg-black/40">
                <p className="font-arcade text-lg xs:text-xl sm:text-2xl text-primary">3-5</p>
                <p className="font-mono text-xs xs:text-sm text-gray-400">Members</p>
              </div>
              <div className="text-center border border-primary/20 rounded-lg p-3 xs:p-4 bg-black/40">
                <p className="font-arcade text-lg xs:text-xl sm:text-2xl text-primary">1</p>
                <p className="font-mono text-xs xs:text-sm text-gray-400">Team Leader</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="font-mono text-xs xs:text-sm text-gray-300">• Cross-institutional teams allowed</p>
              <p className="font-mono text-xs xs:text-sm text-gray-300">• Team changes locked after Jan 28, 2026</p>
              <p className="font-mono text-xs xs:text-sm text-gray-300">• All members must attend offline finals</p>
            </div>
          </motion.section>

          {/* Hackathon Structure */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-arcade text-xl xs:text-2xl sm:text-3xl text-center text-primary">THREE ROUND PROTOCOL</h2>
            
            <div className="grid lg:grid-cols-3 gap-4 xs:gap-6">
              {/* Round 1 */}
              <div className="glass-card border border-primary/30 xs:border-2 bg-black/60 backdrop-blur-sm rounded-lg p-4 xs:p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 xs:w-16 xs:h-16 bg-primary/20 border border-primary/40 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-arcade text-lg xs:text-xl text-primary">R1</span>
                  </div>
                  <h3 className="font-arcade text-base xs:text-lg text-primary">THE FILTER</h3>
                  <p className="font-mono text-xs xs:text-sm text-gray-400">Online Submission</p>
                </div>
                
                <div className="space-y-2 xs:space-y-3 mb-4">
                  <p className="font-mono text-xs xs:text-sm text-secondary font-bold">Dec 5 - Jan 28, 2026</p>
                  <p className="font-mono text-xs text-gray-300">• PPT/PDF submission (max 10 slides)</p>
                  <p className="font-mono text-xs text-gray-300">• Choose ONE problem statement</p>
                  <p className="font-mono text-xs text-gray-300">• Upload via Unstop only</p>
                </div>
                
                <div className="text-center">
                  <span className="font-arcade text-sm xs:text-base text-secondary">Qualifying Round</span>
                </div>
              </div>

              {/* Round 2 */}
              <div className="glass-card border border-secondary/30 xs:border-2 bg-black/60 backdrop-blur-sm rounded-lg p-4 xs:p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 xs:w-16 xs:h-16 bg-secondary/20 border border-secondary/40 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-arcade text-lg xs:text-xl text-secondary">R2</span>
                  </div>
                  <h3 className="font-arcade text-base xs:text-lg text-secondary">THE CODE</h3>
                  <p className="font-mono text-xs xs:text-sm text-gray-400">Online Pitch</p>
                </div>
                
                <div className="space-y-2 xs:space-y-3 mb-4">
                  <p className="font-mono text-xs xs:text-sm text-secondary font-bold">Feb 1-7, 2026</p>
                  <p className="font-mono text-xs text-gray-300">• 10-min live presentation</p>
                  <p className="font-mono text-xs text-gray-300">• Google Meet with judges</p>
                  <p className="font-mono text-xs text-gray-300">• 3-min Q&A session</p>
                </div>
                
                <div className="text-center">
                  <span className="font-arcade text-sm xs:text-base text-secondary">Semi-Finals</span>
                </div>
              </div>

              {/* Round 3 */}
              <div className="glass-card border border-primary/30 xs:border-2 bg-black/60 backdrop-blur-sm rounded-lg p-4 xs:p-6">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 xs:w-16 xs:h-16 bg-primary/20 border border-primary/40 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-arcade text-lg xs:text-xl text-primary">R3</span>
                  </div>
                  <h3 className="font-arcade text-base xs:text-lg text-primary">THE CONSTRUCT</h3>
                  <p className="font-mono text-xs xs:text-sm text-gray-400">24h Hackathon</p>
                </div>
                
                <div className="space-y-2 xs:space-y-3 mb-4">
                  <p className="font-mono text-xs xs:text-sm text-secondary font-bold">Feb 26-28, 2026</p>
                  <p className="font-mono text-xs text-gray-300">• SIT Lonavala Campus</p>
                  <p className="font-mono text-xs text-gray-300">• 24-hour coding marathon</p>
                  <p className="font-mono text-xs text-gray-300">• Live demos & judging</p>
                </div>
                
                <div className="text-center">
                  <span className="font-arcade text-sm xs:text-base text-primary">Winners announced</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Prize Pool */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="glass-card border border-secondary/30 xs:border-2 bg-black/60 backdrop-blur-sm rounded-lg p-4 xs:p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-secondary/20 border border-secondary/40 rounded-lg flex items-center justify-center">
                <Trophy className="text-secondary w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="font-arcade text-lg xs:text-xl sm:text-2xl text-secondary break-words">REWARD MATRIX</h2>
            </div>
            
            <div className="text-center mb-6">
              <div className="inline-block border border-secondary/40 bg-secondary/10 rounded-lg px-4 xs:px-6 py-2 xs:py-3">
                <span className="font-arcade text-xl xs:text-2xl sm:text-3xl text-secondary">₹2,00,000</span>
                <p className="font-mono text-xs xs:text-sm text-gray-400">Total Prize Pool</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="text-center border border-yellow-400/20 rounded-lg p-3 xs:p-4 bg-yellow-400/5">
                <p className="font-arcade text-lg xs:text-xl text-yellow-400">₹50,000</p>
                <p className="font-mono text-xs xs:text-sm text-gray-400">1st Place</p>
              </div>
              <div className="text-center border border-gray-300/20 rounded-lg p-3 xs:p-4 bg-gray-300/5">
                <p className="font-arcade text-lg xs:text-xl text-gray-300">₹30,000</p>
                <p className="font-mono text-xs xs:text-sm text-gray-400">2nd Place</p>
              </div>
              <div className="text-center border border-orange-400/20 rounded-lg p-3 xs:p-4 bg-orange-400/5">
                <p className="font-arcade text-lg xs:text-xl text-orange-400">₹20,000</p>
                <p className="font-mono text-xs xs:text-sm text-gray-400">3rd Place</p>
              </div>
            </div>
            
            <div className="space-y-2 xs:space-y-3">
              <p className="font-mono text-xs xs:text-sm text-gray-300">• Domain Winners: ₹15,000 each (5 tracks)</p>
              <p className="font-mono text-xs xs:text-sm text-gray-300">• All participants get certificates & swag</p>
              <p className="font-mono text-xs xs:text-sm text-gray-300">• Incubation support for winning projects</p>
            </div>
          </motion.section>

          {/* Important Dates */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0 }}
            className="glass-card border border-primary/30 xs:border-2 bg-black/60 backdrop-blur-sm rounded-lg p-4 xs:p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-primary/20 border border-primary/40 rounded-lg flex items-center justify-center">
                <Calendar className="text-primary w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="font-arcade text-lg xs:text-xl sm:text-2xl text-primary break-words">TIMELINE MATRIX</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4">
              <div className="text-center border border-primary/20 rounded-lg p-3 xs:p-4 bg-black/40">
                <p className="font-arcade text-sm xs:text-base text-primary">DEC 5</p>
                <p className="font-mono text-xs text-gray-400">Registrations Open</p>
              </div>
              <div className="text-center border border-secondary/20 rounded-lg p-3 xs:p-4 bg-black/40">
                <p className="font-arcade text-sm xs:text-base text-secondary">JAN 28</p>
                <p className="font-mono text-xs text-gray-400">R1 Deadline</p>
              </div>
              <div className="text-center border border-primary/20 rounded-lg p-3 xs:p-4 bg-black/40">
                <p className="font-arcade text-sm xs:text-base text-primary">FEB 1-7</p>
                <p className="font-mono text-xs text-gray-400">R2 Pitches</p>
              </div>
              <div className="text-center border border-secondary/20 rounded-lg p-3 xs:p-4 bg-black/40">
                <p className="font-arcade text-sm xs:text-base text-secondary">FEB 26-28</p>
                <p className="font-mono text-xs text-gray-400">Finals</p>
              </div>
            </div>
          </motion.section>

          {/* Code of Conduct */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="glass-card border border-secondary/30 xs:border-2 bg-black/60 backdrop-blur-sm rounded-lg p-4 xs:p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-secondary/20 border border-secondary/40 rounded-lg flex items-center justify-center">
                <AlertTriangle className="text-secondary w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="font-arcade text-lg xs:text-xl sm:text-2xl text-secondary break-words">BEHAVIORAL MATRIX</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 xs:gap-6">
              <div className="space-y-3">
                <h3 className="font-mono text-sm xs:text-base text-primary font-bold">✅ EXPECTED BEHAVIOR:</h3>
                <ul className="space-y-2 font-mono text-xs xs:text-sm text-gray-300">
                  <li>• Professional conduct at all times</li>
                  <li>• Respect for all participants</li>
                  <li>• Original work submission only</li>
                  <li>• Collaborative spirit</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-mono text-sm xs:text-base text-secondary font-bold">❌ VIOLATIONS:</h3>
                <ul className="space-y-2 font-mono text-xs xs:text-sm text-gray-300">
                  <li>• Plagiarism = Immediate disqualification</li>
                  <li>• Harassment = Event removal</li>
                  <li>• False information = Permanent ban</li>
                  <li>• Property damage = Legal action</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Matrix Memory Game */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4 }}
            className="glass-card border border-primary/30 xs:border-2 bg-black/60 backdrop-blur-sm rounded-lg p-4 xs:p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-primary/20 border border-primary/40 rounded-lg flex items-center justify-center">
                <Gamepad2 className="text-primary w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="font-arcade text-lg xs:text-xl sm:text-2xl text-primary break-words">MATRIX MEMORY PROTOCOL</h2>
            </div>
            
            <div className="text-center mb-6">
              <p className="font-mono text-sm text-gray-400 mb-4">Test your memory like Neo. Follow the sequence to prove you're ready for The Matrix.</p>
              
              {!gameActive ? (
                <button
                  onClick={startGame}
                  className="px-6 py-3 bg-primary/20 border border-primary/40 rounded-lg font-mono text-primary hover:bg-primary/30 transition-all duration-300 text-sm font-bold"
                >
                  <span className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    INITIATE PROTOCOL
                  </span>
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-secondary" />
                      <span className="font-mono text-sm text-secondary">Score: {score}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm text-primary">
                        Status: {gameStatus === 'showing' && 'WATCH SEQUENCE'}
                        {gameStatus === 'input' && 'YOUR TURN'}
                        {gameStatus === 'success' && 'SEQUENCE CORRECT!'}
                        {gameStatus === 'failed' && 'ACCESS DENIED'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                    {gameButtons.map((buttonIndex) => (
                      <button
                        key={buttonIndex}
                        onClick={() => handleButtonClick(buttonIndex)}
                        disabled={gameStatus !== 'input' || isPlaying}
                        className={`h-16 rounded-lg border-2 transition-all duration-200 font-mono font-bold ${
                          activeButton === buttonIndex
                            ? 'opacity-100 shadow-lg scale-105'
                            : 'opacity-60 hover:opacity-80'
                        }`}
                        style={{
                          backgroundColor: activeButton === buttonIndex ? matrixColors[buttonIndex] : 'transparent',
                          borderColor: matrixColors[buttonIndex],
                          color: matrixColors[buttonIndex],
                          boxShadow: activeButton === buttonIndex ? `0 0 20px ${matrixColors[buttonIndex]}50` : 'none'
                        }}
                      >
                        {buttonIndex + 1}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setGameActive(false)}
                    className="mt-4 px-4 py-2 bg-secondary/20 border border-secondary/40 rounded-lg font-mono text-secondary hover:bg-secondary/30 transition-all duration-300 text-xs"
                  >
                    EXIT MATRIX
                  </button>
                </div>
              )}
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.6 }}
            className="text-center"
          >
            <div className="inline-block border border-primary/40 bg-black/60 backdrop-blur-sm rounded-lg p-4 xs:p-6">
              <div className="flex items-center justify-center gap-3 xs:gap-4 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <p className="font-mono text-sm xs:text-base text-primary font-bold">
                  SYSTEM STATUS: GUIDELINES LOADED
                </p>
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-secondary" />
                  <a href="mailto:support@projectmorpheus.in" className="font-mono text-xs xs:text-sm text-secondary hover:text-secondary/80 break-all">
                    support@projectmorpheus.in
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-secondary" />
                  <a href="tel:+918308878586" className="font-mono text-xs xs:text-sm text-secondary hover:text-secondary/80">
                    +91-8308878586
                  </a>
                </div>
              </div>
              
              <div className="text-xs xs:text-sm font-mono text-muted-foreground">
                Last Updated: DEC 05, 2025 | Version 2.026
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
};

export default Guidelines;