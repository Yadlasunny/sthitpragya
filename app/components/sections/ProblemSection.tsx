import { ScrollReveal } from '../common/ScrollReveal';

export const ProblemSection = () => {
  return (
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '60px' }}>
            Schools Measure Marks.<br />Nobody Measures the Student.
          </h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          <ScrollReveal delay={100}>
            <div className="card" style={{ borderLeft: '4px solid #FF3CAC' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="m925.9 804l-24-199.2c-.8-6.6-8.9-9.4-13.6-4.7L829 659.5L557.7 388.3c-6.3-6.2-16.4-6.2-22.6 0L433.3 490L156.6 213.3a8.03 8.03 0 0 0-11.3 0l-45 45.2a8.03 8.03 0 0 0 0 11.3L422 591.7c6.2 6.3 16.4 6.3 22.6 0L546.4 490l226.1 226l-59.3 59.3a8.01 8.01 0 0 0 4.7 13.6l199.2 24c5.1.7 9.5-3.7 8.8-8.9"/></svg>
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, fontFamily: 'Inter' }}>73% of students feel emotionally lost and unsupported at school</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="card" style={{ borderLeft: '4px solid #FF3CAC' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.33 12.91c.09 1.55-.62 3.04-1.89 3.95l.77 1.49c.23.45.26.98.06 1.45c-.19.47-.58.84-1.06 1l-.79.25a1.69 1.69 0 0 1-1.86-.55L14.44 18c-.89-.15-1.73-.53-2.44-1.1c-.5.15-1 .23-1.5.23c-.88 0-1.76-.27-2.5-.79c-.53.16-1.07.23-1.62.22c-.79.01-1.57-.15-2.3-.45a4.1 4.1 0 0 1-2.43-3.61c-.08-.72.04-1.45.35-2.11c-.29-.75-.32-1.57-.07-2.33C2.3 7.11 3 6.32 3.87 5.82c.58-1.69 2.21-2.82 4-2.7c1.6-1.5 4.05-1.66 5.83-.37c.42-.11.86-.17 1.3-.17c1.36-.03 2.65.57 3.5 1.64c2.04.53 3.5 2.35 3.58 4.47c.05 1.11-.25 2.2-.86 3.13c.07.36.11.72.11 1.09m-5-1.41c.57.07 1.02.5 1.02 1.07a1 1 0 0 1-1 1h-.63c-.32.9-.88 1.69-1.62 2.29c.25.09.51.14.77.21c5.13-.07 4.53-3.2 4.53-3.25a2.59 2.59 0 0 0-2.69-2.49a1 1 0 0 1-1-1a1 1 0 0 1 1-1c1.23.03 2.41.49 3.33 1.3c.05-.29.08-.59.08-.89c-.06-1.24-.62-2.32-2.87-2.53c-1.25-2.96-4.4-1.32-4.4-.4c-.03.23.21.72.25.75a1 1 0 0 1 1 1c0 .55-.45 1-1 1c-.53-.02-1.03-.22-1.43-.56c-.48.31-1.03.5-1.6.56c-.57.05-1.04-.35-1.07-.9a.97.97 0 0 1 .88-1.1c.16-.02.94-.14.94-.77c0-.66.25-1.29.68-1.79c-.92-.25-1.91.08-2.91 1.29C6.75 5 6 5.25 5.45 7.2C4.5 7.67 4 8 3.78 9c1.08-.22 2.19-.13 3.22.25c.5.19.78.75.59 1.29c-.19.52-.77.78-1.29.59c-.73-.32-1.55-.34-2.3-.06c-.32.27-.32.83-.32 1.27c0 .74.37 1.43 1 1.83c.53.27 1.12.41 1.71.4q-.225-.39-.39-.81a1.038 1.038 0 0 1 1.96-.68c.4 1.14 1.42 1.92 2.62 2.05c1.37-.07 2.59-.88 3.19-2.13c.23-1.38 1.34-1.5 2.56-1.5m2 7.47l-.62-1.3l-.71.16l1 1.25zm-4.65-8.61a1 1 0 0 0-.91-1.03c-.71-.04-1.4.2-1.93.67c-.57.58-.87 1.38-.84 2.19a1 1 0 0 0 1 1c.57 0 1-.45 1-1c0-.27.07-.54.23-.76c.12-.1.27-.15.43-.15c.55.03 1.02-.38 1.02-.92"/></svg>
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, fontFamily: 'Inter' }}>Student mental health crises have tripled in the last decade</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="card" style={{ borderLeft: '4px solid #FF3CAC' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="17" cy="4" r="2" fill="currentColor"/><path fill="currentColor" d="M15.777 10.969a2.01 2.01 0 0 0 2.148.83l3.316-.829l-.483-1.94l-3.316.829l-1.379-2.067a2 2 0 0 0-1.272-.854l-3.846-.77a2 2 0 0 0-2.181 1.067l-1.658 3.316l1.789.895l1.658-3.317l1.967.394L7.434 17H3v2h4.434c.698 0 1.355-.372 1.715-.971l1.918-3.196l5.169 1.034l1.816 5.449l1.896-.633l-1.815-5.448a2.01 2.01 0 0 0-1.506-1.33l-3.039-.607l1.772-2.954z"/></svg></div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, fontFamily: 'Inter' }}>Fewer than 1 in 5 school students meet basic physical fitness standards</div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: 'var(--text-primary)', lineHeight: 1.7, fontFamily: 'Inter' }}>
            These are not distant statistics. These are the students sitting in your classrooms right now. <span style={{ fontWeight: 600, color: 'var(--gradient-4)' }}>Sthitpragya exists to change this.</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
