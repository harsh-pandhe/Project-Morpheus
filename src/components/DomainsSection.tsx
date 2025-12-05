import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { BookOpen, Heart, Shield, Leaf, Coins } from 'lucide-react';

const domains = [
  {
    id: 1,
    name: 'EdTech',
    icon: BookOpen,
    color: 'cyber-blue',
    colorClass: 'text-matrix-blue',
    borderColor: 'border-matrix-blue',
    bgGlow: 'shadow-[0_0_30px_hsl(195,100%,50%,0.3)]',
    description: 'Revolutionize learning through technology. Build solutions that make education accessible, engaging, and effective for all.',
  },
  {
    id: 2,
    name: 'Healthcare',
    icon: Heart,
    color: 'sentinel-red',
    colorClass: 'text-matrix-red',
    borderColor: 'border-matrix-red',
    bgGlow: 'shadow-[0_0_30px_hsl(0,100%,50%,0.3)]',
    description: 'Save lives with code. Create solutions for diagnostics, patient care, mental health, or medical accessibility.',
  },
  {
    id: 3,
    name: 'Women Safety',
    icon: Shield,
    color: 'cyber-pink',
    colorClass: 'text-matrix-pink',
    borderColor: 'border-matrix-pink',
    bgGlow: 'shadow-[0_0_30px_hsl(330,100%,60%,0.3)]',
    description: 'Empower and protect. Build tools that ensure safety, provide support, and create secure environments.',
  },
  {
    id: 4,
    name: 'Agritech',
    icon: Leaf,
    color: 'matrix-green',
    colorClass: 'text-primary',
    borderColor: 'border-primary',
    bgGlow: 'shadow-[0_0_30px_hsl(120,100%,54%,0.3)]',
    description: 'Feed the future. Develop smart farming solutions, supply chain optimization, or sustainable agriculture tech.',
  },
  {
    id: 5,
    name: 'Fintech',
    icon: Coins,
    color: 'cyber-gold',
    colorClass: 'text-matrix-gold',
    borderColor: 'border-matrix-gold',
    bgGlow: 'shadow-[0_0_30px_hsl(45,100%,50%,0.3)]',
    description: 'Democratize finance. Create solutions for payments, investments, financial literacy, or inclusive banking.',
  },
];

const DomainCard = ({ domain, index }: { domain: typeof domains[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = domain.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      className={`
        relative group cursor-pointer
        bg-card/80 backdrop-blur-sm
        border-2 ${domain.borderColor}/50
        p-6 transition-all duration-300
        ${isHovered ? `${domain.bgGlow} ${domain.borderColor}` : ''}
      `}
    >
      {/* HUD Corners */}
      <div className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 ${domain.borderColor} transition-all duration-300 ${isHovered ? 'w-6 h-6' : ''}`} />
      <div className={`absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 ${domain.borderColor} transition-all duration-300 ${isHovered ? 'w-6 h-6' : ''}`} />
      <div className={`absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 ${domain.borderColor} transition-all duration-300 ${isHovered ? 'w-6 h-6' : ''}`} />
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 ${domain.borderColor} transition-all duration-300 ${isHovered ? 'w-6 h-6' : ''}`} />

      {/* Level indicator */}
      <div className="font-mono text-xs text-muted-foreground mb-4">
        LEVEL {String(domain.id).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div className={`${domain.colorClass} mb-4 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
        <Icon size={40} className={isHovered ? 'text-glow' : ''} />
      </div>

      {/* Name */}
      <h3 className={`font-arcade text-sm ${domain.colorClass} mb-3`}>
        {domain.name}
      </h3>

      {/* Description - revealed on hover */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isHovered ? 'auto' : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">
          {domain.description}
        </p>
      </motion.div>

      {/* Static text when not hovered */}
      {!isHovered && (
        <p className="font-mono text-xs text-muted-foreground">
          {'>'} HOVER TO DECRYPT
        </p>
      )}

      {/* Glitch overlay */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute inset-0 ${domain.colorClass} opacity-5`} />
        </div>
      )}
    </motion.div>
  );
};

const DomainsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="domains" className="relative py-32 px-4" ref={ref}>
      {/* Background Box */}
      <div className="absolute inset-0 mx-4 my-16 border-2 border-primary/30 bg-black/40 backdrop-blur-sm rounded-lg pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-muted-foreground mb-4 tracking-widest">
            {'>'} SELECT YOUR PATH
          </p>
          <h2 className="font-arcade text-2xl md:text-3xl text-primary">
            THE 5 LEVELS
          </h2>
          <p className="font-mono text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose your domain. Master your reality. Each level presents unique 
            challenges to hack the simulation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.slice(0, 3).map((domain, index) => (
            <DomainCard key={domain.id} domain={domain} index={index} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {domains.slice(3).map((domain, index) => (
            <DomainCard key={domain.id} domain={domain} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
