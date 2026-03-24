import { ScrollReveal } from '../common/ScrollReveal';

export const PlatformSection = () => {
  const features = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M10.97 12.055H9.028L10 8.815z"/><path fill="currentColor" d="M14.487 2A5.5 5.5 0 0 0 22 9.512V22H2V2zM5.152 18h2.092l1.184-3.945h3.142L12.753 18h2.09L11.245 6H8.756zM16 18h2v-7h-2z"/><path fill="currentColor" d="M20.532 3.467L23.57 4.75l-3.037 1.282L19.25 9.07l-1.283-3.037L14.93 4.75l3.036-1.283L19.25.43z"/></svg>, title: 'Personal AI Guide', desc: 'A private AI companion trained on each student\'s fears, strengths, and goals. Available anytime. Honest. Judgment-free.', color: '#7B2FFF' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M28.367 36H24l-9-4.96l-10.991 4.042l3.002 5.944l7.072-2.953Q24.008 44 26.165 44T44 36"/><path fill="currentColor" fillRule="evenodd" strokeLinejoin="round" d="M28.992 26.988v-4.67c1.1-.457 2.543-1.125 3.372-1.954a9 9 0 1 0-12.728 0c.829.829 2.264 1.497 3.364 1.953q.009.503 0 4.67z" clipRule="evenodd"/><path strokeLinecap="round" d="m12 21l1-1m27 1l-1-1M15 5l-1-1m23 1l1-1m3 8h-1m-28 0h-1"/></g></svg>, title: 'Safe Problem Sharing', desc: 'A space for students to say what they cannot say out loud. Moderated, anonymous if needed, and connected to real support.', color: '#00C9A7' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.907 41.242c1.658-3.87 2.688-5.438 7.904-8.889c1.393-3.833 4.036-5.942 6.294-7.712c1.064-4.228 1.21-8.734.384-10.562c-.21 1.186-1.854 2.667-3.83 3.697c.851 2.025 2.332 3.862 3.918 4.647" strokeWidth="1"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M35.067 41.482c-.785-4.564-1.65-7.543 1.521-9.946c-4.132.625-6.919-3.507-6.919-3.507c-3.795 2.162-6.39 4.756-9.08 6.054c-4.133 5.285-5.55 4.949-9.682 7.159c0 0 .36 1.465.248 2.258H8.32c.905-.697 1.962-.937 2.587-2.258m14.67-18.819c-2.21-.368-4.925-2.034-6.238-3.715m15.614-5.372c.529 4.533-2.865 6.364-2.545 10.208" strokeWidth="1"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M31.414 9.866c-.41.404-.839.676-1.659.676s-.995-1.84-.976-2.78s.132-3.24 2.665-3.262c1.685-.015 2.117 1.114 1.949 3.18s-.233 3.049.36 3.772c1.49-.304 2.355.4 2.995 1.33s1.298 3.25 2.82 5.253c.143 4.084-1.01 6.166-3.797 7.8c1.602-1.506 2.034-4.757 1.826-6.76c0 0-2.627-2.001-2.661-3.375m-2.528 7.844c2.979 1.746 4.649 3.62 7.171 6.214c.793 3.988-3.311 3.86-4.512 11.724c.993.673 1.793 1.746 3.875 2.018h-5.38c-.129-1.041 1.505-2.018 1.505-2.018M28.036 11.47s-1.725.51-2.533.847c-2.38.992-4.562 2.771-6.164 6.39" strokeWidth="1"/></svg>, title: 'Diet & Exercise Plans', desc: 'Research-based food plans from BMI data. Gender-matched fitness routines built for real school students.', color: '#FFD700' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M13.343 3.954a.75.75 0 0 1-.783-.175l-.552-.553l-4.197 4.197a.75.75 0 0 1-1.061 0L5.149 5.822L1.335 9.636a.75.75 0 1 1-1.06-1.061L4.617 4.23a.75.75 0 0 1 1.061 0L7.28 5.832l3.667-3.667l-.552-.552a.75.75 0 0 1 .456-1.277c.913-.09 1.438-.09 2.317 0a.75.75 0 0 1 .669.67c.091.878.09 1.404 0 2.316a.75.75 0 0 1-.494.632M11.72 5.462a.75.75 0 0 1 .87-.126l.972.51a.75.75 0 0 1 .4.696l-.276 6.588a.75.75 0 0 1-.75.719h-1.972a.25.25 0 0 1-.25-.25V6.543a.25.25 0 0 1 .076-.18zm-2.256 8.137a.25.25 0 0 1-.25.25h-3.75a.25.25 0 0 1-.25-.25V7.785c0-.02.015-.036.035-.034c.163.008.323.07.455.185L7.349 9.38a.25.25 0 0 0 .339-.008L9.04 8.06a.25.25 0 0 1 .424.18zM3.535 9.136l-3.11 3.176a.75.75 0 0 0-.215.525v.262c0 .414.336.75.75.75h2.754a.25.25 0 0 0 .25-.25V9.311a.25.25 0 0 0-.429-.175" clipRule="evenodd"/></svg>, title: 'Growth Tracking', desc: 'Visual progress charts for physical performance, emotional check-ins, and mental engagement — week by week.', color: '#FF6B00' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 21H9v-8.4a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6zm5.4 0H15v-2.9a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v2.3a.6.6 0 0 1-.6.6M9 21v-4.9a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6v4.3a.6.6 0 0 0 .6.6zm1.806-15.887l.909-1.927a.312.312 0 0 1 .57 0l.91 1.927l2.032.311c.261.04.365.376.176.568l-1.47 1.5l.347 2.118c.044.272-.228.48-.462.351l-1.818-1l-1.818 1c-.233.128-.506-.079-.462-.351l.347-2.118l-1.47-1.5c-.19-.192-.085-.528.175-.568z"/></svg>, title: 'Challenges & Contests', desc: 'The 1-minute physical challenge. Personality assessments. School leaderboards. Growth made exciting.', color: '#FF3CAC' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"><path strokeWidth="1.5" d="M20 16V8c0-2.828 0-4.243-.879-5.121C18.243 2 16.828 2 14 2h-4c-2.828 0-4.243 0-5.121.879C4 3.757 4 5.172 4 8v8c0 2.828 0 4.243.879 5.121C5.757 22 7.172 22 10 22h4c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16"/><path strokeWidth="1.5" d="M15.5 2h-7c0 1.414 0 2.121.44 2.56c.439.44 1.146.44 2.56.44h1c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56m-8 9l1 1l2-2.5M13 17h3m-3-6h3"/><path strokeWidth="2" d="M8.49 16.867h.01"/></g></svg>, title: 'Daily Wisdom Feed', desc: 'Personalised affirmations, health facts, and motivational stories delivered fresh to every student, every day.', color: '#7B2FFF' },
  ];

  return (
    <section className="section" id="platform" style={{ background: 'linear-gradient(135deg, rgba(0, 201, 167, 0.05), rgba(123, 47, 255, 0.05))' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ color: 'var(--gradient-4)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Inter' }}>The Platform</div>
            <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '3rem', marginBottom: '16px' }}>Six Tools. One Mission.<br />Total Student Growth.</h2>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="card" style={{ borderTop: `3px solid ${f.color}`, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', fontWeight: 600, fontFamily: 'Inter' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontFamily: 'Inter', flex: 1 }}>{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
