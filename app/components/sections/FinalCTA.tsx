import { ScrollReveal } from '../common/ScrollReveal';

export const FinalCTA = ({ onRegisterClick, onContactClick }: { onRegisterClick?: () => void; onContactClick?: () => void }) => {
  return (
    <section id="contact" className="section" style={{ background: 'linear-gradient(135deg, rgba(123, 47, 255, 0.2), rgba(255, 107, 0, 0.15), rgba(0, 201, 167, 0.15), rgba(255, 215, 0, 0.1))', textAlign: 'center' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ color: 'var(--gradient-4)', fontSize: 'clamp(1rem, 4vw, 1.2rem)', marginBottom: '20px' }}>स्थितप्रज्ञ बनो</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 8vw, 3.5rem)', marginBottom: '24px', lineHeight: 1.1 }}>Ready to Build<br />Unstoppable Students?</h2>
            <p style={{ fontSize: 'clamp(0.9rem, 4vw, 1.2rem)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px', fontFamily: 'Inter' }}>
              Join the schools already giving their students the wisdom, strength, and stability to become the best version of themselves.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'stretch' }}>
            <button onClick={onRegisterClick} className="btn-primary" style={{ fontSize: '1rem', padding: '18px 40px' }}>Register Your School — It's Free →</button>
            <button onClick={onContactClick} className="btn-secondary" style={{ fontSize: '1rem', padding: '18px 40px' }}>Contact Us →</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', fontSize: 'clamp(0.75rem, 3vw, 0.95rem)', color: 'var(--text-secondary)', flexWrap: 'wrap', fontFamily: 'Inter' }}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm7.413-5.587Q14 15.825 14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17t1.413-.587M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"/></svg> No credit card</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"/></svg> Free to start</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312"/></svg> Set up in days</span>
            <span>🇮🇳 Built for Indian Schools</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
