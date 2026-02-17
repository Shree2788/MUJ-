import React from 'react';
import Button from './Button';

interface DegreeSectionProps {
  onCtaClick: () => void;
}

const DegreeSection: React.FC<DegreeSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Earn a Recognized Degree</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Upon successful completion, you will receive a UGC-entitled Master of Business Administration degree from Manipal University Jaipur, equivalent to an on-campus degree.
        </p>
        
        {/* Changed max-w-4xl to max-w-xl on desktop to reduce size by approx 35% */}
        <div className="relative w-full max-w-4xl md:max-w-xl mx-auto p-2 bg-white rounded-xl shadow-lg mb-8">
            <div className="bg-gray-100 rounded border border-gray-200 overflow-hidden">
                <img 
                    src="https://marvelleducation.com/wp-content/uploads/Manipal-University-Jaipur-Sample-MBA-Certificate.jpeg" 
                    alt="Manipal University Jaipur MBA Certificate" 
                    className="w-full h-auto object-contain" 
                />
            </div>
        </div>
        
        <Button onClick={onCtaClick} className="shadow-lg px-10">
            Download Brochure
        </Button>
      </div>
    </section>
  );
};

export default DegreeSection;