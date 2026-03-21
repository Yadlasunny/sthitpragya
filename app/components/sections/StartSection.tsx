import { ScrollReveal } from '../common/ScrollReveal';

export const StartSection = () => {
  return (
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: 'clamp(1.6rem, 8vw, 3rem)', textAlign: 'center', marginBottom: '60px' }}>Starting Takes Less Than 5 Minutes.</h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '60px' }}>
          {[
            { n: '1️⃣', t: 'Register Your School', d: 'Free. 2 minutes. Done.' },
            { n: '2️⃣', t: 'We Onboard You', d: 'Verification + setup. We handle everything.' },
            { n: '3️⃣', t: 'Students Get Their IDs', d: 'Bulk registration. Zero hassle for you.' },
            { n: '4️⃣', t: 'The Journey Begins', d: 'Instructor visits + platform access. Immediately.' },
          ].map((step, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div style={{ textAlign: 'center', padding: '24px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '12px' }}>{step.n}</div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: 600 }}>{step.t}</h4>
                <p style={{ color: 'var(--text-secondary)' }}>{step.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div style={{ textAlign: 'center' }}>
            <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '18px 40px' }}>Register Now — 100% Free to Start →</button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
