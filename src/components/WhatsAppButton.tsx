import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  return (
    <>
      <motion.a
        href="https://wa.me/201002583892?text=Hello!%20I'm%20interested%20in%20a%20design%20consultation%20for%20my%20home."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.171.824-.312.048-.714.088-1.139-.048-.255-.082-.579-.192-1.006-.375-1.815-.778-3.003-2.62-3.093-2.744-.09-.124-.732-.973-.732-1.855 0-.882.463-1.317.627-1.492.164-.176.355-.22.474-.22.119 0 .238 0 .341.006.113.005.263-.043.412.316.149.359.509 1.242.554 1.332.045.09.075.195.015.315-.06.12-.09.195-.181.299-.09.105-.188.233-.269.315-.09.09-.184.188-.079.368.105.18.468.773.999 1.246.685.609 1.264.799 1.444.889.18.09.284.075.389-.045.105-.12.449-.524.568-.704.119-.18.238-.15.4-.09.162.06 1.031.486 1.209.576.178.09.297.135.341.21.045.075.045.435-.099.84zM12.036 0C5.39 0 .021 5.367.021 12.013c0 2.124.555 4.191 1.608 6l-1.608 5.87L6.07 22.25c1.83 1 3.924 1.528 6.042 1.528 6.638 0 11.966-5.328 11.966-12.013C24.078 5.485 18.666 0 12.036 0z"/>
        </svg>
        <span className="pulse"></span>
      </motion.a>

      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 70px;
          height: 70px;
          background-color: #25D366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
          z-index: 1000;
          text-decoration: none;
        }
        .pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #25D366;
          opacity: 0.5;
          z-index: -1;
          animation: greenPulse 2s infinite;
        }
        @keyframes greenPulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @media (max-width: 768px) {
          .whatsapp-float {
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
