import React from 'react';

const DegreeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Earn a Recognized Degree</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Upon successful completion, you will receive a UGC-entitled Master of Business Administration degree from Manipal University Jaipur, equivalent to an on-campus degree.
        </p>
        
        <div className="relative max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-lg">
            {/* Hidden on mobile check done via CSS classes on image */}
            <div className="aspect-w-16 aspect-h-9 md:aspect-h-10 bg-gray-200 rounded border-8 border-double border-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                    src="https://picsum.photos/1200/800?random=certificate" 
                    alt="Sample Degree Certificate" 
                    className="w-full h-full object-cover hidden md:block" 
                />
                <div className="md:hidden p-8 text-center bg-white w-full h-full flex flex-col justify-center items-center">
                    <div className="w-20 h-20 bg-muj-orange rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">🎓</div>
                    <h3 className="text-xl font-bold text-muj-purple">Manipal University Jaipur</h3>
                    <p className="text-gray-500 mt-2">Master of Business Administration</p>
                    <p className="text-xs text-gray-400 mt-4">(Sample Certificate View)</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DegreeSection;