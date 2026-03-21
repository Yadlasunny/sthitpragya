export const Hero = () => {
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

        <p className="animate-fade-up stagger-2" style={{ fontSize: 'clamp(0.9rem, 4vw, 1.2rem)', maxWidth: '600px', marginBottom: '40px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          <span className="gradient-text-gold-saffron font-display">Sthitpragya</span> — meaning "stable in wisdom" — is our mission and your students' destination. We combine in-school instructor programs with an AI-powered platform to build students who are emotionally grounded, physically strong, and mentally free.
        </p>

        <div className="animate-fade-up stagger-3" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '60px', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'stretch' }}>
          <button className="btn-primary" style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>Register Your School — It's Free →</button>
          <button className="btn-secondary" style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>Discover the Method ↓</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginBottom: '40px', fontSize: 'clamp(0.8rem, 3vw, 0.95rem)' }}>
          <div style={{ textAlign: 'center' }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{marginRight: '4px'}}><path fill="currentColor" d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312"/></svg> 50+ Schools</div>
          <div style={{ textAlign: 'center' }}>👨‍🎓 10,000+ Students</div>
          <div style={{ textAlign: 'center' }}>💪 20+ Activities</div>
          <div style={{ textAlign: 'center' }}>📊 Monthly Reports</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px', maxWidth: '600px' }}>
          <div className="card animate-floating" style={{ padding: '20px', animationDelay: '0s' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Progress</div>
            <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '30px' }}>
              <div style={{ width: '10px', height: '15px', background: 'linear-gradient(to top, #FFD700, transparent)', borderRadius: '2px' }}></div>
              <div style={{ width: '10px', height: '22px', background: 'linear-gradient(to top, #FF6B00, transparent)', borderRadius: '2px' }}></div>
              <div style={{ width: '10px', height: '28px', background: 'linear-gradient(to top, #7B2FFF, transparent)', borderRadius: '2px' }}></div>
            </div>
          </div>

          <div className="card animate-floating" style={{ padding: '20px', animationDelay: '2s' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '8px' }}>AI Guide</div>
            <div style={{ fontSize: '12px' }}>What's your goal?</div>
          </div>

          <div className="card animate-floating" style={{ padding: '20px', animationDelay: '4s' }}>
            <div style={{ fontSize: '10px', color: 'var(--gradient-4)' }}>Dec Report</div>
            <div style={{ fontSize: '13px', fontWeight: 600 }}>ADVANCED ✦</div>
          </div>
        </div>
      </div>
    </section>
  );
};
