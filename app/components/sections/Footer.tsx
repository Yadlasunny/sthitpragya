export const Footer = () => {
  return (
    <footer style={{ background: 'rgba(3, 3, 10, 0.8)', borderTop: '1px solid var(--border)', padding: '60px 20px 30px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <h3 className="font-display gradient-text-gold-saffron" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Sthitpragya</h3>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px' }}>स्थितप्रज्ञ</div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>Stable in Wisdom.<br />Unstoppable in Life.</p>
          </div>

          <div>
            <h4 style={{ marginBottom: '12px', fontWeight: 600, fontFamily: 'Inter' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none' }}>
              {['Our Method', 'Platform', 'For Schools', 'Results'].map((link, i) => (
                <li key={i} style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontFamily: 'Inter' }}>{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '12px', fontWeight: 600, fontFamily: 'Inter' }}>Legal</h4>
            <ul style={{ listStyle: 'none' }}>
              {['Privacy Policy', 'Terms & Conditions', 'Contact'].map((link, i) => (
                <li key={i} style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontFamily: 'Inter' }}>{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '12px', fontWeight: 600, fontFamily: 'Inter' }}>Follow Us</h4>
            <ul style={{ listStyle: 'none' }}>
              {['Instagram', 'LinkedIn', 'WhatsApp'].map((link, i) => (
                <li key={i} style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontFamily: 'Inter' }}>{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '30px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: 'Inter' }}>
          <p>© 2026 Sthitpragya. All rights reserved. Built with <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><path stroke-linecap="round" d="M12 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8"/><path d="M22 17.28a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.823-.017l-2.918-2.94a2.28 2.28 0 0 1 0-3.214a2.277 2.277 0 0 1 3.233 0l.106.107l.106-.107A2.277 2.277 0 0 1 22 17.28Z"/><path stroke-linecap="round" d="M5 20v-1a7 7 0 0 1 10-6.326"/></g></svg> for students everywhere.</p>
        </div>
      </div>
    </footer>
  );
};
