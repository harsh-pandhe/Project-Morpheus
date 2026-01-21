import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, Phone, Linkedin, Crown, Code, Palette, Megaphone, Calendar, FileText, Package, Heart, FlaskConical, Users, Zap, Shield, Cpu, Wifi, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

// Team member data
interface TeamMember {
  id: string;
  name: string;
  designation: string;
  phone: string;
  email: string;
  linkedin: string;
  category: 'leadership' | 'heads' | 'coordinators' | 'board';
  codename: string;
}

const teamMembers: TeamMember[] = [
  { id: '1', name: 'Sairaj Kulat', designation: 'President', phone: '8459958405', email: 'kulatsairaj469@gmail.com', linkedin: 'https://linkedin.com/in/sairaj-kulat', category: 'leadership', codename: 'NEO' },
  { id: '2', name: 'Suyog Mapari', designation: 'President', phone: '8767569791', email: 'maparisuyog@gmail.com', linkedin: 'https://www.linkedin.com/in/suyog-mapari-a9572031b', category: 'leadership', codename: 'TANK' },
  { id: '3', name: 'Khushi Ghule', designation: 'Vice President', phone: '7020294516', email: 'khushighule37@gmail.com', linkedin: 'https://linkedin.com/in/khushi-ghule', category: 'leadership', codename: 'TRINITY' },
  { id: '4', name: 'Bhumika Gade', designation: 'Convener', phone: '8390492006', email: 'gadebhumika460@gmail.com', linkedin: 'https://www.linkedin.com/in/bhumika-gade-79068b32a', category: 'leadership', codename: 'NIOBE' }, 
  { id: '5', name: 'Pranav Wadatkar', designation: 'Convener', phone: '8421056447', email: 'pranavwadatkar785@gmail.com', linkedin: 'https://linkedin.com/in/pranav-wadatkar', category: 'leadership', codename: 'ORACLE' },
  { id: '19', name: 'Harsh Pandhe', designation: 'Event Lead & Organizer', phone: '7208783332', email: 'harshpandhehome@gmail.com', linkedin: 'https://www.linkedin.com/in/harsh-pandhe-853a9121a/', category: 'leadership', codename: 'ARCHITECT' },
  { id: '20', name: 'Dr. Rajesh Kumar', designation: 'Board Member', phone: '9876543210', email: 'rajesh.kumar@university.edu', linkedin: 'https://linkedin.com/in/rajesh-kumar', category: 'board', codename: 'SAGE' },
  { id: '21', name: 'Prof. Priya Sharma', designation: 'Board Member', phone: '9876543211', email: 'priya.sharma@university.edu', linkedin: 'https://linkedin.com/in/priya-sharma', category: 'board', codename: 'VISION' },
  { id: '22', name: 'Mr. Amit Patel', designation: 'Board Member', phone: '9876543212', email: 'amit.patel@industry.com', linkedin: 'https://linkedin.com/in/amit-patel', category: 'board', codename: 'PIONEER' },
  { id: '23', name: 'Dr. Sunita Rao', designation: 'Board Member', phone: '9876543213', email: 'sunita.rao@university.edu', linkedin: 'https://linkedin.com/in/sunita-rao', category: 'board', codename: 'INNOVATOR' },
  { id: '24', name: 'Mr. Vikram Singh', designation: 'Board Member', phone: '9876543214', email: 'vikram.singh@techcorp.com', linkedin: 'https://linkedin.com/in/vikram-singh', category: 'board', codename: 'STRATEGIST' },
  { id: '6', name: 'Tushar Bhandare', designation: 'Web Development Head', phone: '9373513273', email: 'hackingbro780@gmail.com', linkedin: 'https://www.linkedin.com/in/tushar-bhandare-000334283', category: 'heads', codename: 'CIPHER' },
  { id: '7', name: 'Aryan Raj', designation: 'Technical Head', phone: '6203728310', email: 'rajaryan6203@gmail.com', linkedin: 'https://www.linkedin.com/in/aryan-raj-504385370', category: 'heads', codename: 'MORPHEUS' },
  { id: '8', name: 'Aniket Raj', designation: 'R&D Head', phone: '9693698429', email: 'aniketraj5404@gmail.com', linkedin: 'https://www.linkedin.com/in/aniket-raj-a0a065364', category: 'heads', codename: 'DOZER' },
  { id: '9', name: 'Om Dongre', designation: 'Research & Development Head', phone: '9579519820', email: 'dongreom996@gmail.com', linkedin: 'https://www.linkedin.com/in/om-dongre-4366b1341', category: 'heads', codename: 'LINK' },
  { id: '10', name: 'Anant Hejib', designation: 'PR & Marketing Head', phone: '8007579894', email: 'ananthejib28@gmail.com', linkedin: 'https://www.linkedin.com/in/anant-hejib-b277a82a2', category: 'heads', codename: 'GHOST' },
  { id: '11', name: 'Pushkar Pagar', designation: 'D&C Head', phone: '9657180502', email: 'pushkarpagar10@gmail.com', linkedin: 'https://www.linkedin.com/in/pushkar-pagar10', category: 'heads', codename: 'SERAPH' },
  { id: '12', name: 'Aditya Jangam', designation: 'Design & Creativity Head', phone: '7410544823', email: 'adityajangam221206@gmail.com', linkedin: 'https://www.linkedin.com/in/aditya-jangam-1164a932a', category: 'heads', codename: 'KEYMAKER' },
  { id: '13', name: 'Srushti Dhabale', designation: 'Event Management', phone: '7058361775', email: 'dhabalesrushti4@gmail.com', linkedin: 'https://linkedin.com/in/srushti-dhabale', category: 'coordinators', codename: 'ZEE' },
  { id: '14', name: 'Sourabh Kadam', designation: 'Event Management Head', phone: '7249404530', email: 'kadamsourabh79@gmail.com', linkedin: 'https://www.linkedin.com/in/kadam-sourabh-554a0a3a2', category: 'coordinators', codename: 'SPARKS' },
  { id: '16', name: 'Samruddhi Deshmukh', designation: 'Hospitality Team Head', phone: '9096860827', email: 'deshmukhsamruddhi938@gmail.com', linkedin: 'https://www.linkedin.com/in/samruddhi-deshmukh-1b1a18319', category: 'coordinators', codename: 'SWITCH' },
  { id: '17', name: 'Shantanu Dubbewar', designation: 'Logistics Head', phone: '9503232911', email: 'shantanudubbewar@gmail.com', linkedin: 'https://www.linkedin.com/in/shantanu-dubbewar-74851b341', category: 'heads', codename: 'MOUSE' },
  { id: '18', name: 'Hariom Shukla', designation: 'Documentation Head', phone: '8810868287', email: 'shuklahariom081@gmail.com', linkedin: 'https://www.linkedin.com/in/hariom-shukla-a09b31335', category: 'coordinators', codename: 'LOCK' },
];

// Department icon display
const DepartmentIcon = ({ designation, color, isHovered }: { designation: string; color: string; isHovered: boolean }) => {
  const Icon = getDesignationIcon(designation);
  
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated background circles */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div 
          className="absolute w-24 h-24 rounded-full border opacity-20"
          style={{ borderColor: color }}
        />
        <div 
          className="absolute w-20 h-20 rounded-full border opacity-30"
          style={{ borderColor: color }}
        />
        <div 
          className="absolute w-16 h-16 rounded-full border opacity-40"
          style={{ borderColor: color }}
        />
      </motion.div>

      {/* Hex pattern background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='${encodeURIComponent(color)}' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute rounded-full blur-xl"
        style={{ 
          width: '60%', 
          height: '60%', 
          background: color,
          opacity: isHovered ? 0.3 : 0.1,
        }}
        animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Main icon */}
      <motion.div
        className="relative z-10 p-4 rounded-2xl"
        style={{ 
          background: `${color}15`,
          border: `2px solid ${color}40`,
          boxShadow: isHovered ? `0 0 30px ${color}40` : 'none',
        }}
        animate={isHovered ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        <Icon size={40} style={{ color }} strokeWidth={1.5} />
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2" style={{ borderColor: `${color}50` }} />
      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2" style={{ borderColor: `${color}50` }} />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2" style={{ borderColor: `${color}50` }} />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2" style={{ borderColor: `${color}50` }} />

      {/* Scan line */}
      {isHovered && (
        <motion.div
          className="absolute left-0 right-0 h-1 rounded"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
          animate={{ top: ['10%', '90%', '10%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </div>
  );
};

// Get icon for designation
const getDesignationIcon = (designation: string) => {
  const lower = designation.toLowerCase();
  if (lower.includes('president') || lower.includes('convener')) return Crown;
  if (lower.includes('web') || lower.includes('tech')) return Code;
  if (lower.includes('design') || lower.includes('d&c')) return Palette;
  if (lower.includes('marketing') || lower.includes('social') || lower.includes('pr')) return Megaphone;
  if (lower.includes('event')) return Calendar;
  if (lower.includes('document')) return FileText;
  if (lower.includes('logistics')) return Package;
  if (lower.includes('hospitality')) return Heart;
  if (lower.includes('r&d') || lower.includes('research')) return FlaskConical;
  return Users;
};

// Founder Card - Special card for the website creator and lead organizer
const FounderCard = ({ member }: { member: TeamMember }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const color = { primary: '#ff6b35', secondary: '#f7931e', glow: 'rgba(255,107,53,0.6)' };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative mx-auto w-full sm:max-w-lg px-4"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        className="relative rounded-3xl overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? `rotateY(${(mousePos.x - 0.5) * 20}deg) rotateX(${(0.5 - mousePos.y) * 20}deg) scale(1.02)` 
            : 'none',
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      >
        {/* Enhanced holographic shimmer effect */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, 
                ${color.primary}30 0%, 
                ${color.primary}15 30%, 
                transparent 70%
              ),
              linear-gradient(
                ${45 + mousePos.x * 90}deg,
                transparent 10%,
                ${color.primary}25 35%,
                ${color.primary}40 50%,
                ${color.primary}25 65%,
                transparent 90%
              )
            `,
            opacity: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent, ${color.primary}40, transparent)`,
            opacity: isHovered ? 0.6 : 0.3,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        {/* Card background */}
        <div 
          className="relative z-10 border-3 rounded-3xl overflow-hidden backdrop-blur-xl"
          style={{
            background: `linear-gradient(145deg, rgba(0,0,0,0.98) 0%, rgba(20,10,0,0.95) 50%, rgba(0,0,0,0.98) 100%)`,
            borderColor: isHovered ? color.primary : `${color.primary}60`,
            boxShadow: isHovered 
              ? `0 0 80px ${color.glow}, 0 0 160px ${color.glow}40, inset 0 0 100px ${color.primary}10` 
              : `0 0 40px ${color.glow}60, inset 0 0 60px ${color.primary}05`,
          }}
        >
          {/* Top status bar - FOUNDER */}
          <div 
            className="flex items-center justify-between px-3 py-2 sm:px-8 sm:py-4 border-b-2"
            style={{ borderColor: `${color.primary}50`, background: `${color.primary}15` }}
          >
            <div className="flex items-center gap-4">
              <motion.div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color.primary }}
                animate={{ 
                  opacity: [1, 0.3, 1], 
                  scale: [1, 1.2, 1],
                  boxShadow: [`0 0 10px ${color.primary}`, `0 0 20px ${color.primary}`, `0 0 10px ${color.primary}`]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm sm:text-lg font-mono font-black tracking-wider" style={{ color: color.primary }}>
               LEAD ORGANIZER
              </span>
            </div>
            <div 
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-mono font-bold tracking-wider border"
              style={{ 
                background: `${color.primary}20`, 
                color: color.primary,
                borderColor: `${color.primary}40`
              }}
            >
              {member.codename}
            </div>
          </div>

          {/* Enhanced department icon section */}
            <div className="relative p-3 sm:p-10">
            <div 
              className="relative w-28 h-28 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden border-4"
              style={{ 
                background: `radial-gradient(circle, ${color.primary}10 0%, transparent 70%)`,
                borderColor: `${color.primary}30`
              }}
            >
              <DepartmentIcon 
                designation={member.designation}
                color={color.primary}
                isHovered={isHovered}
              />
              
              {/* Inner glow ring */}
              <motion.div
                className="absolute inset-4 rounded-full border-2"
                style={{ borderColor: `${color.primary}40` }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </div>

          {/* Enhanced info section */}
          <div className="px-2 sm:px-10 pb-8 text-center">
            <motion.h3
              className="font-black text-lg sm:text-3xl mb-3 tracking-wide break-words"
              style={{ color: isHovered ? color.primary : 'white' }}
            >
              {member.name}
            </motion.h3>
            <p className="text-sm sm:text-base text-gray-300 font-mono mb-4 sm:mb-6 font-semibold">{member.designation}</p>

            {/* Enhanced stats row */}
            <div 
              className="flex items-center justify-center gap-4 sm:gap-8 py-4 rounded-2xl mb-6 border-2"
              style={{ 
                background: `${color.primary}08`, 
                borderColor: `${color.primary}20`
              }}
            >
              <div className="flex items-center gap-3">
                <Crown size={18} style={{ color: color.primary }} />
                <span className="hidden sm:inline text-sm font-mono text-gray-300 font-bold">LEAD</span>
              </div>
              <div className="w-px h-8 bg-gray-600" />
              <div className="flex items-center gap-3">
                <Code size={18} style={{ color: color.primary }} />
                <span className="hidden sm:inline text-sm font-mono text-gray-300 font-bold">DEVELOPER</span>
              </div>
              <div className="w-px h-8 bg-gray-600" />
              <div className="flex items-center gap-3">
                <Zap size={18} style={{ color: color.primary }} />
                <span className="hidden sm:inline text-sm font-mono text-gray-300 font-bold">VISIONARY</span>
              </div>
            </div>

            {/* Enhanced contact buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              {[
                { href: `mailto:${member.email}`, icon: Mail, label: 'Email' },
                { href: `tel:${member.phone}`, icon: Phone, label: 'Call' },
                { href: member.linkedin, icon: Linkedin, label: 'LinkedIn', external: true },
              ].map(({ href, icon: ContactIcon, label, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex-1 flex items-center justify-center gap-3 py-2 sm:py-4 rounded-2xl transition-all border-2"
                  style={{ 
                    background: `${color.primary}10`,
                    borderColor: `${color.primary}30`,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    background: `${color.primary}25`,
                    borderColor: `${color.primary}50`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ContactIcon size={16} style={{ color: color.primary }} />
                  <span className="text-sm font-mono font-bold" style={{ color: color.primary }}>
                    {label.toUpperCase()}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Enhanced bottom decoration */}
          <div 
            className="h-2 sm:h-3"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${color.primary}80, ${color.primary}, ${color.primary}80, transparent)`,
              boxShadow: `0 0 16px ${color.primary}30`,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Big Coordinator Card
const CoordinatorCard = ({ member }: { member: TeamMember }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const color = { primary: '#fbbf24', secondary: '#f59e0b', glow: 'rgba(251,191,36,0.5)' };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, type: 'spring' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative mx-auto w-full sm:max-w-md"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative rounded-3xl overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? `rotateY(${(mousePos.x - 0.5) * 15}deg) rotateX(${(0.5 - mousePos.y) * 15}deg)` 
            : 'none',
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Holographic shimmer effect */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: `
              linear-gradient(
                ${45 + mousePos.x * 90}deg,
                transparent 20%,
                ${color.primary}20 40%,
                ${color.primary}35 50%,
                ${color.primary}20 60%,
                transparent 80%
              )
            `,
            opacity: isHovered ? 1 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Card background */}
        <div 
          className="relative z-10 border-2 rounded-3xl overflow-hidden backdrop-blur-xl"
          style={{
            background: `linear-gradient(145deg, rgba(0,0,0,0.95) 0%, rgba(10,10,20,0.95) 100%)`,
            borderColor: isHovered ? color.primary : `${color.primary}50`,
            boxShadow: isHovered ? `0 0 60px ${color.glow}, inset 0 0 80px ${color.primary}15` : `0 0 30px ${color.glow}`,
          }}
        >
          {/* Top status bar */}
          <div 
            className="flex items-center justify-between px-6 py-3 border-b"
            style={{ borderColor: `${color.primary}40`, background: `${color.primary}10` }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color.primary }}
                animate={{ opacity: [1, 0.4, 1], scale: [1, 0.9, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm font-mono font-bold" style={{ color: color.primary }}>
                COORDINATOR
              </span>
            </div>
            <div 
              className="px-3 py-1 rounded text-xs font-mono font-bold tracking-wider"
              style={{ background: `${color.primary}25`, color: color.primary }}
            >
              {member.codename}
            </div>
          </div>

          {/* Department icon section */}
          <div className="relative p-6 sm:p-8">
            <div 
              className="relative w-28 h-28 sm:w-40 sm:h-40 mx-auto rounded-3xl overflow-hidden"
              style={{ background: `${color.primary}08` }}
            >
              <DepartmentIcon 
                designation={member.designation}
                color={color.primary}
                isHovered={isHovered}
              />
            </div>
          </div>

          {/* Info section */}
          <div className="px-6 sm:px-8 pb-6 text-center">
            <motion.h3
              className="font-bold text-xl sm:text-2xl mb-2 tracking-wide"
              style={{ color: isHovered ? color.primary : 'white' }}
            >
              {member.name}
            </motion.h3>
            <p className="text-sm text-gray-400 font-mono mb-6">{member.designation}</p>

            {/* Stats row */}
            <div 
              className="flex items-center justify-center gap-6 py-4 rounded-2xl mb-6"
              style={{ background: `${color.primary}10`, border: `1px solid ${color.primary}25` }}
            >
              <div className="flex items-center gap-2">
                <Crown size={16} style={{ color: color.primary }} />
                <span className="text-xs font-mono text-gray-400">LEADER</span>
              </div>
              <div className="w-px h-6 bg-gray-700" />
              <div className="flex items-center gap-2">
                <Zap size={16} style={{ color: color.primary }} />
                <span className="text-xs font-mono text-gray-400">ACTIVE</span>
              </div>
              <div className="w-px h-6 bg-gray-700" />
              <div className="flex items-center gap-2">
                <Shield size={16} style={{ color: color.primary }} />
                <span className="text-xs font-mono text-gray-400">SECURE</span>
              </div>
            </div>

            {/* Contact buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {[
                { href: `mailto:${member.email}`, icon: Mail, label: 'Email' },
                { href: `tel:${member.phone}`, icon: Phone, label: 'Call' },
                { href: member.linkedin, icon: Linkedin, label: 'LinkedIn', external: true },
              ].map(({ href, icon: ContactIcon, label, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all"
                  style={{ 
                    background: `${color.primary}12`,
                    border: `1px solid ${color.primary}35`,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    background: `${color.primary}30`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ContactIcon size={16} style={{ color: color.primary }} />
                  <span className="text-xs font-mono hidden sm:inline" style={{ color: color.primary }}>
                    {label.toUpperCase()}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom decoration */}
          <div 
            className="h-2"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${color.primary}, transparent)`,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Premium holographic card
const HoloCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const colors = {
    leadership: { primary: '#fbbf24', secondary: '#f59e0b', glow: 'rgba(251,191,36,0.5)' },
    heads: { primary: '#22c55e', secondary: '#16a34a', glow: 'rgba(34,197,94,0.5)' },
    coordinators: { primary: '#06b6d4', secondary: '#0891b2', glow: 'rgba(6,182,212,0.5)' },
    board: { primary: '#8b5cf6', secondary: '#7c3aed', glow: 'rgba(139,92,246,0.5)' },
  };
  
  const color = colors[member.category];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.6, type: 'spring' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative w-full"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? `rotateY(${(mousePos.x - 0.5) * 10}deg) rotateX(${(0.5 - mousePos.y) * 10}deg)` 
            : 'none',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Holographic shimmer effect */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: `
              linear-gradient(
                ${45 + mousePos.x * 90}deg,
                transparent 20%,
                ${color.primary}15 40%,
                ${color.primary}25 50%,
                ${color.primary}15 60%,
                transparent 80%
              )
            `,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Card background */}
        <div 
          className="relative z-10 border-2 rounded-2xl overflow-hidden backdrop-blur-xl"
          style={{
            background: `linear-gradient(145deg, rgba(0,0,0,0.95) 0%, rgba(10,10,20,0.95) 100%)`,
            borderColor: isHovered ? color.primary : `${color.primary}40`,
            boxShadow: isHovered ? `0 0 40px ${color.glow}, inset 0 0 60px ${color.primary}10` : 'none',
          }}
        >
          {/* Top status bar */}
          <div 
            className="flex items-center justify-between px-4 py-2 border-b"
            style={{ borderColor: `${color.primary}30`, background: `${color.primary}08` }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color.primary }}
                animate={{ opacity: [1, 0.4, 1], scale: [1, 0.9, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-[10px] font-mono" style={{ color: color.primary }}>
                ACTIVE
              </span>
            </div>
            <div 
              className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider"
              style={{ background: `${color.primary}20`, color: color.primary }}
            >
              {member.codename}
            </div>
          </div>

          {/* Department icon section */}
          <div className="relative p-5">
            <div 
              className="relative w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-2xl overflow-hidden"
              style={{ background: `${color.primary}05` }}
            >
              <DepartmentIcon 
                designation={member.designation}
                color={color.primary}
                isHovered={isHovered}
              />
            </div>
          </div>

          {/* Info section */}
          <div className="px-4 sm:px-5 pb-4 text-center">
            <motion.h3
              className="font-bold text-sm sm:text-lg mb-1 tracking-wide"
              style={{ color: isHovered ? color.primary : 'white' }}
            >
              {member.name}
            </motion.h3>
            <p className="text-xs text-gray-400 font-mono mb-4">{member.designation}</p>

            {/* Stats row */}
            <div 
              className="flex items-center justify-center gap-4 py-3 rounded-xl mb-4"
              style={{ background: `${color.primary}08`, border: `1px solid ${color.primary}20` }}
            >
              <div className="flex items-center gap-1.5">
                <Cpu size={12} style={{ color: color.primary }} />
                <span className="text-[10px] font-mono text-gray-400">SYS.OK</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-1.5">
                <Wifi size={12} style={{ color: color.primary }} />
                <span className="text-[10px] font-mono text-gray-400">LINKED</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-1.5">
                <Shield size={12} style={{ color: color.primary }} />
                <span className="text-[10px] font-mono text-gray-400">SECURE</span>
              </div>
            </div>

            {/* Contact buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              {[
                { href: `mailto:${member.email}`, icon: Mail, label: 'Email' },
                { href: `tel:${member.phone}`, icon: Phone, label: 'Call' },
                { href: member.linkedin, icon: Linkedin, label: 'LinkedIn', external: true },
              ].map(({ href, icon: ContactIcon, label, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all"
                  style={{ 
                    background: `${color.primary}10`,
                    border: `1px solid ${color.primary}30`,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    background: `${color.primary}25`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ContactIcon size={14} style={{ color: color.primary }} />
                  <span className="text-[10px] font-mono hidden sm:inline" style={{ color: color.primary }}>
                    {label.toUpperCase()}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom decoration */}
          <div 
            className="h-1"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${color.primary}, transparent)`,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Background matrix effect
const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = 'MORPHEUS01アイウエオカキクケコ';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1).map(() => Math.random() * -100);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Gradient color based on position
        const hue = 120 + (i % 30);
        ctx.fillStyle = `hsla(${hue}, 100%, 50%, ${0.15 + Math.random() * 0.1})`;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }
    };

    const interval = setInterval(draw, 60);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-60"
    />
  );
};

// Section component
const TeamSection = ({ 
  title, 
  subtitle, 
  members, 
  color, 
  icon: Icon 
}: { 
  title: string; 
  subtitle: string; 
  members: TeamMember[]; 
  color: string;
  icon: React.ElementType;
}) => (
  <section className="py-16 sm:py-24 px-4 relative z-10">
    <div className="max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <motion.div
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-6"
          style={{ background: `${color}15`, border: `1px solid ${color}40` }}
          whileHover={{ scale: 1.05 }}
        >
          <Icon size={18} style={{ color }} />
          <span className="font-mono text-sm tracking-widest" style={{ color }}>
            {subtitle.toUpperCase()}
          </span>
        </motion.div>
        
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4"
          style={{ 
            color,
            textShadow: `0 0 40px ${color}60`,
          }}
        >
          {title}
        </h2>
        
        <div 
          className="w-24 h-1 mx-auto rounded-full"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        />
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <HoloCard key={member.id} member={member} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Main component
const Committees = () => {
  const leadership = teamMembers.filter(m => m.category === 'leadership');
  const heads = teamMembers.filter(m => m.category === 'heads');
  const coordinators = teamMembers.filter(m => m.category === 'coordinators');
  const boardMembers = teamMembers.filter(m => m.category === 'board');
  
  // Coordinator - Harsh Pandhe is the main coordinator
  const mainCoordinator = teamMembers.find(m => m.name === 'Harsh Pandhe')!;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <MatrixBackground />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-green-500/20">
            <Link to="/" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-all group">
              <motion.div whileHover={{ x: -4 }}>
                <ArrowLeft size={18} />
              </motion.div>
              <span className="font-mono text-sm hidden sm:inline">EXIT_MATRIX</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Eye size={16} className="text-green-400" />
              </motion.div>
              <span className="font-mono text-sm text-green-400">{teamMembers.length} OPERATORS</span>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 z-10 overflow-hidden">
        {/* Animated grid background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            className="w-[800px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.05) 40%, transparent 70%)',
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <motion.div 
              className="inline-flex items-center gap-4 px-8 py-4 rounded-full border backdrop-blur-md"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(20,20,30,0.8) 100%)',
                borderColor: 'rgba(34,197,94,0.5)',
              }}
              animate={{ 
                boxShadow: [
                  '0 0 30px rgba(34,197,94,0.3), inset 0 0 30px rgba(34,197,94,0.05)',
                  '0 0 60px rgba(34,197,94,0.5), inset 0 0 40px rgba(34,197,94,0.1)',
                  '0 0 30px rgba(34,197,94,0.3), inset 0 0 30px rgba(34,197,94,0.05)'
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-green-400 font-mono text-sm tracking-widest">SYSTEM ONLINE</span>
              </div>
              <div className="w-px h-6 bg-green-500/30" />
              <span className="font-mono text-sm text-gray-400 tracking-wider">MANIFEST v2.026</span>
            </motion.div>
          </motion.div>

          {/* Main title container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative mb-8"
          >
            {/* THE - smaller text above */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-4"
            >
              <span 
                className="text-3xl sm:text-4xl md:text-5xl font-mono tracking-[0.5em] text-gray-400"
                style={{ textShadow: '0 0 30px rgba(34,197,94,0.4)' }}
              >
                THE
              </span>
            </motion.div>

            {/* CREW - massive text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 100 }}
              className="relative flex items-center justify-center"
            >
              {/* Main text with 3D effect */}
              <h1 
                className="relative font-black leading-none text-center"
                style={{ 
                  fontSize: 'clamp(4rem, 12vw, 12rem)',
                  color: '#4ade80',
                  letterSpacing: '0.05em',
                  textShadow: `
                    1px 1px 0px #22c55e,
                    2px 2px 0px #16a34a,
                    3px 3px 0px #15803d,
                    4px 4px 0px #14532d,
                    5px 5px 0px #052e16,
                    6px 6px 15px rgba(0,0,0,0.5),
                    0 0 40px rgba(74,222,128,0.5),
                    0 0 80px rgba(34,197,94,0.3)
                  `,
                }}
              >
                CREW
              </h1>
            </motion.div>

            {/* Decorative underline */}
            <motion.div
              className="flex items-center justify-center gap-6 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div 
                className="h-px w-32 sm:w-48"
                style={{ background: 'linear-gradient(90deg, transparent, #22c55e)' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              />
              <motion.div
                className="w-4 h-4 rotate-45 border-2 border-green-500 bg-green-500/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{ delay: 1.4, type: 'spring' }}
              />
              <motion.div 
                className="h-px w-32 sm:w-48"
                style={{ background: 'linear-gradient(90deg, #22c55e, transparent)' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              />
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              Meet the <span className="text-green-400 font-medium">operators</span> who keep 
              <br className="hidden sm:block" /> Project Morpheus running
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead Event Coordinator/Organizer Section */}
      <section className="py-16 sm:py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-6"
              style={{ background: '#ff6b3515', border: '1px solid #ff6b3540' }}
              whileHover={{ scale: 1.05 }}
            >
              <Crown size={18} style={{ color: '#ff6b35' }} />
              <span className="font-mono text-sm tracking-widest" style={{ color: '#ff6b35' }}>
                LEAD ORGANIZER
              </span>
            </motion.div>
            
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4"
              style={{ 
                color: '#ff6b35',
                textShadow: '0 0 40px #ff6b3560',
              }}
            >
              EVENT COORDINATOR
            </h2>
            
            <div 
              className="w-24 h-1 mx-auto rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #ff6b35, transparent)' }}
            />
          </motion.div>

          {/* Founder Card - Special for Harsh Pandhe */}
          <div className="mb-12">
            <FounderCard member={mainCoordinator} />
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-16 sm:py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-6"
              style={{ background: '#8b5cf615', border: '1px solid #8b5cf640' }}
              whileHover={{ scale: 1.05 }}
            >
              <Users size={18} style={{ color: '#8b5cf6' }} />
              <span className="font-mono text-sm tracking-widest" style={{ color: '#8b5cf6' }}>
                ADVISORY BOARD
              </span>
            </motion.div>
            
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4"
              style={{ 
                color: '#8b5cf6',
                textShadow: '0 0 40px #8b5cf660',
              }}
            >
              ADVISORY BOARD MEMBERS
            </h2>
            
            <div 
              className="w-24 h-1 mx-auto rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #8b5cf6, transparent)' }}
            />
          </motion.div>

          {/* Board Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <HoloCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <TeamSection
        title="LEADERSHIP"
        subtitle="The architects"
        members={leadership.filter(m => m.id !== mainCoordinator.id)}
        color="#fbbf24"
        icon={Crown}
      />

      {/* Coordinators Section */}
      <TeamSection
        title="COORDINATORS"
        subtitle="The backbone"
        members={coordinators}
        color="#06b6d4"
        icon={Users}
      />

      {/* Department Heads Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/5 via-green-900/10 to-green-900/5" />
        <TeamSection
          title="DEPARTMENT HEADS"
          subtitle="Domain masters"
          members={heads}
          color="#22c55e"
          icon={Code}
        />
      </div>

      {/* CTA */}
      <section className="py-20 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="p-8 rounded-3xl bg-black/60 border border-green-500/30 backdrop-blur-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Join the <span className="text-green-400">Resistance</span>
            </h2>
            <p className="text-gray-400 font-mono text-sm mb-6">
              We're always looking for exceptional operators.
            </p>
            <motion.a
              href="mailto:support@projectmorpheus.in"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-mono font-bold bg-green-500 text-black hover:bg-green-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={18} />
              INITIATE CONTACT
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-green-500/10 relative z-10">
        <p className="text-center font-mono text-sm text-gray-600">
          PROJECT MORPHEUS © 2026 • <span className="text-green-500">SYSTEM OPERATIONAL</span>
        </p>
      </footer>
    </div>
  );
};

export default Committees;
