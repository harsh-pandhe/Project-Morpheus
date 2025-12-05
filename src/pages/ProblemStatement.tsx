import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Code, Database, Smartphone, Globe, Brain, ChevronRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Problem statement data structure
const domains = [
  {
    id: 1,
    name: "EdTech",
    icon: Globe,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
    problems: [
      { id: "ED001", title: "Adaptive Learning Engine", description: "Build an AI-powered platform that adapts to individual student learning speeds and styles. The system should analyze student performance in real-time, identify weak areas, and automatically adjust content difficulty. Include dashboards for teachers showing class-wide analytics and personalized intervention recommendations." },
      { id: "ED002", title: "Vernacular Education Accessibility", description: "Create a browser extension or mobile app that auto-translates educational content (YouTube videos, articles, textbooks) into regional Indian languages (Hindi, Marathi, Gujarati, Tamil, Telugu). Include text-to-speech capabilities and subtitle generation for video content." },
      { id: "ED003", title: "Peer-to-Peer Tutoring Marketplace", description: "Develop a platform connecting college students with school students for affordable peer tutoring. Include video call integration, session scheduling, payment gateway, rating system, and subject-wise matching algorithms." },
      { id: "ED004", title: "Smart Assessment & Anti-Cheating System", description: "Build an online exam platform with AI-powered proctoring that detects suspicious behavior (tab switching, multiple faces, unusual eye movement). Include auto-grading for MCQs and subjective answers using NLP, and generate instant performance reports." },
      { id: "ED005", title: "Gamified STEM Learning for Kids", description: "Create an interactive game that teaches coding, math, or physics concepts through puzzles and challenges. Include progress tracking, rewards system, multiplayer mode, and parent dashboards showing learning analytics." },
      { id: "ED006", title: "Virtual Science Lab Simulator", description: "Develop a web-based platform where students can perform physics, chemistry, and biology experiments virtually. Include realistic simulations (chemical reactions, circuit building, dissections), safety-free environment, and step-by-step guided tutorials." },
      { id: "ED007", title: "AI-Powered Doubt Clearing Chatbot", description: "Build an intelligent chatbot that answers student doubts in real-time across subjects (Math, Science, History). Use OCR to accept handwritten questions via photo upload. Include step-by-step solution explanations and related concept recommendations." },
      { id: "ED008", title: "Learning Disability Support Tool", description: "Create an assistive app for students with dyslexia, ADHD, or visual impairments. Include text-to-speech, customizable fonts, color-coded reading, focus timers, and audio-based learning modules." },
      { id: "ED009", title: "Career Guidance & Skill Gap Analyzer", description: "Build a platform that analyzes a student's academic performance, interests, and skills to suggest career paths. Include skill gap analysis comparing student profile vs. industry requirements, and recommend free/paid courses to bridge gaps." },
      { id: "ED010", title: "Classroom Engagement Analytics", description: "Develop a system using webcam-based emotion recognition to track student engagement during online classes. Generate heatmaps showing attention levels over time, alert teachers when engagement drops, and suggest interactive activities." }
    ]
  },
  {
    id: 2,
    name: "Healthcare",
    icon: Smartphone,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/30",
    problems: [
      { id: "HC001", title: "Rural Telemedicine Platform", description: "Create a comprehensive telemedicine app connecting rural patients with urban doctors via video consultations. Include e-prescription generation, local pharmacy integration for medicine delivery, appointment scheduling, and medical history storage." },
      { id: "HC002", title: "Mental Health Crisis Chatbot", description: "Build an AI-powered mental health companion that provides 24/7 support through chat. Include mood tracking, crisis detection algorithms that alert professionals, breathing exercises, journaling features, and anonymous counselor connectivity." },
      { id: "HC003", title: "IoT-Based Vital Signs Monitor", description: "Develop a wearable IoT device system that continuously tracks heart rate, blood pressure, SpO2, and temperature. Send real-time alerts to patients and doctors when vitals exceed safe thresholds. Include cloud dashboard showing historical trends." },
      { id: "HC004", title: "Medicine Reminder & Adherence Tracker", description: "Create a mobile app that sends medication reminders, tracks adherence, alerts family members if doses are missed, integrates with pharmacy for refill reminders, and provides pill identification via image recognition." },
      { id: "HC005", title: "Hospital Bed & Ambulance Availability Tracker", description: "Build a real-time dashboard showing availability of ICU/general beds, ventilators, and ambulances across hospitals in a city. Include emergency booking system, navigation to nearest hospital, and critical resource alerts." },
      { id: "HC006", title: "AI-Powered Symptom Checker & Diagnosis Assistant", description: "Develop an intelligent system where users input symptoms and receive probable diagnoses with severity ratings. Include doctor referral recommendations, nearby clinic suggestions, and first-aid instructions for common conditions." },
      { id: "HC007", title: "Maternal & Child Health Tracker", description: "Create an app for pregnant women tracking pregnancy milestones, vaccination schedules for mother and child, nutrition recommendations, nearby maternity center locator, and emergency helpline integration." },
      { id: "HC008", title: "Medical Records Blockchain System", description: "Build a decentralized platform for storing and sharing medical records securely using blockchain. Patients control access permissions, doctors can view authorized records instantly, and emergency responders get critical information via QR code." },
      { id: "HC009", title: "Elderly Fall Detection & Alert System", description: "Develop a wearable device or smartphone app that detects falls using accelerometer data and automatically alerts emergency contacts with GPS location. Include false alarm cancellation feature and integration with ambulance services." },
      { id: "HC010", title: "Multilingual Health Awareness Chatbot", description: "Create a WhatsApp/Telegram bot that provides health information, disease prevention tips, and myth-busting in regional languages. Include vaccine reminders, government health scheme information, and nearest health center locator." }
    ]
  },
  {
    id: 3,
    name: "Women Safety",
    icon: Brain,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/30",
    problems: [
      { id: "WS001", title: "Silent Emergency SOS System", description: "Build a mobile app with one-touch silent SOS that sends live location, audio recording, and alerts to pre-saved emergency contacts and nearby registered volunteers. Include shake-to-activate and power-button trigger features." },
      { id: "WS002", title: "Safe Route Navigation", description: "Develop a navigation app that suggests safest routes based on crowdsourced safety ratings, street lighting data, police station proximity, and historical crime data. Include real-time alerts about unsafe zones." },
      { id: "WS003", title: "Harassment Documentation & Legal Support Platform", description: "Create a secure platform where women can document harassment incidents with timestamps, photos, audio, and witness details. Include lawyer consultation booking, legal resource library, and anonymous police complaint filing." },
      { id: "WS004", title: "Community Safety Network", description: "Build a hyperlocal safety app connecting women in neighborhoods. Include features like 'walking buddy' requests, live location sharing with time-bound access, community alert broadcasts, and verified volunteer network." },
      { id: "WS005", title: "Fake Call & Distress Simulator", description: "Develop an app that simulates incoming calls/messages from police or family when a woman feels unsafe. Include customizable caller ID, realistic conversation audio, and automatic SOS trigger if app isn't deactivated within time limit." },
      { id: "WS006", title: "Women's Health & Hygiene Tracker", description: "Create a comprehensive app tracking menstrual cycles, fertility windows, period symptoms, and nearby gynecologists. Include anonymous forum for health discussions, PCOS/PCOD management tips, and emergency contraception locator." },
      { id: "WS007", title: "Self-Defense Training Gamification", description: "Build a mobile game that teaches self-defense techniques through AR simulations and interactive tutorials. Include certification upon completion, nearby self-defense class locator, and emergency technique quick-reference cards." },
      { id: "WS008", title: "Employment & Entrepreneurship Platform for Women", description: "Develop a job portal specifically for women featuring work-from-home opportunities, female-friendly workplaces, entrepreneurship grants, skill training courses, and mentorship matching with successful businesswomen." },
      { id: "WS009", title: "Public Transport Safety Companion", description: "Create an app that tracks women's journeys in buses/trains/cabs with automatic check-in/check-out. Include driver/vehicle verification, live journey tracking shared with emergency contacts, and in-app panic button alerting transport authorities." },
      { id: "WS010", title: "Anonymous Reporting Platform for Workplace Harassment", description: "Build a secure web platform where women can anonymously report workplace harassment. Include encrypted submissions, HR dashboard for complaint management, pattern detection algorithms flagging repeat offenders, and legal guidance resources." }
    ]
  },
  {
    id: 4,
    name: "Agritech",
    icon: Database,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/30",
    problems: [
      { id: "AG001", title: "IoT Soil Health Monitoring System", description: "Develop an IoT device that measures soil moisture, pH, nitrogen, phosphorus, and potassium levels. Provide mobile app showing real-time data, historical trends, and AI-driven fertilizer/irrigation recommendations specific to crop type." },
      { id: "AG002", title: "Farm-to-Consumer Direct Marketplace", description: "Create a platform connecting farmers directly to consumers, restaurants, and retailers without middlemen. Include bulk order management, delivery logistics integration, quality certification, transparent pricing, and farmer payment tracking." },
      { id: "AG003", title: "Weather-Integrated Crop Advisory System", description: "Build a mobile app providing daily farming advice based on real-time weather forecasts (rainfall, temperature, humidity). Include alerts for extreme weather, optimal planting/harvesting dates, pest outbreak warnings, and regional crop calendars." },
      { id: "AG004", title: "Crop Disease Detection Using AI", description: "Develop a mobile app where farmers can upload photos of diseased leaves/crops and receive instant AI-powered diagnosis. Include treatment recommendations, nearby agri-store locator for pesticides, and preventive measures for future outbreaks." },
      { id: "AG005", title: "Livestock Health Monitoring System", description: "Create an IoT-enabled collar for cattle that tracks health metrics (temperature, heart rate, movement patterns). Detect early signs of illness, send alerts to farmers, track vaccination schedules, and provide nearest veterinarian contact." },
      { id: "AG006", title: "Agricultural Loan & Subsidy Navigator", description: "Build a platform aggregating all government agricultural schemes, loans, and subsidies. Include eligibility checker, application assistance, document upload, status tracking, and connection to Kisan Credit Card services." },
      { id: "AG007", title: "Smart Irrigation Automation", description: "Develop an IoT system that automatically controls water pumps based on soil moisture levels, weather forecasts, and crop water requirements. Include mobile app for manual override, water usage analytics, and cost savings reports." },
      { id: "AG008", title: "Drone-Based Crop Surveillance & Spraying", description: "Create a drone control system for aerial crop monitoring, pest detection via computer vision, and precision pesticide spraying. Include flight path planning software, image analysis dashboard, and spray optimization algorithms." },
      { id: "AG009", title: "Farmers' Knowledge Sharing Community", description: "Build a social platform (app/web) where farmers can share best practices, ask questions, post success stories, and learn from agricultural experts through video tutorials. Include regional language support and voice-based content." },
      { id: "AG010", title: "Yield Prediction & Market Price Forecasting", description: "Develop an ML-powered system predicting crop yields based on historical data, weather patterns, and soil conditions. Include market price forecasting for next 3 months, optimal selling time recommendations, and mandi price comparisons." }
    ]
  },
  {
    id: 5,
    name: "Fintech",
    icon: Eye,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/30",
    problems: [
      { id: "FT001", title: "Blockchain-Based Microfinance Platform", description: "Build a decentralized lending platform connecting lenders with unbanked borrowers. Use blockchain for transparent loan tracking, smart contracts for automatic repayment, Aadhaar-based KYC, and peer-to-peer lending features." },
      { id: "FT002", title: "Gamified Financial Literacy App", description: "Create a mobile game teaching financial concepts (budgeting, compound interest, insurance, mutual funds, credit scores) through interactive modules and quizzes. Include progress tracking, rewards, and personalized financial health assessment." },
      { id: "FT003", title: "USSD-Based Digital Payments for Feature Phones", description: "Develop a USSD (SMS-based) payment system enabling digital transactions on basic feature phones without internet. Include P2P transfers, bill payments, mobile recharge, and merchant payments using *XXX# codes." },
      { id: "FT004", title: "Invoice Financing for MSMEs", description: "Build a platform where small businesses can upload unpaid invoices and receive instant working capital (70-80% of invoice value). Integrate with GST portal for invoice verification, credit scoring, and lender marketplace." },
      { id: "FT005", title: "Personal Finance Manager with AI Insights", description: "Create an app that aggregates bank accounts, credit cards, and investments in one dashboard. Use AI to categorize expenses, suggest savings opportunities, predict monthly spending, and alert about unusual transactions." },
      { id: "FT006", title: "Pension & Retirement Planning Calculator", description: "Develop a tool that calculates required retirement corpus based on current age, expenses, inflation, life expectancy, and goals. Include investment recommendations (PPF, NPS, Mutual Funds), goal tracking, and annual review reminders." },
      { id: "FT007", title: "Credit Score Improvement Tracker", description: "Build an app that tracks credit score changes monthly (via CIBIL/Experian APIs), explains factors affecting score, recommends actionable steps to improve (EMI payment, credit utilization), and tracks progress toward financial goals." },
      { id: "FT008", title: "Group Savings & Chit Fund Digitization", description: "Create a digital platform for traditional chit funds and group savings schemes. Include automated auction management, transparent fund tracking, blockchain-based record keeping, and automated payout calculations." },
      { id: "FT009", title: "Gig Worker Payment & Benefits Platform", description: "Build a fintech solution for gig workers (delivery partners, drivers, freelancers) providing instant daily payouts, micro-insurance, emergency loans, expense tracking, and tax filing assistance. Include integration with ride-sharing/delivery platforms." },
      { id: "FT010", title: "Expense Splitting & Group Bill Management", description: "Develop an app for friends/roommates to split bills, track shared expenses, settle debts automatically via UPI, and maintain transparent group spending records. Include trip expense management and IOUs with reminders." }
    ]
  }
];

const ProblemStatement = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [activeDomain, setActiveDomain] = useState(1);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      {/* Matrix rain background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm mb-6"
          >
            <ArrowLeft size={16} />
            Back to Matrix
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-arcade text-3xl md:text-5xl text-center text-primary mb-4"
          >
            PROBLEM STATEMENTS
          </motion.h1>
          <p className="text-center font-mono text-muted-foreground text-lg">
            Choose your domain. Select your challenge. Build the future.
          </p>
        </div>

        {/* Domain Selection */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {domains.map((domain) => {
            const IconComponent = domain.icon;
            return (
              <motion.button
                key={domain.id}
                onClick={() => setActiveDomain(domain.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-4 border-2 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                  activeDomain === domain.id
                    ? `${domain.borderColor} ${domain.bgColor} ${domain.color}`
                    : 'border-primary/30 bg-black/40 text-muted-foreground hover:border-primary/50'
                }`}
              >
                <IconComponent size={20} />
                <span className="font-mono text-sm font-bold">{domain.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Problem Statements Table */}
        <motion.div
          key={activeDomain}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card border-2 border-primary/30 bg-black/60 backdrop-blur-lg rounded-lg overflow-hidden"
        >
          {domains
            .filter(domain => domain.id === activeDomain)
            .map(domain => (
              <div key={domain.id}>
                <div className={`p-6 border-b-2 ${domain.borderColor} ${domain.bgColor}`}>
                  <div className="flex items-center gap-3">
                    <domain.icon className={`w-6 h-6 ${domain.color}`} />
                    <h2 className={`font-arcade text-2xl ${domain.color}`}>
                      {domain.name.toUpperCase()}
                    </h2>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground mt-2">
                    {domain.problems.length} challenges available
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-primary/20">
                        <th className="text-left p-4 font-mono text-primary text-sm">ID</th>
                        <th className="text-left p-4 font-mono text-primary text-sm">PROBLEM STATEMENT</th>
                        <th className="text-left p-4 font-mono text-primary text-sm">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {domain.problems.map((problem, index) => (
                        <motion.tr
                          key={problem.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-primary/10 hover:bg-primary/5 transition-colors group"
                        >
                          <td className="p-4 font-mono text-sm text-secondary">
                            {problem.id}
                          </td>
                          <td className="p-4 font-mono text-sm text-white group-hover:text-primary transition-colors">
                            {problem.title}
                          </td>
                          <td className="p-4">
                            <motion.button
                              onClick={() => setSelectedProblem(problem)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-4 py-2 border border-primary/40 text-primary hover:bg-primary/10 rounded transition-colors font-mono text-xs"
                            >
                              <Eye size={14} />
                              VIEW
                              <ChevronRight size={14} />
                            </motion.button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProblem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-card border-2 border-primary/50 bg-black/90 backdrop-blur-lg rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-arcade text-xl text-primary mb-2">
                      {selectedProblem.id}
                    </h3>
                    <h4 className="font-mono text-lg text-white">
                      {selectedProblem.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => setSelectedProblem(null)}
                    className="text-secondary hover:text-secondary/80 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-mono text-sm text-primary mb-2">DESCRIPTION:</h5>
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                      {selectedProblem.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="border border-primary/20 p-3 bg-black/40 rounded">
                      <p className="font-mono text-xs text-primary/60">DIFFICULTY</p>
                      <p className="font-arcade text-sm text-secondary">ADVANCED</p>
                    </div>
                    <div className="border border-primary/20 p-3 bg-black/40 rounded">
                      <p className="font-mono text-xs text-primary/60">DURATION</p>
                      <p className="font-arcade text-sm text-primary">24 HOURS</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProblemStatement;