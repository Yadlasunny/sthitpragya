import { ScrollReveal } from '../common/ScrollReveal';

export const MethodSection = () => {
  return (
    <section className="section" id="method">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <ScrollReveal>
            <div>
              <div style={{ color: 'var(--gradient-4)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Inter' }}>The Sthitpragya Method</div>
              <h2 className="font-display" style={{ fontSize: '2.8rem', marginBottom: '20px', lineHeight: 1.1 }}>We Don't Send an App and Walk Away.</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontFamily: 'Inter' }}>
                Our trained instructors personally visit your school. They sit with your students, run powerful activities, and build real relationships. Our platform then carries that work forward every single day — tracking, guiding, and growing each student individually.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              {[
                { n: '1', icon: '', title: 'Your school registers', desc: 'We verify and onboard you within days.' },
                { n: '2', icon: '', title: 'Our instructor visits', desc: 'Gender-grouped, personalised, research-based activities.' },
                { n: '3', icon: '', title: 'Students access AI guidance', desc: 'Fitness tracking, diet plans, and daily growth content.' },
                { n: '4', icon: '', title: 'Full growth report', desc: 'Every month for every single student.' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '24px', paddingLeft: '16px', borderLeft: '2px solid var(--gradient-4)' }}>
                  <div style={{ minWidth: '40px', height: '40px', background: 'linear-gradient(135deg, #7B2FFF, #FF6B00)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {step.n}
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '4px', fontWeight: 600, fontFamily: 'Inter' }}>{step.icon} {step.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontFamily: 'Inter' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
