import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import { Navbar, Hero } from './components/Hero';
import { About, Founder, Services, Projects, Process, Contact, CTA } from './components/Sections';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        {/* Simple sequential layout - Hero now manages its own internal split columns */}
        <Hero />
        <About />
        <Founder />
        <Services />
        <Projects />
        <Process />
        <Contact />
        <CTA />
      </main>
      
      <WhatsAppButton />

      <footer style={{ padding: '80px 0', background: 'var(--bg-soft)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
            <div style={{ opacity: 0.5, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
              <p>© 2026 WS DESIGNHOUSE. Crafting Luxury Interiors.</p>
            </div>
            
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <a href="https://www.instagram.com/ws_designhouse?igsh=MWxwdTE2M3Jlb2dyNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', opacity: 0.6, transition: 'opacity 0.3s' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61581374144344&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', opacity: 0.6, transition: 'opacity 0.3s' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/dr-wessam-abdellatif-9732a596?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', opacity: 0.6, transition: 'opacity 0.3s' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://vt.tiktok.com/ZSH5DMKTB/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', opacity: 0.6, transition: 'opacity 0.3s' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                  </svg>
                </a>
                <a href="mailto:info@wsdesignhouse.com" style={{ color: 'var(--text)', opacity: 0.6, transition: 'opacity 0.3s' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
              <div style={{ display: 'flex', gap: '30px', opacity: 0.5, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </SmoothScroll>
  );
};

export default App;
