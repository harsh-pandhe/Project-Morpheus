import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  MapPin,
  Clock,
  Play,
  RotateCcw,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// --- TYPES & CONSTANTS ---
type Coord = [number, number];

const CANVAS_SIZE = 300;
const GRID_SIZE = 15;
const SPEED = 100; // ms
const STORAGE_KEY = "data-snake-high-score";

// --- SUB-COMPONENT: BINARY PARTICLES ---
interface BinaryParticleProps {
  delay: number;
}

const BinaryParticle = ({ delay }: BinaryParticleProps) => {
  const [position] = useState(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${delay}s`,
  }));

  const [bit] = useState(() => (Math.random() > 0.5 ? "1" : "0"));

  return (
    <motion.span
      className="absolute font-mono text-primary/30 text-[10px] float-binary pointer-events-none"
      style={position}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.2, 0.5, 0.2], y: [0, -80] }}
      transition={{ duration: 5, repeat: Infinity, delay, ease: "linear" }}
    >
      {bit}
    </motion.span>
  );
};

// --- SUB-COMPONENT: 8-BIT SNAKE GAME ---
const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [snake, setSnake] = useState<Coord[]>([[5, 5]]);
  const [food, setFood] = useState<Coord>([10, 10]);
  const [direction, setDirection] = useState<Coord>([1, 0]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [highScore, setHighScore] = useState(0);

  // Load high score from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = Number(stored);
      if (!Number.isNaN(parsed)) setHighScore(parsed);
    }
  }, []);

  const getRandomFood = useCallback(
    (currentSnake: Coord[]): Coord => {
      const max = CANVAS_SIZE / GRID_SIZE;
      let newFood: Coord;

      // Avoid spawning on the snake
      do {
        newFood = [
          Math.floor(Math.random() * max),
          Math.floor(Math.random() * max),
        ];
      } while (
        currentSnake.some(([sx, sy]) => sx === newFood[0] && sy === newFood[1])
      );

      return newFood;
    },
    []
  );

  // GAME LOOP
  useEffect(() => {
    if (!isPlaying || isPaused || gameOver) return;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const [headX, headY] = prevSnake[0];
        const [dx, dy] = direction;
        const newHead: Coord = [headX + dx, headY + dy];

        const max = CANVAS_SIZE / GRID_SIZE;

        // Wall / self collision
        const hitWall =
          newHead[0] < 0 ||
          newHead[0] >= max ||
          newHead[1] < 0 ||
          newHead[1] >= max;

        const hitSelf = prevSnake.some(
          ([x, y]) => x === newHead[0] && y === newHead[1]
        );

        if (hitWall || hitSelf) {
          setGameOver(true);
          setIsPlaying(false);

          setHighScore((prevHigh) => {
            const newHigh = Math.max(prevHigh, score);
            if (typeof window !== "undefined") {
              window.localStorage.setItem(STORAGE_KEY, String(newHigh));
            }
            return newHigh;
          });

          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Food collision
        if (newHead[0] === food[0] && newHead[1] === food[1]) {
          setScore((s) => s + 10);
          const nextFood = getRandomFood(newSnake);
          setFood(nextFood);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, SPEED);

    return () => clearInterval(interval);
  }, [isPlaying, isPaused, gameOver, direction, food, score, getRandomFood]);

  // KEYBOARD CONTROLS (DIRECTION + PAUSE/START)
  const handleDirectionChange = useCallback(
    (key: string) => {
      setDirection(([dx, dy]) => {
        switch (key) {
          case "ArrowUp":
            return dy === 0 ? [0, -1] : [dx, dy];
          case "ArrowDown":
            return dy === 0 ? [0, 1] : [dx, dy];
          case "ArrowLeft":
            return dx === 0 ? [-1, 0] : [dx, dy];
          case "ArrowRight":
            return dx === 0 ? [1, 0] : [dx, dy];
          default:
            return [dx, dy];
        }
      });
    },
    []
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const { key } = e;

      // Prevent scroll on arrows while playing
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key) &&
        isPlaying
      ) {
        e.preventDefault();
        handleDirectionChange(key);
      }

      // Space: Start / Pause / Resume
      if (key === " ") {
        e.preventDefault();
        if (!isPlaying && !gameOver) {
          startGame();
        } else if (isPlaying && !gameOver) {
          setIsPaused((p) => !p);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, gameOver, handleDirectionChange]);

  // DRAWING
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // Retro grid
    ctx.strokeStyle = "#003300";
    ctx.lineWidth = 0.5;
    for (let i = 0; i < CANVAS_SIZE; i += GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, CANVAS_SIZE);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(CANVAS_SIZE, i);
      ctx.stroke();
    }

    // Snake
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#00FF00";
    ctx.fillStyle = "#00FF00";
    snake.forEach(([x, y], idx) => {
      const sizeOffset = idx === 0 ? 0 : 1; // tiny difference for head
      ctx.fillRect(
        x * GRID_SIZE + sizeOffset,
        y * GRID_SIZE + sizeOffset,
        GRID_SIZE - sizeOffset * 2,
        GRID_SIZE - sizeOffset * 2
      );
    });

    // Food
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#FF0000";
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(food[0] * GRID_SIZE, food[1] * GRID_SIZE, GRID_SIZE, GRID_SIZE);

    // Reset shadow
    ctx.shadowBlur = 0;
  }, [snake, food]);

  const startGame = useCallback(() => {
    setSnake([[5, 5]]);
    setDirection([1, 0]);
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
    setIsPlaying(true);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-6 border-2 border-primary/30 bg-black/80 rounded-lg relative overflow-hidden group">
      {/* Scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] bg-repeat" />

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          className="border-4 border-primary/50 bg-black rounded shadow-[0_0_20px_rgba(0,255,0,0.25)]"
        />

        {/* Start overlay */}
        {!isPlaying && !gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-primary font-arcade">
            <p className="text-xl mb-4 animate-pulse">PRESS START</p>
            <button
              onClick={startGame}
              className="flex items-center gap-2 px-4 py-2 border-2 border-primary hover:bg-primary hover:text-black transition-colors"
            >
              <Play size={16} /> PLAY
            </button>
            <p className="text-[10px] mt-4 opacity-70">USE ARROW KEYS · SPACE = PAUSE</p>
          </div>
        )}

        {/* Game over overlay */}
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 text-red-500 font-arcade">
            <p className="text-2xl mb-2">GAME OVER</p>
            <p className="text-primary text-sm mb-1">SCORE: {score}</p>
            <p className="text-primary/60 text-[10px] mb-4">
              HIGH SCORE: {String(highScore).padStart(4, "0")}
            </p>
            <button
              onClick={startGame}
              className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-black transition-colors"
            >
              <RotateCcw size={16} /> RETRY
            </button>
          </div>
        )}
      </div>

      {/* Info & Mobile Controls */}
      <div className="flex flex-col items-center gap-4 font-arcade text-primary relative z-20">
        <div className="text-center space-y-2">
          <h3 className="text-lg border-b-2 border-primary/50 pb-2">DATA SNAKE</h3>
          <div className="flex justify-between gap-8 text-sm">
            <div className="text-left">
              <p className="text-primary/60 text-[10px]">SCORE</p>
              <p className="text-xl">{String(score).padStart(4, "0")}</p>
            </div>
            <div className="text-right">
              <p className="text-primary/60 text-[10px]">HIGH SCORE</p>
              <p className="text-xl">{String(highScore).padStart(4, "0")}</p>
            </div>
          </div>
          <p className="text-[10px] text-primary/60 mt-2 max-w-[220px] text-center font-mono leading-tight">
            Collect data packets. Avoid firewall boundaries. Grow the network.
          </p>
        </div>

        {/* D-Pad for Mobile */}
        <div className="grid grid-cols-3 gap-2 mt-4 md:hidden">
          <div />
          <button
            onClick={() => handleDirectionChange("ArrowUp")}
            className="w-12 h-12 bg-primary/20 border border-primary active:bg-primary/50 flex items-center justify-center rounded"
          >
            <ChevronUp />
          </button>
          <div />
          <button
            onClick={() => handleDirectionChange("ArrowLeft")}
            className="w-12 h-12 bg-primary/20 border border-primary active:bg-primary/50 flex items-center justify-center rounded"
          >
            <ChevronLeft />
          </button>
          <div className="w-12 h-12 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-primary/30" />
          </div>
          <button
            onClick={() => handleDirectionChange("ArrowRight")}
            className="w-12 h-12 bg-primary/20 border border-primary active:bg-primary/50 flex items-center justify-center rounded"
          >
            <ChevronRight />
          </button>
          <div />
          <button
            onClick={() => handleDirectionChange("ArrowDown")}
            className="w-12 h-12 bg-primary/20 border border-primary active:bg-primary/50 flex items-center justify-center rounded"
          >
            <ChevronDown />
          </button>
          <div />
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const AboutSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showGame, setShowGame] = useState(false);

  return (
    <section
      id="about"
      className="relative py-32 px-4 overflow-hidden text-white selection:bg-[#00FF00] selection:text-black"
    >
      {/* NOTE: ideally move this font import to your global CSS or _document.tsx */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Roboto:wght@400;700&display=swap');
        .font-arcade { font-family: "Press Start 2P", cursive; }
        .font-mono { font-family: "Roboto", monospace; }
        .text-primary { color: #00FF00; }
        .border-primary { border-color: #00FF00; }
        .bg-primary { background-color: #00FF00; }
        .float-binary {
          pointer-events: none;
          user-select: none;
        }
      `}</style>

      {/* Binary particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <BinaryParticle key={i} delay={i * 0.2} />
        ))}
      </div>

      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 md:p-12 relative border border-[#00FF00]/30 bg-black/60 backdrop-blur-md rounded-xl"
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-xl shadow-[0_0_15px_rgba(0,255,0,0.1)] pointer-events-none" />

          {/* HUD corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary" />

          <div className="relative z-10">
            {/* TEXT CONTENT */}
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="font-arcade text-xl md:text-2xl text-primary text-3d mb-8 tracking-wide"
              >
                {">"} THE MISSION
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <p className="font-mono text-xl md:text-2xl text-primary text-glow leading-relaxed border-l-4 border-primary pl-4">
                  "Wake up. The world you know is a simulation."
                </p>

                <p className="font-mono text-gray-400 leading-relaxed text-sm md:text-base">
                  You&apos;ve been living in a dream world. The comfortable reality you&apos;ve
                  accepted is nothing but a prison for your mind. But there&apos;s a glitch in the
                  system—a doorway to something real.
                </p>

                {/* STATS GRID */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { value: "24", label: "HOURS", icon: Clock, desc: "Non-stop coding" },
                    { value: "5", label: "DOMAINS", icon: MapPin, desc: "Real World Impact" },
                    { value: "2L+", label: "PRIZES", icon: Trophy, desc: "Total Pool" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="text-center p-3 border border-primary/30 bg-black/40 hover:bg-primary/10 transition-colors group cursor-default"
                    >
                      <stat.icon className="w-5 h-5 text-primary mx-auto mb-2 opacity-70 group-hover:opacity-100" />
                      <div className="font-arcade text-xl text-primary text-glow">
                        {stat.value}
                      </div>
                      <div className="font-arcade text-[10px] text-primary mt-1">
                        {stat.label}
                      </div>
                      <p className="mt-2 text-[9px] text-primary/50 font-mono">
                        {stat.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  onClick={() => setShowGame(!showGame)}
                  className="mt-6 px-6 py-2 border-2 border-primary/60 bg-primary/10 hover:bg-primary/20 text-primary font-arcade text-xs transition-all duration-200 hover:border-primary/100"
                >
                  {showGame ? "▼ HIDE GAME" : "▶ ACCESS TERMINAL"}
                </motion.button>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9 }}
                  className="font-mono text-primary/60 text-xs pt-4"
                >
                  {">"} Take the red pill. Enter the Matrix. Build the future.
                  <span className="animate-pulse">_</span>
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* EXPANDABLE GAME SECTION */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={showGame ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-8 relative z-10"
          >
            <div className="border-t-2 border-primary/30 pt-8">
              <div className="absolute -top-6 left-8 font-arcade text-xs text-primary/60 bg-black px-2">
                [SYSTEM_ACCESS_TERMINAL]
              </div>
              <SnakeGame />
              <div className="absolute -bottom-6 right-8 font-arcade text-xs text-primary/60 text-right bg-black px-2">
                V.2.0.26
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
