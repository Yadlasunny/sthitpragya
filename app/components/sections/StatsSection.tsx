import { ScrollReveal } from '../common/ScrollReveal';

export const StatsSection = () => {
  return (
    <section className="section" id="stats" style={{ background: 'linear-gradient(180deg, rgba(123, 47, 255, 0.1), transparent)', borderTop: '1px solid rgba(255, 215, 0, 0.1)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <h2 className="font-display gradient-text-gold-saffron" style={{ fontSize: 'clamp(1.6rem, 8vw, 2.8rem)', marginBottom: '60px' }}>The Numbers Behind the Mission.</h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          {[{ num: '50+', label: 'Schools Enrolled' }, { num: '10,000+', label: 'Students on the Journey' }, { num: '20+', label: 'Research-Based Activities' }, { num: '98%', label: 'School Renewal Rate' }].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div>
                <div style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '12px', color: 'var(--gradient-4)' }}>{stat.num}</div>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div style={{ maxWidth: '700px', margin: '0 auto', padding: '40px', background: 'rgba(12, 12, 29, 0.5)', borderRadius: '16px', borderLeft: '4px solid var(--gradient-4)' }}>
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '20px', lineHeight: 1.8, fontFamily: 'Inter' }}>
              "Sthitpragya changed how our students carry themselves. They walk taller, speak kinder, and push harder — not for marks, but for themselves."
            </p>
            <p style={{ color: 'var(--text-secondary)', fontWeight: 600, fontFamily: 'Inter' }}>— Principal, Government High School</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
