import { ScrollReveal } from '../common/ScrollReveal';

export const PlatformSection = () => {
  const features = [
    { icon: '', title: 'Personal AI Guide', desc: 'A private AI companion trained on each student\'s fears, strengths, and goals. Available anytime. Honest. Judgment-free.', color: '#7B2FFF' },
    { icon: '', title: 'Safe Problem Sharing', desc: 'A space for students to say what they cannot say out loud. Moderated, anonymous if needed, and connected to real support.', color: '#00C9A7' },
    { icon: '', title: 'Diet & Exercise Plans', desc: 'Research-based food plans from BMI data. Gender-matched fitness routines built for real school students.', color: '#FFD700' },
    { icon: '', title: 'Growth Tracking', desc: 'Visual progress charts for physical performance, emotional check-ins, and mental engagement — week by week.', color: '#FF6B00' },
    { icon: '', title: 'Challenges & Contests', desc: 'The 1-minute physical challenge. Personality assessments. School leaderboards. Growth made exciting.', color: '#FF3CAC' },
    { icon: '', title: 'Daily Wisdom Feed', desc: 'Personalised affirmations, health facts, and motivational stories delivered fresh to every student, every day.', color: '#7B2FFF' },
  ];

  return (
    <section className="section" id="platform" style={{ background: 'linear-gradient(135deg, rgba(0, 201, 167, 0.05), rgba(123, 47, 255, 0.05))' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ color: 'var(--gradient-4)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>The Platform</div>
            <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '3rem', marginBottom: '16px' }}>Six Tools. One Mission.<br />Total Student Growth.</h2>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="card" style={{ borderTop: `3px solid ${f.color}` }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', fontWeight: 600 }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
