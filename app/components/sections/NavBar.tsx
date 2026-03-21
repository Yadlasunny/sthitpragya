'use client';

import { useEffect, useState } from 'react';

export const NavBar = () => {
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
        <div>
          <h2 className="font-display gradient-text-gold-saffron" style={{ margin: 0, fontSize: 'clamp(18px, 5vw, 24px)' }}>Sthitpragya</h2>
          <div style={{ fontSize: '8px', color: 'var(--gradient-4)', textAlign: 'center' }}>स्थितप्रज्ञ</div>
        </div>
        
        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="nav-desktop">
          <a href="#method" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Our Method</a>
          <a href="#platform" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Platform</a>
          <a href="#schools" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>For Schools</a>
          <a href="#stats" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Results</a>
          <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Contact</a>
        </div>
        <button className="btn-primary nav-desktop" style={{ fontSize: '0.9rem', padding: '12px 24px', whiteSpace: 'nowrap' }}>Register Your School →</button>
        
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
          <a href="#method" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '10px 0' }}>Our Method</a>
          <a href="#platform" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '10px 0' }}>Platform</a>
          <a href="#schools" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '10px 0' }}>For Schools</a>
          <a href="#stats" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '10px 0' }}>Results</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '10px 0' }}>Contact</a>
          <button className="btn-primary" style={{ fontSize: '0.9rem', padding: '12px 24px', width: '100%', marginTop: '12px' }}>Register Your School →</button>
        </div>
      )}
    </nav>
  );
};
