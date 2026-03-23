'use client';

import { useState } from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  portalType?: 'school' | 'student' | 'instructor' | 'contact';
}

export const RegistrationModal = ({ isOpen, onClose, portalType = 'school' }: RegistrationModalProps) => {
  const [formData, setFormData] = useState({ email: '', name: '', school: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, portalType });
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ email: '', name: '', school: '' });
    }, 2000);
  };

  const getTitle = () => {
    switch (portalType) {
      case 'student': return 'Student Login';
      case 'instructor': return 'Instructor Portal';
      case 'contact': return 'Contact Us';
      default: return 'Register Your School';
    }
  };

  const getContent = () => {
    if (portalType === 'student') {
      return (
        <div>
          <h3 className="font-display" style={{ fontSize: 'clamp(1.3rem, 5vw, 1.5rem)', marginBottom: '12px', background: 'linear-gradient(135deg, #7B2FFF, #FF3CAC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Welcome, Student</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Enter your school ID to access your personalized platform.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your School ID"
              value={formData.school}
              onChange={(e) => setFormData({ ...formData, school: e.target.value })}
              style={{ width: '100%', padding: '14px 16px', marginBottom: 'clamp(12px, 3vw, 16px)', border: '1px solid rgba(255, 215, 0, 0.2)', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', color: 'white', fontSize: '16px', fontFamily: 'Inter', transition: 'all 0.2s ease', minHeight: '44px', boxSizing: 'border-box' }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(255, 215, 0, 0.4)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 215, 0, 0.2)'}
              required
            />
            <button type="submit" className="btn-primary" style={{ width: '100%', minHeight: '44px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Access Platform</button>
          </form>
        </div>
      );
    }

    if (portalType === 'instructor') {
      return (
        <div>
          <h3 className="font-display" style={{ fontSize: 'clamp(1.3rem, 5vw, 1.5rem)', marginBottom: '12px', background: 'linear-gradient(135deg, #7B2FFF, #FF3CAC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Instructor Portal</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Log in to access your instructor dashboard and student activity lists.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '14px 16px', marginBottom: 'clamp(12px, 3vw, 16px)', border: '1px solid rgba(255, 215, 0, 0.2)', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', color: 'white', fontSize: '16px', fontFamily: 'Inter', transition: 'all 0.2s ease', minHeight: '44px', boxSizing: 'border-box' }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(255, 215, 0, 0.4)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 215, 0, 0.2)'}
              required
            />
            <button type="submit" className="btn-primary" style={{ width: '100%', minHeight: '44px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Log In</button>
          </form>
        </div>
      );
    }

    if (portalType === 'contact') {
      return (
        <div>
          <h3 className="font-display" style={{ fontSize: 'clamp(1.3rem, 5vw, 1.5rem)', marginBottom: '12px', background: 'linear-gradient(135deg, #7B2FFF, #FF3CAC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Contact Us</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Have questions? We'd love to hear from you. Fill out this form and we'll get back to you soon.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: '100%', padding: '14px 16px', marginBottom: 'clamp(12px, 3vw, 16px)', border: '1px solid rgba(255, 215, 0, 0.2)', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', color: 'white', fontSize: '16px', fontFamily: 'Inter', transition: 'all 0.2s ease', minHeight: '44px', boxSizing: 'border-box' }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(255, 215, 0, 0.4)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 215, 0, 0.2)'}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '14px 16px', marginBottom: 'clamp(12px, 3vw, 16px)', border: '1px solid rgba(255, 215, 0, 0.2)', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', color: 'white', fontSize: '16px', fontFamily: 'Inter', transition: 'all 0.2s ease', minHeight: '44px', boxSizing: 'border-box' }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(255, 215, 0, 0.4)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 215, 0, 0.2)'}
              required
            />
            <button type="submit" className="btn-primary" style={{ width: '100%', minHeight: '44px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Send Message</button>
          </form>
        </div>
      );
    }

      // Default: School Registration
      return (
        <div>
          <h3 className="font-display" style={{ fontSize: 'clamp(1.3rem, 5vw, 1.5rem)', marginBottom: '12px', background: 'linear-gradient(135deg, #7B2FFF, #FF6B00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Register Your School</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>It takes just 2 minutes. We'll guide you through the process and verify your school within days.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="School Name"
              value={formData.school}
              onChange={(e) => setFormData({ ...formData, school: e.target.value })}
              style={{ width: '100%', padding: '14px 16px', marginBottom: 'clamp(12px, 3vw, 16px)', border: '1px solid rgba(255, 215, 0, 0.2)', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', color: 'white', fontSize: '16px', fontFamily: 'Inter', transition: 'all 0.2s ease', minHeight: '44px', boxSizing: 'border-box' }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(255, 215, 0, 0.4)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 215, 0, 0.2)'}
              required
            />
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: '100%', padding: '14px 16px', marginBottom: 'clamp(12px, 3vw, 16px)', border: '1px solid rgba(255, 215, 0, 0.2)', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', color: 'white', fontSize: '16px', fontFamily: 'Inter', transition: 'all 0.2s ease', minHeight: '44px', boxSizing: 'border-box' }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(255, 215, 0, 0.4)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 215, 0, 0.2)'}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: '14px 16px', marginBottom: 'clamp(12px, 3vw, 16px)', border: '1px solid rgba(255, 215, 0, 0.2)', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', color: 'white', fontSize: '16px', fontFamily: 'Inter', transition: 'all 0.2s ease', minHeight: '44px', boxSizing: 'border-box' }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(255, 215, 0, 0.4)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 215, 0, 0.2)'}
              required
            />
            <button type="submit" className="btn-primary" style={{ width: '100%', minHeight: '44px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Start Your Journey →</button>
          </form>
        </div>
      );
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(3, 3, 10, 0.8)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: 'clamp(12px, 5vw, 20px)',
        overscrollBehavior: 'contain'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, rgba(12, 12, 29, 0.95), rgba(20, 15, 35, 0.95))',
          borderRadius: '20px',
          padding: 'clamp(24px, 6vw, 40px)',
          maxWidth: '500px',
          width: '100%',
          border: '1px solid rgba(255, 215, 0, 0.15)',
          boxShadow: '0 20px 60px rgba(123, 47, 255, 0.2)',
          animation: 'slideUp 0.3s ease',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        {submitted ? (
          <div style={{ textAlign: 'center', padding: 'clamp(12px, 4vw, 20px) 0' }}>
            <div style={{ fontSize: 'clamp(2.5rem, 15vw, 3.5rem)', marginBottom: '16px', animation: 'bounce 0.6s ease' }}>✓</div>
            <h3 className="font-display" style={{ fontSize: 'clamp(1.1rem, 5vw, 1.3rem)', marginBottom: '8px', background: 'linear-gradient(135deg, #7B2FFF, #FF6B00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Thank You!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>We'll be in touch shortly. Closing...</p>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'clamp(16px, 5vw, 24px)', gap: '12px' }}>
              <h2 className="font-display" style={{ margin: 0, fontSize: 'clamp(1.4rem, 6vw, 1.8rem)', background: 'linear-gradient(135deg, #7B2FFF, #FF6B00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', flex: 1 }}>{getTitle()}</h2>
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(255, 215, 0, 0.1)',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '24px',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  minWidth: '44px',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                ✕
              </button>
            </div>
            {getContent()}
          </>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};
