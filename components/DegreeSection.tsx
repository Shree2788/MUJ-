import React from 'react';

const DegreeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Earn a Recognized Degree</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Upon successful completion, you will receive a UGC-entitled Master of Business Administration degree from Manipal University Jaipur, equivalent to an on-campus degree.
        </p>
        
        <div className="relative max-w-4xl mx-auto p-2 bg-white rounded-xl shadow-lg">
            <div className="bg-gray-100 rounded border border-gray-200 overflow-hidden">
                <img 
                    src="https://marvelleducation.com/wp-content/uploads/Manipal-University-Jaipur-Sample-MBA-Certificate.jpeg" 
                    alt="Manipal University Jaipur MBA Certificate" 
                    className="w-full h-auto object-contain" 
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default DegreeSection;