'use client';

import { useEffect, useState } from 'react';

export const NavBar = ({ onRegisterClick }: { onRegisterClick?: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(3, 3, 10, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.07)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Sthitpragya" style={{ height: '50px', width: 'auto' }} />
        </div>
        
        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="nav-desktop">
          <a href="#method" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'Inter' }}>Our Method</a>
          <a href="#platform" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'Inter' }}>Platform</a>
          <a href="#schools" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'Inter' }}>For Schools</a>
          <a href="#stats" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'Inter' }}>Results</a>
          <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'Inter' }}>Contact</a>
        </div>
        <button onClick={onRegisterClick} className="btn-primary nav-desktop" style={{ fontSize: '0.9rem', padding: '12px 24px', whiteSpace: 'nowrap' }}>Register Your School →</button>
        
        {/* Mobile Menu Button */}
        <button 
          className="nav-mobile"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          display: 'none',
          flexDirection: 'column',
          gap: '12px',
          padding: '20px',
          background: 'rgba(3, 3, 10, 0.95)',
          borderTop: '1px solid rgba(255, 255, 255, 0.07)',
          animation: 'slideDown 0.3s ease'
        }} className="nav-mobile-menu">
          <a href="#method" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '10px 0', fontFamily: 'Inter' }}>Our Method</a>
          <a href="#platform" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '10px 0', fontFamily: 'Inter' }}>Platform</a>
          <a href="#schools" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '10px 0', fontFamily: 'Inter' }}>For Schools</a>
          <a href="#stats" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '10px 0', fontFamily: 'Inter' }}>Results</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '10px 0', fontFamily: 'Inter' }}>Contact</a>
          <button onClick={() => {
            onRegisterClick?.();
            setMobileMenuOpen(false);
          }} className="btn-primary" style={{ fontSize: '0.9rem', padding: '12px 24px', width: '100%', marginTop: '12px' }}>Register Your School →</button>
        </div>
      )}
    </nav>
  );
};
