import React, { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroScene from './HeroScene';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['About', 'Services', 'Projects', 'Contact'];

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
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', color: 'inherit' }}>
          <img src={logo} alt="WS Designhouse" style={{ height: '50px', width: 'auto' }} />
          <div style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '0.2em', cursor: 'pointer', textTransform: 'uppercase' }}>
            WS DESIGNHOUSE<span className="text-gold">.</span>
          </div>
        </a>
        
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <div className="nav-links">
            {navItems.map((item) => (
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
            onClick={() => setIsOpen(true)}
            className="menu-trigger"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)' }}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="mobile-drawer-overlay"
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', zIndex: 1000 }}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="mobile-drawer-menu"
              style={{ 
                position: 'fixed', 
                top: 0, 
                right: 0, 
                bottom: 0, 
                width: 'min(85vw, 400px)', 
                background: '#ffffff', // Solid white
                zIndex: 1001,
                padding: 'clamp(40px, 8vw, 60px)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '-10px 0 50px rgba(0,0,0,0.2)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '60px' }}>
                <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)' }}>
                  <X size={32} />
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {navItems.map((item, i) => (
                  <motion.a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    style={{ 
                      fontSize: 'clamp(24px, 5vw, 32px)', 
                      fontFamily: 'Playfair Display', 
                      textDecoration: 'none', 
                      color: 'var(--text)',
                      fontWeight: 500
                    }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '40px' }}>
                <p style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '20px' }}>Contact Us</p>
                <a href="tel:+201002583892" style={{ display: 'block', fontSize: '18px', textDecoration: 'none', color: 'var(--text)', marginBottom: '10px' }}>01002583892</a>
                <a href="mailto:info@wsdesignhouse.com" style={{ display: 'block', fontSize: '14px', textDecoration: 'none', color: 'var(--text-muted)' }}>info@wsdesignhouse.com</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .nav-links { display: flex; gap: 30px; }
        .menu-trigger { display: none; }

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
        
        .mobile-drawer-overlay, .mobile-drawer-menu {
          display: none !important;
        }

        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .menu-trigger { display: block; }
          .mobile-drawer-overlay, .mobile-drawer-menu { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="gold-gradient-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', borderTop: 'none', overflow: 'hidden' }}>
      <div className="container" style={{ width: '100%', paddingTop: '100px', paddingBottom: '40px' }}>
        <div className="grid-2" style={{ alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ maxWidth: '600px' }}
          >
            <span className="text-gold" style={{ letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '30px' }}>
              Interior Architecture Specialists
            </span>
            <h1 style={{ fontSize: 'clamp(35px, 6vw, 75px)', marginBottom: '40px', fontWeight: 400, color: '#111', lineHeight: '1.1' }}>
              Designing Spaces <br/> That Define <span className="text-gold">Lifestyle</span>
            </h1>
            <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '480px', lineHeight: '1.8' }}>
              From bespoke Kitchens to artisanal Bedrooms. We design in-house spaces in New Cairo that define your lifestyle with luxury and elegance.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">View Collection</a>
              <a href="#contact" className="btn-outline">Start Project</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ width: '100%', minHeight: 'clamp(300px, 50vh, 600px)', position: 'relative' }}>
              <HeroScene />
            </div>
            
            <div style={{ position: 'absolute', bottom: '-20px', left: '0', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.4, whiteSpace: 'nowrap' }}>
              EST. 2026 • NEW CAIRO, EGYPT
            </div>
          </motion.div>

        </div>
      </div>

      <div className="social-sidebar" style={{ position: 'absolute', bottom: '40px', right: '40px', display: 'flex', flexDirection: 'column', gap: '25px', zIndex: 10 }}>
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

      <style>{`
        @media (max-width: 768px) {
          .social-sidebar { display: none; }
          #hero { min-height: auto; padding-top: 80px; }
        }
      `}</style>
    </section>
  );
};

export { Navbar, Hero };
