import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import heroImage from '../assets/hero_painting.png';

const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position normalized to [-1, 1]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs
  const rotateX = useSpring(useTransform(y, [-1, 1], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-1, 1], [-10, 10]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) / (rect.width / 2));
    y.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%', 
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1200px',
        zIndex: 1
      }}
    >
      <motion.div
        style={{
          width: '90%',
          height: '100%',
          position: 'relative',
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          boxShadow: '0 40px 100px rgba(0,0,0,0.12), 0 15px 35px rgba(197, 160, 89, 0.1)',
        }}
      >
        {/* The Frame Backdrop - Gold Border */}
        <div style={{
          position: 'absolute',
          inset: '-15px',
          background: 'var(--primary)',
          opacity: 0.1,
          border: '1px solid var(--primary)',
          zIndex: 0,
        }} />

        {/* The Frame Backdrop - White Border Padding */}
        <div style={{
          position: 'absolute',
          inset: '-8px',
          background: '#fff',
          zIndex: 1,
        }} />
        
        {/* The Image Container */}
        <div style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          background: '#fff',
          zIndex: 2,
          border: '1px solid var(--border)'
        }}>
          <img 
            src={heroImage} 
            alt="Luxury Interior Painting" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover'
            }} 
          />
        </div>

        {/* Decorative Gold Elements */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '60px',
          height: '60px',
          borderTop: '2px solid var(--primary)',
          borderRight: '2px solid var(--primary)',
          zIndex: 5,
          transform: 'translateZ(30px)'
        }} />

        <div style={{
          position: 'absolute',
          bottom: '-20px',
          left: '-20px',
          width: '60px',
          height: '60px',
          borderBottom: '2px solid var(--primary)',
          borderLeft: '2px solid var(--primary)',
          zIndex: 5,
          transform: 'translateZ(30px)'
        }} />
      </motion.div>

      {/* Floating Gold Tag */}
      <motion.div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          padding: '12px 24px',
          background: 'var(--primary)',
          color: '#fff',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          zIndex: 10,
          boxShadow: '0 10px 25px rgba(197, 160, 89, 0.3)',
          transform: 'translateZ(60px)'
        }}
      >
        Cairo Boutique
      </motion.div>
    </div>
  );
};

export default HeroScene;
