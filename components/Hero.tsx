import React from 'react';
import Button from './Button';
import CountdownTimer from './CountdownTimer';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden pb-12">
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <CountdownTimer />
          
          <h2 className="text-muj-orange font-bold uppercase tracking-widest text-sm mb-3">Empowering Tomorrow's Leadership</h2>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Master of Business <span className="text-muj-purple relative inline-block">
              Administration
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-muj-orange opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span> (Online MBA)
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            UGC Entitled | NAAC A+ Accredited. <br className="hidden md:block" />
            Leap ahead in just 24 months with a career-focused online MBA.
          </p>

          {/* Coursera Offer Section */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8 flex flex-col md:flex-row items-center gap-4 shadow-sm animate-pulse-slow">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg" 
              alt="Coursera" 
              className="h-8 w-auto" 
            />
            <div className="text-left">
              <p className="text-blue-900 font-bold text-sm md:text-base">Limited Time Offer: Free Access to Paid Content</p>
              <p className="text-blue-700 text-xs">Enroll by this Sunday to get complimentary access to premium Coursera courses.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full md:w-auto">
            <Button onClick={onCtaClick} className="shadow-orange-200 text-lg px-8">
              Download Brochure
            </Button>
            <Button variant="outline" onClick={onCtaClick} className="text-lg px-8">
              Get Free Counseling
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm font-semibold text-gray-500">
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow-sm border border-gray-100">
              <span className="text-muj-orange">★</span> UGC Entitled
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow-sm border border-gray-100">
              <span className="text-muj-orange">★</span> NAAC A+ Accredited
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow-sm border border-gray-100">
              <span className="text-muj-orange">★</span> AICTE Approved
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;