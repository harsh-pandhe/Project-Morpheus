import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, HelpCircle, ExternalLink, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ_GROUPS = [
  {
    title: 'General',
    items: [
      {
        q: 'What is Project Morpheus?',
        a: 'Project Morpheus is a 24-hour hackathon that challenges participants to build innovative solutions across 5 domains: EdTech, Healthcare, Women Safety, Agritech, and Fintech.',
      },
      {
        q: 'When and where does it take place?',
        a: 'Feb 26, 2026 at STES Campus (SIT Lonavala & SKN). The finale is an on-site, 24-hour build.',
      },
      {
        q: 'Who can participate?',
        a: 'Engineering (B.Tech/B.E.) and diploma students from any year. Cross-college teams are welcome.',
      },
    ],
  },
  {
    title: 'Registration',
    items: [
      {
        q: 'How do we register?',
        a: 'Registration is handled on Unstop. Use the Register Now button or visit the official Unstop listing.',
      },
      {
        q: 'What is the team size?',
        a: 'Teams of 3-5 members.',
      },
      {
        q: 'Is there a registration fee?',
        a: 'Yes. ₹200 per team.',
      },
    ],
  },
  {
    title: 'Rounds & Submission',
    items: [
      {
        q: 'What is the event format?',
        a: 'Three rounds: (1) online PPT/PDF submission, (2) online pitch, (3) on-site 24-hour hackathon.',
      },
      {
        q: 'Do we need to pick a problem statement?',
        a: 'Yes. Select one statement from the problem statements list and build your solution around it.',
      },
      {
        q: 'Can we use pre-existing code or templates?',
        a: 'No. All work must be built from scratch during the hackathon.',
      },
    ],
  },
  {
    title: 'Logistics',
    items: [
      {
        q: 'What should we bring?',
        a: 'Laptop, chargers, college ID, and any personal essentials. WiFi, meals, and on-site support are provided.',
      },
      {
        q: 'How can we contact the organizers?',
        a: 'Use the Contact Us button on the home page or reach out via the Committees page contact cards.',
      },
    ],
  },
];

const FAQs = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [cipherOpen, setCipherOpen] = useState(false);
  const [cipherPhase, setCipherPhase] = useState<'idle' | 'show' | 'input' | 'win' | 'lose'>('idle');
  const [cipherSequence, setCipherSequence] = useState<number[]>([]);
  const [cipherInput, setCipherInput] = useState<number[]>([]);
  const [cipherLevel, setCipherLevel] = useState(1);
  const [cipherActive, setCipherActive] = useState<number | null>(null);
  const cipherTimersRef = useRef<number[]>([]);

  const clearCipherTimers = () => {
    cipherTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    cipherTimersRef.current = [];
  };

  const buildSequence = (length: number) =>
    Array.from({ length }, () => Math.floor(Math.random() * 9));

  const playCipher = (sequence: number[]) => {
    clearCipherTimers();
    setCipherPhase('show');
    let delay = 0;

    sequence.forEach((cell) => {
      cipherTimersRef.current.push(
        window.setTimeout(() => setCipherActive(cell), delay + 250)
      );
      cipherTimersRef.current.push(
        window.setTimeout(() => setCipherActive(null), delay + 600)
      );
      delay += 650;
    });

    cipherTimersRef.current.push(
      window.setTimeout(() => setCipherPhase('input'), delay + 200)
    );
  };

  const startCipher = (levelOverride?: number) => {
    const level = levelOverride ?? cipherLevel;
    const length = Math.min(2 + level, 6);
    const next = buildSequence(length);
    setCipherSequence(next);
    setCipherInput([]);
    playCipher(next);
  };

  const resetCipher = () => {
    clearCipherTimers();
    setCipherPhase('idle');
    setCipherSequence([]);
    setCipherInput([]);
    setCipherLevel(1);
    setCipherActive(null);
  };

  useEffect(() => {
    const sequence = 'ORACLE';
    let buffer = '';
    const onKey = (event: KeyboardEvent) => {
      buffer = `${buffer}${event.key.toUpperCase()}`.slice(-sequence.length);
      if (buffer === sequence) {
        setCipherOpen(true);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!cipherOpen) {
      resetCipher();
    }

    return () => clearCipherTimers();
  }, [cipherOpen]);

  const handleCipherClick = (index: number) => {
    if (cipherPhase !== 'input') return;

    const nextInput = [...cipherInput, index];
    setCipherInput(nextInput);

    if (cipherSequence[nextInput.length - 1] !== index) {
      setCipherPhase('lose');
      return;
    }

    if (nextInput.length === cipherSequence.length) {
      setCipherPhase('win');
      setCipherLevel((level) => {
        const nextLevel = level + 1;
        cipherTimersRef.current.push(
          window.setTimeout(() => startCipher(nextLevel), 700)
        );
        return nextLevel;
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 sm:py-14">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/40 bg-cyan-500/10">
            <HelpCircle className="text-cyan-400" size={18} />
            <span className="font-mono text-xs text-cyan-200">PROJECT MORPHEUS FAQ</span>
          </div>
          <h1 className="mt-6 font-arcade text-3xl sm:text-4xl text-cyan-300">ORACLE ACCESS</h1>
          <p className="mt-4 font-mono text-sm sm:text-base text-gray-400">
            Quick answers to help you move fast. If you need anything else, reach out on Unstop.
          </p>
          <a
            href="https://unstop.com/p/project-morpheus-2026-24-hour-hackathon-sinhgad-institute-of-technology-lonavala-1605670"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2 border border-cyan-400/40 text-cyan-200 hover:bg-cyan-500/10 font-mono text-xs"
          >
            Open Unstop Listing <ExternalLink size={12} />
          </a>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-8">
          {FAQ_GROUPS.map((group, groupIndex) => (
            <section key={group.title} className="border border-cyan-400/20 bg-black/60 rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="text-cyan-400" size={16} />
                <h2 className="font-arcade text-lg text-cyan-300">{group.title}</h2>
              </div>
              <div className="space-y-3">
                {group.items.map((item, itemIndex) => {
                  const id = `${groupIndex}-${itemIndex}`;
                  const isOpen = openId === id;
                  return (
                    <div key={id} className="border border-cyan-400/20 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenId(isOpen ? null : id)}
                        className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
                      >
                        <span className="font-mono text-sm text-cyan-200">{item.q}</span>
                        <span className="text-cyan-400 text-xs">{isOpen ? '—' : '+'}</span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 text-sm text-gray-300 font-mono">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      {cipherOpen && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="w-full max-w-sm rounded-2xl border border-cyan-400/40 bg-black/90 p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="font-mono text-[10px] text-cyan-300/70">HIDDEN_PROTOCOL</p>
                <h3 className="font-arcade text-base text-cyan-300">CIPHER GRID</h3>
              </div>
              <button onClick={() => setCipherOpen(false)} className="text-cyan-400 text-xs">
                CLOSE
              </button>
            </div>

            <p className="font-mono text-xs text-gray-400 mb-4">
              Watch the sequence, then repeat it. Each round adds one step.
            </p>

            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleCipherClick(index)}
                  className={`h-16 rounded-md border transition-all ${cipherActive === index
                      ? 'bg-cyan-400/40 border-cyan-300'
                      : 'bg-black/60 border-cyan-400/20'
                    }`}
                />
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between font-mono text-xs text-cyan-300">
              <span>LEVEL: {cipherLevel}</span>
              <span>SEQ: ORACLE</span>
            </div>

            <div className="mt-4 flex gap-3">
              <button
                onClick={startCipher}
                className="flex-1 px-4 py-2 text-xs font-arcade border border-cyan-400/40 text-cyan-200 hover:bg-cyan-500/10"
              >
                {cipherPhase === 'idle' ? 'START' : 'REPLAY'}
              </button>
              <button
                onClick={resetCipher}
                className="flex-1 px-4 py-2 text-xs font-arcade border border-cyan-400/20 text-cyan-200/70 hover:text-cyan-200"
              >
                RESET
              </button>
            </div>

            {cipherPhase === 'win' && (
              <p className="mt-3 text-center font-mono text-xs text-cyan-300">SYNC OK</p>
            )}
            {cipherPhase === 'lose' && (
              <p className="mt-3 text-center font-mono text-xs text-red-400">SYNC FAILED</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQs;