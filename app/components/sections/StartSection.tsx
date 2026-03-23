import { ScrollReveal } from '../common/ScrollReveal';

export const StartSection = ({ onRegisterClick }: { onRegisterClick?: () => void }) => {
  return (
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: 'clamp(1.6rem, 8vw, 3rem)', textAlign: 'center', marginBottom: '60px' }}>Starting Takes Less Than 5 Minutes.</h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '60px' }}>
          {[
            { n: <><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12.778 6.332a.75.75 0 0 1 .41.668v10a.75.75 0 0 1-1.5 0V8.473L9.44 10.107a.75.75 0 0 1-.882-1.214l3.437-2.5a.75.75 0 0 1 .782-.061"/></svg></>, t: 'Register Your School', d: 'Free. 2 minutes. Done.' },
            { n: <><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M10.153 8.288c-.374.336-.653.86-.653 1.633a.75.75 0 0 1-1.5 0c0-1.174.442-2.111 1.15-2.748c.694-.626 1.601-.923 2.485-.923s1.79.297 2.485.923c.707.637 1.15 1.574 1.15 2.748c0 1.783-1.132 3.338-2.353 4.569a22 22 0 0 1-1.684 1.508c1.215-.059 2.703-.037 3.949.274a.75.75 0 0 1-.364 1.456c-1.134-.284-2.602-.29-3.834-.214a25 25 0 0 0-2.074.22l-.029.004l-.007.002a.75.75 0 0 1-.593-1.325c.25-.201.521-.411.803-.63c.89-.69 1.893-1.47 2.768-2.352c1.164-1.173 1.917-2.356 1.917-3.512c0-.774-.279-1.297-.653-1.633c-.387-.349-.922-.538-1.481-.538c-.56 0-1.095.19-1.482.538"/></svg></>, t: 'We Onboard You', d: 'Verification + setup. We handle everything.' },
            { n: <><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M14.457 7.011c.761.54 1.293 1.38 1.293 2.482v.022a2 2 0 0 1-.01.152a3.4 3.4 0 0 1-.495 1.476c-.193.31-.45.606-.785.857c.335.25.592.546.786.857a3.4 3.4 0 0 1 .504 1.628v.021c0 1.101-.532 1.943-1.293 2.483c-.739.523-1.68.761-2.582.761s-1.844-.238-2.582-.761C8.532 16.449 8 15.609 8 14.507a.75.75 0 0 1 1.5 0c0 .56.25.967.66 1.258c.434.307 1.054.485 1.715.485s1.281-.178 1.715-.485c.409-.29.658-.694.66-1.252v-.003l-.003-.044a1.9 1.9 0 0 0-.274-.816c-.245-.392-.776-.9-2.098-.9a.75.75 0 0 1 0-1.5c1.322 0 1.854-.508 2.098-.9a1.9 1.9 0 0 0 .277-.86v-.003c-.002-.558-.251-.962-.66-1.252c-.434-.307-1.054-.485-1.715-.485s-1.281.178-1.715.485c-.41.291-.66.697-.66 1.258a.75.75 0 1 1-1.5 0c0-1.101.532-1.942 1.293-2.482c.739-.523 1.68-.761 2.582-.761s1.844.238 2.582.761"/></svg></>, t: 'Students Get Their IDs', d: 'Bulk registration. Zero hassle for you.' },
            { n: <><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M13.117 6.277a.75.75 0 0 1 .522.924c-.555 1.997-1.653 3.8-2.59 5.085c-.225.309-.443.59-.644.839h2.283V12a.75.75 0 0 1 1.5 0v1.125H15a.75.75 0 0 1 0 1.5h-.812V17a.75.75 0 0 1-1.5 0v-2.375H8.75a.75.75 0 0 1-.53-1.28l.005-.006l.023-.023l.093-.097a20 20 0 0 0 1.496-1.817c.886-1.215 1.87-2.85 2.357-4.603a.75.75 0 0 1 .923-.522"/></svg></>, t: 'The Journey Begins', d: 'Instructor visits + platform access. Immediately.' },
          ].map((step, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div style={{ textAlign: 'center', padding: '24px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '12px' }}>{step.n}</div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: 600, fontFamily: 'Inter' }}>{step.t}</h4>
                <p style={{ color: 'var(--text-secondary)', fontFamily: 'Inter' }}>{step.d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div style={{ textAlign: 'center' }}>
            <button onClick={onRegisterClick} className="btn-primary" style={{ fontSize: '1.1rem', padding: '18px 40px' }}>Register Now — 100% Free to Start →</button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
