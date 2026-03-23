'use client';

import { useState } from 'react';
import { ScrollReveal } from '../common/ScrollReveal';

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: 'What does "Sthitpragya" mean?', a: 'Sthitpragya is a Sanskrit word from the Bhagavad Gita meaning "one who is stable in wisdom" — emotionally grounded, mentally strong, and unshaken by life\'s challenges. That is exactly what we build in every student we work with.' },
    { q: 'Is Sthitpragya free for schools?', a: 'Yes. Registering your school and onboarding your students is completely free. We believe every student deserves this opportunity, regardless of their school\'s budget.' },
    { q: 'How do students get their IDs?', a: 'After registration, we send a bulk form to your school. You share it with students or parents. After a short verification period, every student receives their unique ID and can log in immediately.' },
    { q: 'Is student data safe and private?', a: 'Absolutely. We follow strict child data protection standards. All data is encrypted. Parental consent is collected before any student information is stored. Students can only ever see their own data.' },
    { q: 'What activities do your instructors conduct?', a: 'Our instructors run research-based, no-equipment activities designed to build emotional resilience, mental clarity, and physical fitness. All activities are gender-grouped for safety and effectiveness.' },
    { q: 'Can we track individual student progress?', a: 'Yes. School admins have complete visibility into both class-wide and individual student progress, with downloadable monthly reports for every student in your school.' },
  ];

  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, rgba(0, 201, 167, 0.05), rgba(123, 47, 255, 0.05))' }}>
      <div className="container">
        <ScrollReveal>
          <h2 className="font-display gradient-text-violet-pink" style={{ fontSize: 'clamp(1.6rem, 8vw, 3rem)', textAlign: 'center', marginBottom: '60px' }}>Questions? We Have Answers.</h2>
        </ScrollReveal>

        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx} delay={idx * 50}>
              <div className="card" style={{ marginBottom: '16px', cursor: 'pointer' }} onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, fontFamily: 'Inter' }}>{faq.q}</h4>
                  <span style={{ fontSize: '1.5rem', color: 'var(--gradient-4)' }}>{openIdx === idx ? '−' : '+'}</span>
                </div>
                {openIdx === idx && (
                  <p style={{ marginTop: '16px', color: 'var(--text-secondary)', lineHeight: 1.7, fontFamily: 'Inter' }}>{faq.a}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
