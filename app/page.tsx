'use client';

import {
  NavBar,
  Hero,
  NameSection,
  ProblemSection,
  MethodSection,
  PlatformSection,
  PortalsSection,
  ReportSection,
  StatsSection,
  StartSection,
  FAQSection,
  FinalCTA,
  Footer,
} from './components';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <NameSection />
      <ProblemSection />
      <MethodSection />
      <PlatformSection />
      <PortalsSection />
      <ReportSection />
      <StatsSection />
      <StartSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
