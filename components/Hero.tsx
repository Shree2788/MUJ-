import React from 'react';
import Button from './Button';
import CountdownTimer from './CountdownTimer';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Content Side */}
          <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left">
            <CountdownTimer />
            
            <h2 className="text-muj-orange font-bold uppercase tracking-widest text-sm mb-2">Empowering Tomorrow's Leadership</h2>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Master of Business <span className="text-muj-purple relative inline-block">
                Administration
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-muj-orange opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span> (Online MBA)
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              UGC Entitled | NAAC A+ Accredited. <br className="hidden md:block" />
              Leap ahead in just 24 months with a career-focused online MBA.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button onClick={onCtaClick} className="shadow-orange-200">
                Download Brochure
              </Button>
              <Button variant="outline" onClick={onCtaClick}>
                Get Free Counseling
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center md:justify-start gap-6 text-sm font-semibold text-gray-500">
              <div className="flex items-center gap-2">
                <span className="bg-orange-100 text-muj-orange p-1 rounded">★</span> UGC Entitled
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-orange-100 text-muj-orange p-1 rounded">★</span> NAAC A+
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-orange-100 text-muj-orange p-1 rounded">★</span> AICTE Approved
              </div>
            </div>
          </div>

          {/* Image Side - Hidden on Mobile per instructions */}
          <div className="hidden md:block w-1/2 lg:w-2/5 relative">
            <div className="absolute top-0 right-0 bg-muj-light-purple rounded-full w-96 h-96 -z-10 blur-3xl opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
            {/* Placeholder for professional student image */}
            <img 
              src="https://picsum.photos/600/800?random=1" 
              alt="Manipal Online MBA Student" 
              className="w-full h-auto object-cover rounded-lg shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500"
            />
            {/* Floating badge */}
            <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-lg shadow-lg border-l-4 border-muj-orange animate-bounce-slow">
              <p className="text-2xl font-bold text-muj-purple">1.8 Lakh+</p>
              <p className="text-sm text-gray-500">E-books & Resources</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;