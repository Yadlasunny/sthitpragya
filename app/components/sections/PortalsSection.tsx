import { ScrollReveal } from '../common/ScrollReveal';

export const PortalsSection = ({ onPortalClick }: { onPortalClick?: (type: 'school' | 'student' | 'instructor' | 'contact') => void }) => {
  const portals = [
    { title: 'Your School. Full Control.', body: 'Schedule instructor visits, monitor class and individual progress, download monthly reports, and see your school transform — from one dashboard.', features: ['Event Calendar', 'Class Progress View', 'Individual Reports', 'Progress Statements'], color: '#FFD700', cta: 'Register Your School →', type: 'school' as const },
    { title: 'Their Platform. Their Growth.', body: 'An AI guide, a fitness tracker, a safe space, and a daily dose of inspiration. Everything a student needs — in their pocket.', features: ['Personal AI Guide', 'Diet & Fitness', 'Daily Content', 'Monthly Report'], color: '#7B2FFF', cta: 'Student Login →', type: 'student' as const },
    { title: 'Walk In Prepared. Walk Out Impactful.', body: 'Know your students before you arrive. Gender-grouped activity lists, session logs, and real-time progress — all in one view.', features: ['Student Activity Lists', 'Gender Grouping', 'Session Logging', 'Live Tracking'], color: '#00C9A7', cta: 'Instructor Portal →', type: 'instructor' as const },
  ];

  return (
    <section className="section" id="schools">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-display" style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '12px' }}>One Platform.</h2>
          <h2 className="font-display gradient-text-gold-saffron" style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '60px' }}>Built for Every Role in Your School.</h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {portals.map((p, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="card" style={{ borderTop: `4px solid ${p.color}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.6, fontFamily: 'Inter' }}>{p.body}</p>
                  <ul style={{ listStyle: 'none', marginBottom: '20px' }}>
                    {p.features.map((f, j) => (
                      <li key={j} style={{ marginBottom: '8px', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>✓ {f}</li>
                    ))}
                  </ul>
                </div>
                <button onClick={() => onPortalClick?.(p.type)} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>{p.cta}</button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
