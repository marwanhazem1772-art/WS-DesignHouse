import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Box, Ruler, ClipboardCheck, Layout, MapPin, Mail } from 'lucide-react';
import kitchenImg from '../assets/kitchen.png';
import bedroomImg from '../assets/bedroom.png';
import entryImg from '../assets/entry.png';

const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: '160px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <span className="text-gold" style={{ letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '30px' }}>
              The Vision
            </span>
            <h2 style={{ fontSize: 'clamp(35px, 4vw, 55px)', marginBottom: '40px' }}>
              Boutique Design for <br/> <span className="text-gold">Sovereign Living</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '40px', lineHeight: '1.8' }}>
              WS DESIGNHOUSE is a premium interior studio specializing in artisanal residential spaces. Based in New Cairo, we bring a global luxury perspective to every Egyptian home.
            </p>
            <div style={{ padding: '30px', borderLeft: '4px solid var(--primary)', background: 'var(--bg-soft)', borderRadius: '0 15px 15px 0' }}>
              <p style={{ fontStyle: 'italic', color: '#333', fontSize: '16px' }}>
                "We don't just design rooms; we curate experiences that define who you are."
              </p>
              <p style={{ marginTop: '15px', fontWeight: 700, fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                — Walid Samir, Lead Architect
              </p>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[
              { label: 'Founded', value: '2026', icon: <Box size={20} /> },
              { label: 'Projects', value: 'Bespoke', icon: <Palette size={20} /> },
              { label: 'Location', value: 'New Cairo', icon: <MapPin size={20} /> },
              { label: 'Focus', value: 'Luxury', icon: <Layout size={20} /> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                style={{ 
                  padding: '40px 30px', 
                  background: 'var(--bg-soft)', 
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                  {stat.icon}
                </div>
                <div style={{ fontSize: '24px', fontWeight: 600, marginBottom: '5px' }}>{stat.value}</div>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Founder: React.FC = () => {
  return (
    <section id="founder" style={{ padding: '160px 0', background: 'var(--bg-soft)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="text-gold" style={{ letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '30px' }}>
              Leadership & Vision
            </span>
            <h2 style={{ fontSize: 'clamp(35px, 5vw, 60px)', marginBottom: '10px' }}>Dr. Wessam Abdellatif</h2>
            <div style={{ color: 'var(--primary)', fontSize: '24px', fontWeight: 300 }}>⸻</div>
          </div>

          <div style={{ columns: '2 350px', columnGap: '80px', orphans: 3, widows: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontSize: '28px', marginBottom: '30px', fontFamily: 'Playfair Display', fontStyle: 'italic' }}>✨ About Me</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: '1.9', marginBottom: '30px' }}>
                I began my professional journey in the late 1990s, working in real estate design—an experience that laid the foundation for my understanding of space, function, and the built environment. In 2000, I pursued an MBA at The American University in Cairo, but soon realized that my true passion lay elsewhere: design.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: '1.9', marginBottom: '30px' }}>
                Following that realization, I transitioned fully into the creative field. My career took me to Canada, where I founded and managed a furniture business while also overseeing operations within a construction company. This hands-on experience gave me a deep, practical understanding of both design execution and project management.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: '1.9', marginBottom: '30px' }}>
                Driven by a desire to refine my craft, I pursued formal education in interior design at Eastern College in Halifax. I then advanced my academic journey in the United Kingdom, earning both a Master’s degree and a PhD from Leeds international college LESL.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: '1.9', marginBottom: '30px' }}>
                Today, I am based in Cairo, where I continue to push the boundaries of interior design. My vision goes beyond aesthetics—I aim to challenge outdated practices, address the limitations within the industry, and introduce a new way of thinking about space, purpose, and human experience.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: '1.9', marginBottom: '50px' }}>
                I believe design has the power not only to transform spaces, but to elevate lifestyles and inspire communities. My mission is to contribute to a more thoughtful, innovative, and inspiring built environment—one that allows society to truly shine.
              </p>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', marginTop: '40px' }}>
                <a 
                  href="https://ibb.co/album/wJtg4r" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '15px' }}
                >
                  Dr. Wessam Abdellatif Certification
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  const services = [
    { title: 'Interior Architecture', desc: 'Space planning and structural redesign for luxury residences.', icon: <Ruler /> },
    { title: 'Bespoke Furniture', desc: 'Custom designed artisanal pieces tailored to your exact taste.', icon: <Palette /> },
    { title: 'Project Management', desc: 'End-to-end execution with meticulous attention to detail.', icon: <ClipboardCheck /> }
  ];

  return (
    <section id="services" style={{ padding: '160px 0', background: 'var(--bg-soft)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <span className="text-gold" style={{ letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '20px' }}>
            Our Expertise
          </span>
          <h2 style={{ fontSize: 'clamp(35px, 4vw, 55px)' }}>Tailored Design Services</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              style={{ 
                padding: '60px 40px', 
                background: '#fff', 
                border: '1px solid var(--border)',
                borderRadius: '4px',
                transition: 'all 0.4s ease',
                boxShadow: 'var(--gold-glow)'
              }}
            >
              <div style={{ color: 'var(--primary)', marginBottom: '30px', transform: 'scale(1.2)' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '15px' }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects: React.FC = () => {
  const projects = [
    { 
      title: 'The Marble Kitchen', 
      cat: 'Kitchen Design', 
      img: kitchenImg,
      id: 'prj1'
    },
    { 
      title: 'Velvet Master Suite', 
      cat: 'Bedroom Architecture', 
      img: bedroomImg,
      id: 'prj2'
    },
    { 
      title: 'Modern Villa Entry', 
      cat: 'Living Area', 
      img: entryImg,
      id: 'prj3'
    }
  ];

  return (
    <section id="projects" style={{ padding: '160px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
          <div>
            <span className="text-gold" style={{ letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '20px' }}>
              Selected Works
            </span>
            <h2 style={{ fontSize: 'clamp(35px, 4vw, 55px)' }}>Portolio Collection</h2>
          </div>
          <p style={{ maxWidth: '400px', fontSize: '15px', color: 'var(--text-muted)', textAlign: 'right' }}>
            A curated selection of residential masterpieces in Egypt.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '15px' }}>
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ position: 'relative', height: '600px', cursor: 'pointer', overflow: 'hidden', border: '1px solid var(--border)' }}
            >
              <img 
                src={p.img} 
                alt={p.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1)' }}
                className="project-img"
              />
              <div 
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to bottom, transparent 40%, rgba(197, 160, 89, 0.2) 70%, rgba(26, 26, 26, 0.9) 100%)',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  transition: 'background 0.5s ease'
                }}
                className="project-overlay"
              >
                <div style={{ transform: 'translateY(10px)', transition: 'transform 0.5s' }} className="project-text">
                  <span style={{ color: 'var(--primary)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '10px', fontWeight: 600, marginBottom: '10px', display: 'block' }}>{p.cat}</span>
                  <h3 style={{ color: '#fff', fontSize: '24px' }}>{p.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .project-img:hover { transform: scale(1.05); }
        .project-overlay:hover { background: linear-gradient(to bottom, transparent 20%, rgba(197, 160, 89, 0.4) 100%); }
        .project-overlay:hover .project-text { transform: translateY(0); }
      `}</style>
    </section>
  );
};

const Process: React.FC = () => {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'Understanding your unique lifestyle and aesthetic requirements.' },
    { num: '02', title: 'Curation', desc: 'Selecting artisanal materials and detailing the architectural vision.' },
    { num: '03', title: 'Creation', desc: 'Meticulous execution and on-site management for a perfect finish.' }
  ];

  return (
    <section id="process" style={{ padding: '160px 0', background: 'var(--bg-soft)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <span className="text-gold" style={{ letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '20px' }}>
            The Journey
          </span>
          <h2 style={{ fontSize: 'clamp(35px, 4vw, 55px)' }}>Our Method</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div style={{ fontSize: '80px', fontWeight: 700, color: 'var(--primary)', opacity: 0.1, position: 'absolute', top: '-40px', left: '-20px', fontFamily: 'Playfair Display' }}>
                {s.num}
              </div>
              <h3 style={{ fontSize: '24px', marginBottom: '20px', position: 'relative' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Kitchen Design',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name.toLowerCase().replace(' ', '')]: value }));
  };

  // Special handling for the select since its label is "Project Type"
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, projectType: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = '201002583892';
    const text = `Hi WS Designhouse! 
    
My name is *${formData.name}*. 
I am inquiring about a *${formData.projectType}* project.
    
*Message:* ${formData.message}
    
*My Email:* ${formData.email}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" style={{ padding: '160px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '100px' }}>
          <div>
            <span className="text-gold" style={{ letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '20px' }}>
              Connect
            </span>
            <h2 style={{ fontSize: 'clamp(35px, 4vw, 55px)', marginBottom: '40px' }}>Start Your Journey</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '60px', maxWidth: '450px' }}>
              Experience the art of artisanal living. Reach out to our design team in New Cairo for a private consultation.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <a 
                href="https://maps.app.goo.gl/3haqnmJGHLdirFZG8" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'flex', gap: '20px', alignItems: 'center', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s' }}
                className="location-link"
              >
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', border: '1px solid var(--border)', transition: 'all 0.3s' }} className="icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '14px' }}>Visit Our Studio</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>New Cairo, Egypt</div>
                </div>
              </a>

              <style>{`
                .location-link:hover .icon-box {
                  background: var(--primary);
                  color: #fff;
                  transform: scale(1.1);
                }
                .location-link:hover {
                  color: var(--primary) !important;
                }
              `}</style>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', border: '1px solid var(--border)' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px' }}>Email Us</div>
                    <a href="mailto:info@wsdesignhouse.com" style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none' }}>info@wsdesignhouse.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', border: '1px solid var(--border)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px' }}>Call Us</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <a href="tel:+201002583892" style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none' }}>01002583892</a>
                      <a href="tel:+201206221243" style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none' }}>01206221243</a>
                      <a href="tel:+20225410567" style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none' }}>0225410567</a>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '30px', paddingBottom: '30px' }}>
                <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5 }}>Digital Presence</span>
                <div style={{ display: 'flex', gap: '25px', marginTop: '20px' }}>
                  <a href="https://www.instagram.com/ws_designhouse?igsh=MWxwdTE2M3Jlb2dyNA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', transition: 'transform 0.3s' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61581374144344&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', transition: 'transform 0.3s' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/dr-wessam-abdellatif-9732a596?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', transition: 'transform 0.3s' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://vt.tiktok.com/ZSH5DMKTB/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', transition: 'transform 0.3s' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ padding: '60px', background: 'var(--bg-soft)', border: '1px solid var(--border)', borderRadius: '4px', boxShadow: 'var(--gold-glow)' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>Name</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text" 
                    required
                    style={{ background: '#fff', border: '1px solid var(--border)', padding: '15px', outline: 'none', width: '100%' }} 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>Email</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email" 
                    required
                    style={{ background: '#fff', border: '1px solid var(--border)', padding: '15px', outline: 'none', width: '100%' }} 
                  />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>Project Type</label>
                <select 
                  value={formData.projectType}
                  onChange={handleSelectChange}
                  style={{ background: '#fff', border: '1px solid var(--border)', padding: '15px', outline: 'none' }}
                >
                  <option>Kitchen Design</option>
                  <option>Bedroom Design</option>
                  <option>Full Villa Interior</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  required
                  style={{ background: '#fff', border: '1px solid var(--border)', padding: '15px', outline: 'none', resize: 'none' }}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>Send Inquiry via WhatsApp</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA: React.FC = () => {
  return (
    <section style={{ padding: '100px 0', background: 'var(--primary)', color: '#fff' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '50px' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 45px)', marginBottom: '15px', color: '#fff' }}>Ready to Elevate Your Space?</h2>
            <p style={{ opacity: 0.9, fontSize: '18px' }}>Call us directly for a private consultation.</p>
          </div>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <a href="tel:+201002583892" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', fontWeight: 600 }}>
              <span style={{ fontSize: '24px' }}>📞</span> 01002583892
            </a>
            <a href="tel:+201206221243" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', fontWeight: 600 }}>
              <span style={{ fontSize: '24px' }}>📞</span> 01206221243
            </a>
            <a href="tel:+20225410567" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', fontWeight: 600 }}>
              <span style={{ fontSize: '24px' }}>☎️</span> 0225410567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About, Founder, Services, Projects, Process, Contact, CTA };

