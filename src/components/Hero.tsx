import React, { useState } from 'react';
import { Menu, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroScene from './HeroScene';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: 'var(--header-height)', 
      display: 'flex', 
      alignItems: 'center', 
      zIndex: 100,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '0.25em', cursor: 'pointer', textTransform: 'uppercase' }}>
          WS DESIGNHOUSE<span className="text-gold">.</span>
        </div>
        
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <div className="nav-links" style={{ display: 'flex', gap: '30px' }}>
            {['About', 'Services', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ 
                textDecoration: 'none', 
                color: 'var(--text)', 
                fontSize: '11px', 
                fontWeight: 600, 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em',
                position: 'relative',
                paddingBottom: '5px'
              }}
              className="nav-item"
              >
                {item}
              </a>
            ))}
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', display: 'none' }}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <style>{`
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--primary);
          transition: width 0.3s ease;
        }
        .nav-item:hover::after {
          width: 100%;
        }
        @media (max-width: 1024px) {
          .nav-links { display: none; }
          button { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'var(--bg)', borderTop: 'none' }}>
      <div className="container" style={{ width: '100%', paddingTop: '100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ maxWidth: '600px' }}
          >
            <span className="text-gold" style={{ letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '30px' }}>
              Interior Architecture Specialists
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 6vw, 75px)', marginBottom: '40px', fontWeight: 400, color: '#111' }}>
              Designing Spaces <br/> That Define <span className="text-gold">Lifestyle</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '50px', maxWidth: '480px', lineHeight: '1.8' }}>
              From bespoke Kitchens to artisanal Bedrooms. We design in-house spaces in New Cairo that define your lifestyle with luxury and elegance.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#projects" className="btn-primary">View Collection</a>
              <a href="#contact" className="btn-outline">Start Project</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ position: 'relative', height: '100%', display: 'flex', justifyContent: 'center' }}
          >
            {/* The HeroScene is now used as a floating frame here */}
            <div style={{ width: '100%', minHeight: '600px', position: 'relative' }}>
              <HeroScene />
            </div>
            
            {/* Location floating text inside the hero grid to keep it balanced */}
            <div style={{ position: 'absolute', bottom: '-40px', left: '0', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.4 }}>
              EST. 2026 • NEW CAIRO, EGYPT
            </div>
          </motion.div>

        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '40px', right: '40px', display: 'flex', flexDirection: 'column', gap: '25px', zIndex: 10 }}>
        <a href="https://wa.me/201002583892?text=Hello!%20I'm%20interested%20in%20a%20design%20consultation." target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', opacity: 0.6, transition: 'all 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}>
          <MessageCircle size={20} />
        </a>
        <a href="https://www.instagram.com/ws_designhouse?igsh=MWxwdTE2M3Jlb2dyNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', opacity: 0.6, transition: 'all 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61581374144344&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', opacity: 0.6, transition: 'all 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/dr-wessam-abdellatif-9732a596?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', opacity: 0.6, transition: 'all 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a href="https://vt.tiktok.com/ZSH5DMKTB/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', opacity: 0.6, transition: 'all 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export { Navbar, Hero };
