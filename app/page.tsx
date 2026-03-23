'use client';

import { useState } from 'react';
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
import { RegistrationModal } from './components/ui/RegistrationModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'school' | 'student' | 'instructor' | 'contact'>('school');

  const openModal = (type: 'school' | 'student' | 'instructor' | 'contact' = 'school') => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main>
      <NavBar onRegisterClick={() => openModal('school')} />
      <Hero onRegisterClick={() => openModal('school')} />
      <NameSection />
      <ProblemSection />
      <MethodSection />
      <PlatformSection />
      <PortalsSection onPortalClick={openModal} />
      <ReportSection />
      <StatsSection />
      <StartSection onRegisterClick={() => openModal('school')} />
      <FAQSection />
      <FinalCTA onRegisterClick={() => openModal('school')} onContactClick={() => openModal('contact')} />
      <Footer />
      <RegistrationModal isOpen={modalOpen} onClose={closeModal} portalType={modalType} />
    </main>
  );
}
