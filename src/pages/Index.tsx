import { useEffect, useRef, useState } from 'react';
import MatrixRain from '@/components/MatrixRain';
import CRTOverlay from '@/components/CRTOverlay';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DomainsSection from '@/components/DomainsSection';
import PrizeSection from '@/components/PrizeSection';
import TimelineSection from '@/components/TimelineSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [signalOpen, setSignalOpen] = useState(false);
  const [signalStatus, setSignalStatus] = useState<'idle' | 'ready' | 'go' | 'done' | 'too-soon'>('idle');
  const [signalTime, setSignalTime] = useState<number | null>(null);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const signalTimerRef = useRef<number | null>(null);
  const signalStartRef = useRef<number>(0);

  useEffect(() => {
    const sequence = 'MATRIX';
    let buffer = '';
    const onKey = (event: KeyboardEvent) => {
      buffer = `${buffer}${event.key.toUpperCase()}`.slice(-sequence.length);
      if (buffer === sequence) {
        setSignalOpen(true);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const resetSignal = () => {
    if (signalTimerRef.current) {
      window.clearTimeout(signalTimerRef.current);
      signalTimerRef.current = null;
    }
    setSignalStatus('idle');
    setSignalTime(null);
  };

  const startSignal = () => {
    resetSignal();
    setSignalStatus('ready');
    const delay = 1200 + Math.random() * 2200;
    signalTimerRef.current = window.setTimeout(() => {
      signalStartRef.current = performance.now();
      setSignalStatus('go');
    }, delay);
  };

  const handleSignalClick = () => {
    if (signalStatus === 'ready') {
      setSignalStatus('too-soon');
      return;
    }

    if (signalStatus === 'go') {
      const reaction = Math.round(performance.now() - signalStartRef.current);
      setSignalTime(reaction);
      setBestTime((prev) => (prev === null ? reaction : Math.min(prev, reaction)));
      setSignalStatus('done');
    }
  };

  const closeSignal = () => {
    resetSignal();
    setSignalOpen(false);
  };

  useEffect(() => () => resetSignal(), []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Fixed Matrix Rain Background */}
      <MatrixRain />

      {/* CRT Scanlines & Vignette Overlay */}
      <CRTOverlay />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <DomainsSection />
        <PrizeSection />
        <TimelineSection />
        <FAQSection />
        <Footer />
      </main>

      {signalOpen && (
        <div className="fixed inset-0 z-[55] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="w-full max-w-md rounded-2xl border border-primary/40 bg-black/90 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-mono text-xs text-primary/60">HIDDEN_PROTOCOL</p>
                <h3 className="font-arcade text-lg text-primary">SIGNAL SYNC</h3>
              </div>
              <button onClick={closeSignal} className="text-primary/70 hover:text-primary text-sm">
                CLOSE
              </button>
            </div>

            <p className="font-mono text-xs text-muted-foreground mb-4">
              Wait for the signal to turn green, then click as fast as possible.
            </p>

            <button
              onClick={handleSignalClick}
              className={`w-full h-32 rounded-xl border transition-all flex items-center justify-center font-arcade text-sm ${signalStatus === 'go'
                  ? 'bg-primary/20 border-primary text-primary'
                  : 'bg-black/60 border-primary/30 text-primary/60'
                }`}
            >
              {signalStatus === 'idle' && 'READY'}
              {signalStatus === 'ready' && 'WAIT...'}
              {signalStatus === 'go' && 'GO'}
              {signalStatus === 'done' && `${signalTime}ms`}
              {signalStatus === 'too-soon' && 'TOO SOON'}
            </button>

            <div className="flex items-center justify-between mt-4 font-mono text-xs text-primary/70">
              <span>BEST: {bestTime ?? '--'}ms</span>
              <span>SEQ: MATRIX</span>
            </div>

            <div className="mt-4 flex gap-3">
              <button
                onClick={startSignal}
                className="flex-1 px-4 py-2 text-xs font-arcade border border-primary/50 text-primary hover:bg-primary/10"
              >
                START
              </button>
              <button
                onClick={resetSignal}
                className="flex-1 px-4 py-2 text-xs font-arcade border border-primary/20 text-primary/60 hover:text-primary"
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
