'use client';

export default function TermsAndConditions() {
  return (
    <section style={{ minHeight: '100vh', background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
      {/* Background blobs */}
      <div style={{ position: 'fixed', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255, 60, 172, 0.15) 0%, transparent 70%)', top: '-200px', right: '-150px', zIndex: 0 }}></div>
      <div style={{ position: 'fixed', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255, 107, 0, 0.1) 0%, transparent 70%)', bottom: '20%', left: '-200px', zIndex: 0 }}></div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h1 className="font-display animate-fade-up" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginBottom: '16px', lineHeight: 1.2 }}>
              <span className="gradient-text-violet-pink">Terms & Conditions</span>
            </h1>
            <p className="animate-fade-up stagger-1" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '8px', fontFamily: 'Inter' }}>
              Sthitpragya <span className="gradient-text-gold-saffron font-display" style={{ fontSize: '1rem' }}>(स्थितप्रज्ञ)</span>
            </p>
            <p className="animate-fade-up stagger-2" style={{ fontSize: '0.9rem', color: 'var(--gradient-3)', fontFamily: 'Inter' }}>Effective Date: March 24, 2026</p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p className="animate-fade-up stagger-3" style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '60px', fontFamily: 'Inter', textAlign: 'center' }}>
              By using Sthitpragya, you agree to these terms.
            </p>

            <div className="animate-fade-up stagger-4" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>1. Acceptance of Terms</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>By registering your school or using our platform, you agree to these terms and conditions.</p>
            </div>

            <div className="animate-fade-up stagger-5" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>2. Eligibility</h2>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Schools must provide accurate information</li>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Students must be school-enrolled</li>
                <li style={{ paddingLeft: '24px', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Minimum age 13 or parental consent</li>
              </ul>
            </div>

            <div className="animate-fade-up stagger-6" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>3. Platform Usage</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '12px', fontFamily: 'Inter' }}>Use the platform responsibly and do not misuse it.</p>
            </div>

            <div className="animate-fade-up stagger-7" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>4. User Responsibilities</h2>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Do not provide false information</li>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Do not attempt to hack or misuse</li>
                <li style={{ paddingLeft: '24px', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Do not share login credentials</li>
              </ul>
            </div>

            <div className="animate-fade-up stagger-8" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>5. School Responsibilities</h2>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Ensure student consent</li>
                <li style={{ paddingLeft: '24px', position: 'relative', marginBottom: '8px' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Provide accurate data</li>
                <li style={{ paddingLeft: '24px', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--gradient-3)' }}>▪</span>Monitor participation</li>
              </ul>
            </div>

            <div className="animate-fade-up stagger-9" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>6. Intellectual Property</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>All content is owned by Sthitpragya. Cannot be copied without permission.</p>
            </div>

            <div className="animate-fade-up stagger-10" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>7. Service Availability</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>We strive for continuous service but cannot guarantee uninterrupted access.</p>
            </div>

            <div className="animate-fade-up stagger-11" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>8. Limitation of Liability</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>Not liable for indirect damages or misuse of the platform.</p>
            </div>

            <div className="animate-fade-up stagger-12" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>9. Termination</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>We may suspend or terminate access if terms are violated.</p>
            </div>

            <div className="animate-fade-up stagger-13" style={{ marginBottom: '50px', paddingBottom: '40px', borderBottom: '1px solid var(--border)' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>10. Governing Law</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>These terms are governed by laws of India.</p>
            </div>

            <div className="animate-fade-up stagger-14" style={{ marginBottom: '50px', paddingBottom: '40px' }}>
              <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>11. Contact</h2>
              <div style={{ padding: '24px', background: 'rgba(255, 60, 172, 0.1)', border: '1px solid rgba(255, 60, 172, 0.2)', borderRadius: '8px', fontFamily: 'Inter' }}>
                <p style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '12px' }}>📧 Email: <span className="gradient-text-gold-saffron" style={{ fontWeight: 'bold' }}>[your email]</span></p>
                <p style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>🏢 Sthitpragya (स्थितप्रज्ञ)</p>
              </div>
            </div>

            <div className="animate-fade-up" style={{ textAlign: 'center', animationDelay: '1s' }}>
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
