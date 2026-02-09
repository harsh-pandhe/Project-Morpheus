import { useEffect, useRef, useState } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
      const saveData = connection?.saveData ?? false;
      const isMobile = window.innerWidth < 768;
      setIsLowPower(media.matches || saveData || isMobile);
    };

    update();
    media.addEventListener?.('change', update);
    window.addEventListener('resize', update);

    return () => {
      media.removeEventListener?.('change', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const devanagariChars = 'अआइईउऊऋएऐओऔकखगघचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञ०१२३४५६७८९';
    const englishChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const chars = devanagariChars + englishChars;

    const fontSize = isLowPower ? 18 : 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);
    let isVisible = document.visibilityState === 'visible';

    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible';
    };

    document.addEventListener('visibilitychange', handleVisibility);

    const draw = () => {
      if (!isVisible) return;
      // Always full opacity - no fade effect
      ctx.fillStyle = isLowPower ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FF00';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, isLowPower ? 70 : 30);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isLowPower]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ background: '#000000' }}
    />
  );
};

export default MatrixRain;
