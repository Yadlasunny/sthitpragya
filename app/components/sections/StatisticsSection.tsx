'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatisticsData = [
  { label: '50K+', description: 'Students Transformed', emoji: '🎓', color: '#7B2FFF' },
  { label: '500+', description: 'Schools Trust Us', emoji: '🏫', color: '#FF6B00' },
  { label: '99.9%', description: 'Platform Uptime', emoji: '⚡', color: '#00C9A7' },
  { label: '15M+', description: 'Hours of Growth', emoji: '⏱️', color: '#FFD700' },
];

const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    let startValue = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= end) {
        startValue = end;
        clearInterval(timer);
      }
      if (ref.current) {
        ref.current.textContent = `${Math.floor(startValue).toLocaleString()}`;
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>0</span>;
};

export const StatisticsSection = () => {
  return (
    <section
      id="stats"
      style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, var(--bg-dark-secondary) 0%, var(--bg-dark) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Elements */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 201, 167, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(123, 47, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite 1s',
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
      `}</style>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '60px',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 900,
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #00C9A7 0%, #7B2FFF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Growing Impact
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Join thousands of educators transforming student lives every day
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '40px',
          }}
        >
          {StatisticsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                background: 'var(--bg-card)',
                border: `1px solid ${stat.color}33`,
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Gradient Background */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at center, ${stat.color}11 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>
                  {stat.emoji}
                </div>

                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    marginBottom: '8px',
                    color: stat.color,
                  }}
                >
                  <Counter end={parseInt(stat.label)} />
                  {stat.label.slice(-1) === '+' ? '+' : stat.label.slice(-1) === '%' ? '%' : ''}
                </div>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(123, 47, 255, 0.1) 0%, rgba(255, 107, 0, 0.1) 100%)',
            border: '1px solid rgba(123, 47, 255, 0.2)',
            borderRadius: '20px',
            padding: '40px',
            backdropFilter: 'blur(10px)',
          }}
        >
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '24px',
              color: 'var(--text-primary)',
            }}
          >
            Why Schools Choose Sthitpragya
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              { icon: '🎯', title: 'Proven Results', desc: 'Measurable improvements in student wellness and performance' },
              { icon: '🔐', title: 'Data Secure', desc: 'GDPR compliant with bank-level encryption' },
              { icon: '📱', title: 'Universal Access', desc: 'Works on all devices with offline capability' },
              { icon: '🌍', title: 'Global Scale', desc: 'Trusted by schools across 50+ countries' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '16px',
                }}
              >
                <div style={{ fontSize: '2rem' }}>{item.icon}</div>
                <div>
                  <h4
                    style={{
                      margin: 0,
                      marginBottom: '8px',
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
