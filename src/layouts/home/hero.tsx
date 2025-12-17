import { motion, useMotionValue, useSpring, useTransform, MotionValue, type Variants } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';

  interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
  delay: number;
}

interface LogoBoxProps {
  src: string;
  size: string;
}

const HeroLayout = () => {
  const [isMounted, setIsMounted] = useState(false);

  // --- SETUP ANIMASI PARALLAX ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 40, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transformasi posisi berdasarkan gerakan mouse
  const moveX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const moveY = useTransform(smoothY, [-1, 1], [-20, 20]);
  const moveXReverse = useTransform(smoothX, [-1, 1], [20, -20]);
  const moveYReverse = useTransform(smoothY, [-1, 1], [20, -20]);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // --- VARIANTS ANIMASI ---
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F7F7F7] flex items-center justify-center">
      
      {/* Background Blobs (Menggunakan Framer Motion standard agar aman dari error CSS) */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px]" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[100px]" 
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full pt-20 md:pt-0">
        
        {/* === LEFT SIDE: Content === */}
        <motion.div 
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-blue-600 tracking-wider uppercase">
              Kolaborasi, Pengembangan & Inovasi
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Delta <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Team</span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            Wadah kolaboratif profesional Kepala SMK Kabupaten Bogor untuk mencetak generasi vokasi yang unggul, inovatif, dan berdaya saing global.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group">
              Bergabung Sekarang
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 font-semibold rounded-full shadow-sm transition-all">
              Pelajari Lebih Lanjut
            </button>
          </motion.div>

          {/* === REVISI: Powered By Unicode === */}
          <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-3">
            <span className="text-sm text-gray-400 font-medium">Powered by:</span>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
               <img 
                 src="/logos/logo_unicode.png" 
                 alt="Unicode Logo" 
                 className="w-6 h-6 object-contain opacity-80" 
               />
               <span className="text-sm font-bold text-gray-600 tracking-wide">
                 Unicode
               </span>
            </div>
          </motion.div>
        </motion.div>


        {/* === RIGHT SIDE: Visual Composition === */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center mt-10 md:mt-0"
        >
          {/* Main Logo Center */}
          <motion.div 
            style={{ x: moveX, y: moveY }}
            className="relative z-20 w-64 h-64 md:w-80 md:h-80 bg-white rounded-full shadow-2xl flex items-center justify-center p-8 border border-white/50 backdrop-blur-sm"
          >
            {/* Gradient Background inside circle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full opacity-50" />
            
            <img 
              src="/assets/delta.png" 
              alt="Delta Team Logo" 
              className="w-full h-full object-contain relative z-10 drop-shadow-md" 
            />
            
            {/* Glowing Ring Effect */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 rounded-full border border-blue-200/50" 
            />
            <motion.div 
              animate={{ scale: [1.05, 1.1, 1.05], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-8 rounded-full border border-purple-200/30" 
            />
          </motion.div>

          {/* Floating Partner Logos (Satellites) */}
          <FloatingElement x={moveXReverse} y={moveYReverse} className="absolute top-0 right-4 md:right-10" delay={0}>
             <LogoBox src="/logos/institusi/logo-kemdikbud.png" size="w-16 h-16 md:w-20 md:h-20" />
          </FloatingElement>
          
          <FloatingElement x={moveX} y={moveY} className="absolute bottom-4 left-4 md:left-10" delay={1}>
             <LogoBox src="/logos/institusi/logo-vokasi.png" size="w-20 h-20 md:w-24 md:h-24" />
          </FloatingElement>

          <FloatingElement x={moveXReverse} y={moveY} className="absolute top-10 left-0 md:left-4" delay={2}>
             <LogoBox src="/logos/institusi/logo-kotabgr.png" size="w-14 h-14 md:w-16 md:h-16" />
          </FloatingElement>

          <FloatingElement x={moveX} y={moveYReverse} className="absolute bottom-10 right-0 md:right-4" delay={1.5}>
             <LogoBox src="/logos/institusi/logo-smkbisa.png" size="w-16 h-16 md:w-20 md:h-20" />
          </FloatingElement>

        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, y: [0, 10, 0] }} 
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <ChevronDown size={20} />
      </motion.div>

    </section>
  );
};

// --- HELPER COMPONENTS (Didefinisikan di luar main component agar performa lebih baik & rapi) ---

const FloatingElement = ({ children, className, x, y, delay }: FloatingElementProps) => (
  <motion.div 
    style={{ x, y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.5 + (delay * 0.2), type: "spring" }}
    className={className}
  >
    <motion.div
       animate={{ y: [-10, 10, -10] }}
       transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const LogoBox = ({ src, size }: LogoBoxProps) => (
  <div className={`${size} bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center p-3 hover:scale-110 transition-transform duration-300 cursor-pointer`}>
    <img src={src} alt="Partner Logo" className="w-full h-full object-contain" />
  </div>
);

export default HeroLayout;