import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Accolades from './components/Accolades';
import ProgramStats from './components/ProgramStats';
import Specializations from './components/Specializations';
import FeeSection from './components/FeeSection';
import PlacementSection from './components/PlacementSection';
import DegreeSection from './components/DegreeSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyFooter from './components/StickyFooter';
import Modal from './components/Modal';
import LeadForm from './components/LeadForm';
import { extractUTMParams } from './utils/utm';
import { useExitIntent } from './hooks/useExitIntent';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enquire Now");
  
  // Refs for auto-popup logic
  const hasSubmittedRef = useRef(false);
  const isModalOpenRef = useRef(false);
  const autoPopupTriggeredRef = useRef(false);

  // Sync state to ref for async access in event listeners
  useEffect(() => {
    isModalOpenRef.current = isModalOpen;
  }, [isModalOpen]);
  
  // Extract UTMs on load
  useEffect(() => {
    extractUTMParams();
  }, []);

  // Exit Intent Hook (Desktop only)
  useExitIntent(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile && !isModalOpen && !hasSubmittedRef.current) {
      setModalTitle("Wait! Get Your Free Career Counseling");
      setIsModalOpen(true);
    }
  });

  const openForm = (title: string = "Enquire Now") => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeForm = () => {
    setIsModalOpen(false);
  };

  const handleFormSuccess = () => {
    hasSubmittedRef.current = true;
    closeForm();
  };

  // 1. Time-based Auto Popup (45 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasSubmittedRef.current && !isModalOpenRef.current && !autoPopupTriggeredRef.current) {
        autoPopupTriggeredRef.current = true;
        openForm("Get Free Career Counseling");
      }
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  // 2. Scroll-based Auto Popup (75% depth)
  useEffect(() => {
    const handleScroll = () => {
      // If already submitted, open, or triggered, do nothing
      if (hasSubmittedRef.current || isModalOpenRef.current || autoPopupTriggeredRef.current) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      const scrollPercentage = (scrollTop + windowHeight) / docHeight;

      if (scrollPercentage >= 0.75) {
        autoPopupTriggeredRef.current = true;
        openForm("Get Free Career Counseling");
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header onApplyNow={() => openForm("Apply Now")} />
      <main className="flex-grow">
        <Hero onCtaClick={() => openForm("Download Brochure")} />
        <Accolades />
        <ProgramStats />
        <Specializations />
        <PlacementSection onCtaClick={() => openForm("Download Placement Report")} />
        <FeeSection onCtaClick={() => openForm("Get Scholarship Details")} />
        <DegreeSection onCtaClick={() => openForm("Download Brochure")} />
        <FAQ />
      </main>
      <Footer />
      <StickyFooter onDownload={() => openForm("Download Brochure")} onCounseling={() => openForm("Get Free Counseling")} />
      
      <Modal isOpen={isModalOpen} onClose={closeForm} title={modalTitle}>
        <LeadForm onSuccess={handleFormSuccess} source="Popup" />
      </Modal>
    </div>
  );
};

export default App;