import { ScrollReveal } from '../common/ScrollReveal';

export const ReportSection = () => {
  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, rgba(123, 47, 255, 0.1), rgba(0, 201, 167, 0.05))' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <ScrollReveal>
            <div>
              <div style={{ color: 'var(--gradient-4)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>Monthly Reports</div>
              <h2 className="font-display" style={{ fontSize: '2.8rem', marginBottom: '40px', lineHeight: 1.1 }}>Every Student.<br />Every Month.<br />A Complete Growth Report.</h2>

              <ul style={{ listStyle: 'none', gap: '16px', display: 'flex', flexDirection: 'column' }}>
                {[
                  'Personalised meal plan based on their BMI and body data',
                  'Custom exercise routine matched to their fitness category',
                  'Internal affirmations — rebuilding how they see themselves',
                  'External affirmations — how they show up in the world',
                  'Progress graphs — visual, undeniable proof of growth',
                  'Next month\'s goals — set by AI, built for them personally'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ color: 'var(--gradient-4)' }}>✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="card" style={{ padding: '32px', background: 'rgba(12, 12, 29, 0.8)', borderLeft: '4px solid var(--gradient-4)', boxShadow: '0 0 40px rgba(255, 215, 0, 0.15)' }}>
              <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Student Name · December 2025</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '0.85rem', padding: '6px 12px', background: 'linear-gradient(135deg, #FFD700, #FF6B00)', borderRadius: '20px', color: '#000', fontWeight: 600 }}>ADVANCED ✦</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {[{ e: '', t: 'Meal Plan' }, { e: '', t: 'Fitness' }, { e: '', t: 'Affirmations' }, { e: '', t: 'Progress' }].map((item, i) => (
                  <div key={i} style={{ textAlign: 'center', padding: '12px', background: 'rgba(255, 215, 0, 0.05)', borderRadius: '8px' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{item.e}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
