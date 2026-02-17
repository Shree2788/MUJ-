import React, { useState, useEffect } from 'react';
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
  
  // Extract UTMs on load
  useEffect(() => {
    extractUTMParams();
  }, []);

  // Exit Intent Hook (Desktop only)
  useExitIntent(() => {
    const isMobile = window.innerWidth < 768;
    // Only trigger if not already submitted successfully (optional logic, kept simple here)
    if (!isMobile && !isModalOpen) {
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

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-grow">
        <Hero onCtaClick={() => openForm("Download Brochure")} />
        <Accolades />
        <ProgramStats />
        <Specializations />
        <PlacementSection />
        <FeeSection onCtaClick={() => openForm("Get Scholarship Details")} />
        <DegreeSection />
        <FAQ />
      </main>
      <Footer />
      <StickyFooter onDownload={() => openForm("Download Brochure")} onCounseling={() => openForm("Get Free Counseling")} />
      
      <Modal isOpen={isModalOpen} onClose={closeForm} title={modalTitle}>
        <LeadForm onSuccess={closeForm} source="Popup" />
      </Modal>
    </div>
  );
};

export default App;