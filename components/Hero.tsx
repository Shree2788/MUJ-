import React from 'react';
import Button from './Button';
import CountdownTimer from './CountdownTimer';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative w-full bg-white flex flex-col justify-center min-h-[550px] md:min-h-[600px] overflow-hidden">
      
      {/* 
        ----------------------------------------------------
        BACKGROUND IMAGE
        ----------------------------------------------------
      */}
      <div className="absolute inset-0 z-0">
         {/* 
           Mobile: 
           - bg-cover: Standard.
           - bg-center: Centers the image.
         */}
         <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
            style={{ 
                backgroundImage: "url('https://marvelleducation.com/wp-content/uploads/manipal-university-jaipur-featured-2.jpg')"
            }}
         ></div>

         {/* 
           Desktop: 
           - bg-left: Anchors image to left as requested.
         */}
         <div 
            className="hidden md:block absolute inset-0 bg-cover bg-left bg-no-repeat"
            style={{ 
                backgroundImage: "url('https://marvelleducation.com/wp-content/uploads/manipal-university-jaipur-featured-2.jpg')"
            }}
         ></div>
      </div>

      {/* 
        ----------------------------------------------------
        GRADIENT/TINT OVERLAYS
        ----------------------------------------------------
      */}
      
      {/* 
        Mobile Overlay:
        - Increased tint to bg-white/80 (from 70) for better text readability.
      */}
      <div className="absolute inset-0 z-0 md:hidden bg-white/80"></div>

      {/* 
        Desktop Gradient: 
        - Left-side fade for text readability.
        - Increased width to 75% to extend tint towards center.
      */}
      <div className="hidden md:block absolute inset-0 z-0 bg-gradient-to-r from-white via-white/95 to-transparent w-[75%]"></div>

      {/* 
        ----------------------------------------------------
        HERO CONTENT
        ----------------------------------------------------
      */}
      <div className="container mx-auto px-4 relative z-10 py-8 md:py-0">
        <div className="flex flex-col md:flex-row h-full items-center justify-center md:justify-start">
          
          {/* 
            Content Width & Alignment
            - Mobile: w-full, text-center.
            - Desktop: w-[60%], text-left.
          */}
          <div className="w-full md:w-[60%] md:ml-0 text-center md:text-left">
            
            {/* Tag - Centered on mobile via mx-auto */}
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full mx-auto md:mx-0">
                <span className="w-2 h-2 rounded-full bg-muj-orange animate-pulse"></span>
                <span className="text-xs md:text-sm font-bold text-muj-orange tracking-wide uppercase">Admissions Open 2026 Batch</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-3 leading-[1.15]">
              Global <span className="text-muj-orange">Online MBA</span> from Manipal University Jaipur
            </h1>
            
            {/* Subheadline - Centered max-width on mobile */}
            <p className="text-base md:text-lg text-gray-800 mb-4 font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
              UGC Entitled & NAAC A+ Accredited. Fast-track your career with a degree that is recognized globally by WES and top recruiters.
            </p>

            {/* Trust Markers - Aligned properly: Centered block, left aligned items */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-sm md:text-xs font-semibold text-gray-800 w-fit mx-auto md:mx-0 justify-items-start text-left">
                <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>UGC Entitled</span>
                </div>
                <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>NAAC A+ Grade</span>
                </div>
                <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>WES Recognized</span>
                </div>
                <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>100% Placement</span>
                </div>
            </div>

            {/* Coursera Trust Badge */}
            <div className="inline-block w-full md:w-auto bg-blue-50/80 border border-blue-100 rounded-lg p-3 md:pr-6 mb-2 mx-auto md:mx-0 text-left">
               <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="bg-white p-2 rounded border border-gray-100">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Coursera_logo_%282020%29.svg" 
                            alt="Coursera" 
                            className="h-4 md:h-5 w-auto" 
                        />
                    </div>
                    <div>
                        <p className="text-gray-900 font-bold text-xs leading-tight">Includes Free Access to Coursera</p>
                        <p className="text-gray-600 text-[10px]">Learn from top global universities & companies</p>
                    </div>
               </div>
            </div>

            {/* Primary CTAs - Pushed down with mt-8 */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-8 mb-4 justify-center md:justify-start">
              <Button onClick={onCtaClick} className="shadow-xl shadow-orange-100 text-base md:text-lg px-8 py-4 flex items-center justify-center gap-2">
                Download Brochure
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </Button>
              <Button variant="outline" onClick={onCtaClick} className="text-base md:text-lg px-8 py-4 bg-white/80 hover:bg-muj-orange hover:text-white border-gray-300 md:border-muj-orange backdrop-blur-sm">
                Get Free Counseling
              </Button>
            </div>

            {/* Urgency Trigger */}
            <div className="mb-0 md:mb-4 flex justify-center md:justify-start">
                <CountdownTimer />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;