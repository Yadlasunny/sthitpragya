'use client';

export default function PrivacyPolicy() {
  return (
    <section style={{ minHeight: '100vh', background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
      {/* Background blobs */}
      <div style={{ position: 'fixed', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(123, 47, 255, 0.15) 0%, transparent 70%)', top: '-200px', left: '-150px', zIndex: 0 }}></div>
      <div style={{ position: 'fixed', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255, 107, 0, 0.1) 0%, transparent 70%)', top: '50%', right: '-200px', zIndex: 0 }}></div>
      <div style={{ position: 'fixed', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 201, 167, 0.1) 0%, transparent 70%)', bottom: '-100px', left: '20%', zIndex: 0 }}></div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h1 className="font-display animate-fade-up" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginBottom: '16px', lineHeight: 1.2 }}>
              <span className="gradient-text-violet-pink">Privacy Policy</span>
            </h1>
            <p className="animate-fade-up stagger-1" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '8px', fontFamily: 'Inter' }}>
              Sthitpragya <span className="gradient-text-gold-saffron font-display" style={{ fontSize: '1rem' }}>(स्थितप्रज्ञ)</span>
            </p>
            <p className="animate-fade-up stagger-2" style={{ fontSize: '0.9rem', color: 'var(--gradient-3)', fontFamily: 'Inter' }}>Effective Date: March 24, 2026</p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p className="animate-fade-up stagger-3" style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '24px', fontFamily: 'Inter' }}>
              Sthitpragya ("we", "our", "us") is committed to protecting student privacy.
            </p>

            <div className="animate-fade-up stagger-4" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>1. Information We Collect</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '16px', fontFamily: 'Inter' }}>We collect:</p>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Student data: name, age, health metrics</li>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>School and admin information</li>
                <li style={{ paddingLeft: '24px', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Usage and activity data</li>
              </ul>
            </div>

            <div className="animate-fade-up stagger-5" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>2. How We Use the Information</h2>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Provide personalized programs</li>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Generate monthly reports</li>
                <li style={{ paddingLeft: '24px', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>We do NOT sell your data</li>
              </ul>
            </div>

            <div className="animate-fade-up stagger-6" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>3. Student Data Protection</h2>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>All data encrypted and secured</li>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Role-based access control</li>
                <li style={{ paddingLeft: '24px', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Compliance with India data standards</li>
              </ul>
            </div>

            <div className="animate-fade-up stagger-7" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>4. Parental Consent</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>Schools and parents must provide consent before student enrollment.</p>
            </div>

            <div className="animate-fade-up stagger-8" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>5. Data Sharing</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '12px', fontFamily: 'Inter' }}>We do not share data except when required by law or with trusted service providers.</p>
            </div>

            <div className="animate-fade-up stagger-9" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>6. Security</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>Strong measures to prevent unauthorized access and data breaches.</p>
            </div>

            <div className="animate-fade-up stagger-10" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>7. Your Rights</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>Request access, correction, or deletion of your data.</p>
            </div>

            <div className="animate-fade-up stagger-11" style={{ marginBottom: '50px', paddingBottom: '40px' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>8. Contact Us</h2>
              <div style={{ padding: '24px', background: 'rgba(123, 47, 255, 0.1)', border: '1px solid rgba(123, 47, 255, 0.2)', borderRadius: '8px', fontFamily: 'Inter' }}>
                <p style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '12px' }}>📧 Email: <span className="gradient-text-gold-saffron" style={{ fontWeight: 'bold' }}>[your email]</span></p>
                <p style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>🏢 Sthitpragya (स्थितप्रज्ञ)</p>
              </div>
            </div>

            <div className="animate-fade-up" style={{ textAlign: 'center', animationDelay: '0.85s' }}>
              <p className="font-display gradient-text-teal-gold" style={{ fontSize: '1.3rem', fontStyle: 'italic', lineHeight: 1.6 }}>
                "Stable in Wisdom. Unstoppable in Life."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
