import { ScrollReveal } from '../common/ScrollReveal';

export const NameSection = () => {
  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, rgba(123, 47, 255, 0.05), rgba(0, 201, 167, 0.05))' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', padding: 'clamp(20px, 5vw, 60px)', border: '1px solid rgba(255, 215, 0, 0.2)', borderRadius: '20px', background: 'rgba(12, 12, 29, 0.4)', backdropFilter: 'blur(10px)' }}>
            <div className="font-display gradient-text-gold-saffron" style={{ fontSize: 'clamp(36px, 12vw, 60px)', marginBottom: '32px' }}>स्थितप्रज्ञ</div>

            <div style={{ marginBottom: '32px', lineHeight: 1.8, fontFamily: 'Inter' }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '8px' }}>Sthitpragya</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>/sthit·pra·gya/ · Sanskrit · noun</div>
              <div style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-primary)', marginBottom: '16px' }}>
                "One who remains stable in wisdom. Unshaken by sorrow. Unmoved by pleasure. Grounded in who they are. Complete within themselves."
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>— Bhagavad Gita, Chapter 2</div>
            </div>

            <div style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-primary)', fontFamily: 'Inter' }}>
              This is not just our name. This is what we build in every student we touch. A young person who knows themselves, controls themselves, and believes in themselves — that student can achieve anything.
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
