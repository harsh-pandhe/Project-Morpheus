import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Mail, Phone, Linkedin, Github, Zap, Code, 
  Palette, Database, Shield, Globe, ExternalLink, ChevronRight,
  Award, Users, BookOpen, Cpu, Wifi
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import MatrixRain from '@/components/MatrixRain';
import CRTOverlay from '@/components/CRTOverlay';

/**
 * UTILS: Glitch Text Animation
 */
const GlitchText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}/!@#$%^&*()";

  const triggerGlitch = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        prev.split("").map((_, index) => {
          if (index < iterations) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1/3;
    }, 30);
  };

  useEffect(() => {
    triggerGlitch();
  }, [text]);

  return (
    <span className={className} onMouseEnter={triggerGlitch}>
      {displayText}
    </span>
  );
};

interface SkillItem {
  name: string;
  level: number;
  icon: any;
  tags: string[];
}

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
}

const SKILLS: SkillItem[] = [
  { name: 'Full-Stack Architecture', level: 95, icon: Code, tags: ['React', 'Next.js', 'Node.js'] },
  { name: 'Blockchain & Web3', level: 90, icon: Globe, tags: ['Solidity', 'Ethereum', 'Smart Contracts'] },
  { name: 'System Design', level: 88, icon: Database, tags: ['Microservices', 'PostgreSQL', 'Redis'] },
  { name: 'Security & Cryptography', level: 92, icon: Shield, tags: ['Ethical Hacking', 'Quantum Crypto', 'OWASP'] },
];

const PROJECTS: ProjectItem[] = [
  {
    id: 'telhan-sathi',
    title: 'Telhan Sathi',
    category: 'NATIONAL WINNER - SIH 2025',
    description: 'AI-powered platform for oilseed farming with predictive crop advisories. Winner of Smart India Hackathon 2025 - first national victory from SIT Lonavala.',
    tech: ['Python', 'IoT', 'Django', 'Mobile App', 'ML Models'],
    link: '#'
  },
  {
    id: 'codex',
    title: 'Codex - Collaborative Code Editor',
    category: 'LIVE PROJECT',
    description: 'Real-time collaborative coding platform supporting 50+ concurrent users with sub-50ms state propagation. Published research paper in IRJMETS.',
    tech: ['Next.js', 'Monaco Editor', 'Liveblocks', 'TypeScript'],
    link: 'https://collabcodex.vercel.app'
  },
  {
    id: 'cityconnect',
    title: 'CityConnect - Civic Engagement',
    category: 'BLOCKCHAIN DAPP',
    description: 'Decentralized civic reporting platform with blockchain-based EcoCoins. Users earn tokens for resolving infrastructure issues.',
    tech: ['Next.js', 'Solidity', 'Django', 'Blockchain'],
    link: '#'
  }
];

const Creator = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isBooted, setIsBooted] = useState(false);

  // Terminal booting sequence
  useEffect(() => {
    const bootSequence = [
      "Initializing architect.sys...",
      "Loading credentials: Harsh Pandhe",
      "Scanning achievement database...",
      "SIH 2025: NATIONAL WINNER DETECTED",
      "Decoding neural patterns...",
      "ACCESS GRANTED: CREATOR.MORPHEUS",
      "Profile: harshpandhehome@gmail.com",
      "System Status: READY FOR COLLABORATION"
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${bootSequence[i]}`]);
        i++;
      } else {
        clearInterval(interval);
        setIsBooted(true);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 font-mono selection:bg-green-500 selection:text-black overflow-x-hidden">
      <MatrixRain />
      <CRTOverlay />
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85 pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full px-4 sm:px-6 py-4 md:py-6 z-40 flex justify-between items-center gap-4 backdrop-blur-md border-b border-green-900/40 bg-black/85">
        <Link to="/" className="flex items-center gap-2 hover:text-green-400 transition-colors">
          <ArrowLeft size={20} />
          <span className="text-sm tracking-tighter text-green-400 opacity-80">BACK_TO_MORPHEUS</span>
        </Link>
        
        <div className="hidden md:block text-center">
          <h1 className="text-sm tracking-tighter text-green-300">HARSH_PANDHE.EXE</h1>
          <p className="text-[10px] text-green-300/80 uppercase">SIH 2025 National Winner</p>
        </div>

        <div className="flex gap-4 items-center">
          <a href="https://github.com/harsh-pandhe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/harshpandhe/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-28 md:pt-32 pb-24 px-4 sm:px-6 lg:px-10 max-w-6xl xl:max-w-7xl mx-auto space-y-28 md:space-y-32">
        
        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-7 md:space-y-8 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5 text-[10px] uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              System Authenticated
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-none">
              <span className="text-white block">HARSH</span>
              <GlitchText text="PANDHE" className="text-green-500 block" />
              <span className="text-green-900 block">Developer</span>
            </h2>

            <p className="max-w-xl text-slate-200/85 leading-relaxed text-sm md:text-base">
              🏆 SIH 2025 National Winner | Full-Stack Developer | Blockchain Architect | 
              Cybersecurity Specialist at IIC-SIT. Building decentralized systems & innovative web solutions.
            </p>

            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <a href="tel:+917208783332" className="flex items-center gap-2 bg-green-500 text-black px-4 py-2 font-bold hover:shadow-[0_0_20px_rgba(0,255,0,0.5)] transition-all text-sm md:text-base">
                <Phone size={16} /> CALL_NOW
              </a>
              <a href="mailto:harshpandhehome@gmail.com" className="flex items-center gap-2 border border-green-500/50 px-4 py-2 font-bold hover:bg-green-500/10 transition-all text-sm md:text-base">
                <Mail size={16} /> EMAIL
              </a>
            </div>

            {/* Profile Visual */}
            <div className="flex items-center gap-4 p-4 border border-green-900/60 bg-black/80 shadow-[0_10px_40px_rgba(0,0,0,0.35)] rounded-lg max-w-md">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-green-500/60 shadow-[0_0_25px_rgba(0,255,0,0.35)]">
                <img
                  src="https://avatars.githubusercontent.com/u/13140051?v=4"
                  alt="Harsh Pandhe"
                  className="w-full h-full object-cover"
                />
                <span className="absolute inset-0 ring-2 ring-green-400/50 animate-pulse" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-green-300/80">The Architect</p>
                <p className="text-sm text-slate-100 font-bold">Harsh Pandhe</p>
                <p className="text-[11px] text-slate-300/80">Full-Stack · Blockchain · Security</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 md:pt-7 border-t border-green-900/40">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-400">1</div>
                <p className="text-[10px] text-slate-400 uppercase">National Win</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-400">70+</div>
                <p className="text-[10px] text-slate-400 uppercase">Developers Mentored</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-400">817</div>
                <p className="text-[10px] text-slate-400 uppercase">GitHub Contributions</p>
              </div>
            </div>
          </motion.div>

          {/* Terminal Console */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block relative group"
          >
            <div className="absolute -inset-4 bg-green-500/10 blur-xl group-hover:bg-green-500/20 transition-all"></div>
            <div className="relative bg-black/80 border border-green-500/50 rounded-lg overflow-hidden shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between px-4 py-2 border-b border-green-500/30 bg-green-900/20">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] text-green-500/50 font-bold uppercase tracking-widest">System.Log</div>
              </div>
              <div className="p-6 h-[400px] overflow-y-auto font-mono text-xs space-y-2 scrollbar-hide">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-green-800 shrink-0">[{i}]</span>
                    <span className={i === logs.length - 1 ? 'text-white' : 'text-green-500'}>{log}</span>
                  </div>
                ))}
                {isBooted && (
                  <div className="flex items-center gap-2 mt-4 animate-pulse">
                    <span className="text-green-500 underline">harsh@morpheus:~$</span>
                    <div className="w-2 h-4 bg-green-500" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section>
          <div className="flex items-end gap-4 mb-12">
            <h3 className="text-3xl font-bold tracking-tighter">ABOUT_ARCHITECT.sys</h3>
            <div className="h-[1px] bg-green-900 flex-grow mb-2" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-green-900/60 hover:border-green-500 bg-black/80 p-8 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            <div className="space-y-4">
              <p className="text-slate-100 leading-relaxed">
                Computer Science undergraduate at SIH Lonavala specializing in Full-Stack Development, Blockchain Architecture, and Distributed Systems. 
              </p>
              <p className="text-slate-100 leading-relaxed">
                <strong className="text-green-400">🏆 Achievement:</strong> Led Algo Sapiens team to victory in Smart India Hackathon 2025 with Telhan Sathi - 
                an AI-powered platform for oilseed farming. First team from SIT Lonavala to reach nationals and win nationally.
              </p>
              <p className="text-slate-100 leading-relaxed">
                <strong className="text-green-400">🛡️ Role:</strong> Head of Cybersecurity & Blockchain at IIC-SIT, mentoring 70+ developers and pioneering Project Morpheus 2026 
                (national-level hackathon with 200+ participants).
              </p>
              <p className="text-slate-100 leading-relaxed">
                <strong className="text-green-400">📍 Focus:</strong> Building decentralized systems, high-performance APIs, quantum-ready cryptography, and mentoring the next generation of developers.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="flex items-end gap-4 mb-12">
            <h3 className="text-3xl font-bold tracking-tighter">SKILL_SETS.db</h3>
            <div className="h-[1px] bg-green-900 flex-grow mb-2" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, i) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-green-900/60 hover:border-green-500 bg-black/80 transition-all group relative overflow-hidden shadow-[0_14px_30px_rgba(0,0,0,0.45)]"
              >
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-40 transition-opacity">
                   <skill.icon size={48} />
                </div>
                <skill.icon size={24} className="mb-4 text-green-400" />
                <h4 className="text-white font-bold mb-2 uppercase tracking-wide text-sm">{skill.name}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.tags.map(t => (
                    <span key={t} className="text-[9px] border border-green-800 px-1.5 py-0.5 rounded text-slate-200/80">{t}</span>
                  ))}
                </div>
                <div className="w-full bg-green-950 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.8)]"
                  />
                </div>
                <p className="text-green-400/60 text-[10px] mt-2">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className="flex items-end gap-4 mb-12">
            <h3 className="text-3xl font-bold tracking-tighter">PROJECT_ARCHIVE.sys</h3>
            <div className="h-[1px] bg-green-900 flex-grow mb-2" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {PROJECTS.map((project, i) => (
                <motion.a
                  href={project.link}
                  target={project.link !== '#' ? '_blank' : undefined}
                  rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group relative block cursor-pointer"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-black border border-green-500/20 p-8 h-full flex flex-col justify-between hover:border-green-500 transition-colors">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] font-bold text-green-800 border-b border-green-800">{project.category}</span>
                        <ExternalLink size={16} className="text-green-800 group-hover:text-green-500 transition-colors" />
                      </div>
                      <h4 className="text-2xl font-black text-white mb-4 group-hover:text-green-400 transition-colors tracking-tighter">
                        {project.title}
                      </h4>
                      <p className="text-slate-100/90 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-green-900/50">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] text-green-100/90">#{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-32">
          <div className="flex items-end gap-4 mb-12">
            <h3 className="text-3xl font-bold tracking-tighter">ACHIEVEMENTS.log</h3>
            <div className="h-[1px] bg-green-900 flex-grow mb-2" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Award, title: 'SIH 2025 National Winner', desc: 'Led Algo Sapiens to victory with Telhan Sathi among 10,000+ teams' },
              { icon: Users, title: '70+ Developers Mentored', desc: 'CODE2LAUNCH workshop in React, Node.js, and JavaScript' },
              { icon: BookOpen, title: 'Published Researcher', desc: 'IRJMETS paper on Collaborative Real-Time Code Editor (Jan 2024)' },
              { icon: Cpu, title: 'Open Source Contributor', desc: '76 repositories, 817 GitHub contributions (YTD)' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-green-900/60 hover:border-green-500 bg-black/80 transition-all group shadow-[0_14px_30px_rgba(0,0,0,0.45)]"
              >
                <div className="flex gap-4">
                  <item.icon size={24} className="text-green-400 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-2 uppercase tracking-wide">{item.title}</h4>
                    <p className="text-slate-100/90 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Module */}
        <section className="relative">
          <div className="absolute inset-0 bg-green-500/5 -skew-y-3 pointer-events-none" />
          <div className="max-w-4xl mx-auto py-20 px-6 border-l-4 border-green-500 relative bg-black/80 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            <h3 className="text-4xl font-black text-white mb-4 italic tracking-tighter">ESTABLISH_CONNECTION?</h3>
            <p className="text-slate-100/90 mb-10 max-w-lg">
              The Matrix is waiting. Let's collaborate on blockchain, distributed systems, or your next innovative project.
            </p>
            
            <div className="space-y-6 max-w-xl">
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-green-300" />
                <a href="tel:+917208783332" className="text-slate-100 hover:text-white transition-colors">+91-7208783332</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-green-300" />
                <a href="mailto:harshpandhehome@gmail.com" className="text-slate-100 hover:text-white transition-colors">harshpandhehome@gmail.com</a>
              </div>
              <div className="flex items-center gap-4">
                <Globe size={20} className="text-green-300" />
                <a href="https://harshpandhe.com" target="_blank" rel="noopener noreferrer" className="text-slate-100 hover:text-white transition-colors">harshpandhe.com</a>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/harsh-pandhe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500 text-slate-100 hover:bg-green-500 hover:text-black transition-all">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/harshpandhe/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500 text-slate-100 hover:bg-green-500 hover:text-black transition-all">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-green-900/50 py-12 text-center text-[10px] tracking-widest opacity-80 uppercase text-green-200/90">
        <div className="flex justify-center gap-8 mb-4 flex-wrap text-green-200/80">
          <span>LATENCY: 12ms</span>
          <span>LOCATION: SIH_LONAVALA</span>
          <span>STATUS: READY_FOR_COLLAB</span>
        </div>
        <p>© 2024 PROJECT_MORPHEUS // ARCHITECT: HARSH PANDHE // HEAD: CYBERSECURITY & BLOCKCHAIN @ IIC-SIT</p>
      </footer>
    </div>
  );
};

export default Creator;
