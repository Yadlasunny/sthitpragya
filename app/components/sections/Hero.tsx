export const Hero = ({ onRegisterClick }: { onRegisterClick?: () => void }) => {
  return (
    <section style={{ minHeight: '100vh', background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
      <div style={{ position: 'absolute', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(123, 47, 255, 0.3) 0%, transparent 70%)', top: '-300px', left: '-200px' }}></div>
      <div style={{ position: 'absolute', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255, 107, 0, 0.2) 0%, transparent 70%)', top: '100px', right: '-300px' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        

        <h1 className="font-display animate-fade-up stagger-1" style={{ fontSize: 'clamp(1.8rem, 8vw, 4rem)', marginBottom: '24px', lineHeight: 1.1 }}>
          <span style={{ display: 'block' }}>Your Students</span>
          <span style={{ display: 'block' }}>Were Born</span>
          <span className="gradient-text-violet-pink" style={{ display: 'block' }}>Unstoppable.</span>
        </h1>

        <p className="animate-fade-up stagger-2" style={{ fontSize: 'clamp(0.9rem, 4vw, 1.2rem)', maxWidth: '600px', marginBottom: '40px', color: 'var(--text-secondary)', lineHeight: 1.6, fontFamily: 'Inter' }}>
          <span className="gradient-text-gold-saffron font-display">Sthitpragya</span> — meaning "stable in wisdom" — is our mission and your students' destination. We combine in-school instructor programs with an AI-powered platform to build students who are emotionally grounded, physically strong, and mentally free.
        </p>

        <div className="animate-fade-up stagger-3" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '60px', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'stretch' }}>
          <button className="btn-primary" onClick={onRegisterClick} style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>Register Your School — It's Free →</button>
          <button className="btn-secondary" onClick={() => {
            const methodSection = document.getElementById('method');
            methodSection?.scrollIntoView({ behavior: 'smooth' });
          }} style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>Discover the Method ↓</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginBottom: '40px', fontSize: 'clamp(0.8rem, 3vw, 0.95rem)', fontFamily: 'Inter' }}>
          <div style={{ textAlign: 'center' }}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" style={{marginRight: '4px'}}><path fill="currentColor" d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312"/></svg> 50+ Schools</div>
          <div style={{ textAlign: 'center' }}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4l.11-.94L5 5.5L12 2l7 3.5v5h-1V6l-2.11 1.06zm-4 6c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg> 10,000+ Students</div>
          <div style={{ textAlign: 'center' }}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" style={{marginRight: '4px'}}><path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> 20+ Activities</div>
          <div style={{ textAlign: 'center' }}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 512 512"><path fill="currentColor" d="M463 20.3L315.6 75.65L368.5 109C274 228 137.3 301.3 21.8 329.2l32.72 59.6C184.3 346.5 321.7 270.2 410.2 135.4l40.3 25.4zm7.7 116.7l-4.8 54.8l-51.3-32.4c-1.8 2.7-3.7 5.3-5.6 8V487h78V137zM320.1 265c-12.7 11-25.8 21.4-39.1 31.2V487h78V265zm-123.7 84c-14.4 7.6-28.8 14.6-43.4 21.2V487h78V349zM25 393v94h78v-94h-5.68c-14.82 5.5-29.63 10.6-44.35 15.3l-7.06 2.2l-9.6-17.5z"/></svg> Monthly Reports</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px', maxWidth: '600px' }}>
          <div className="card animate-floating" style={{ padding: '20px', animationDelay: '０s' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '8px', fontFamily: 'Inter' }}>Progress</div>
            <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '30px' }}>
              <div style={{ width: '10px', height: '15px', background: 'linear-gradient(to top, #FFD700, transparent)', borderRadius: '2px' }}></div>
              <div style={{ width: '10px', height: '22px', background: 'linear-gradient(to top, #FF6B00, transparent)', borderRadius: '2px' }}></div>
              <div style={{ width: '１０px', height: '２８px', background: 'linear-gradient(to top, #７B２FFF, transparent)', borderRadius: '２px' }}></div>
            </div>
          </div>

          <div className="card animate-floating" style={{ padding: '20px', animationDelay: '2s' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '8px', fontFamily: 'Inter' }}>AI Guide</div>
            <div style={{ fontSize: '12px', fontFamily: 'Inter' }}>What's your goal?</div>
          </div>

          <div className="card animate-floating" style={{ padding: '20px', animationDelay: '4s' }}>
            <div style={{ fontSize: '10px', color: 'var(--gradient-4)', fontFamily: 'Inter' }}>Dec Report</div>
            <div style={{ fontSize: '13px', fontWeight: 600, fontFamily: 'Inter' }}>ADVANCED ✦</div>
          </div>
        </div>
      </div>
    </section>
  );
};
