import React from 'react';

const ProgramStats: React.FC = () => {
  return (
    <section className="py-16 bg-muj-purple text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">70+ Years of Educational Excellence</h2>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Manipal University Jaipur (MUJ) launched in 2011, is a self-financed State University that has redefined academic excellence in the region. 
              Join a global network of alumni and give your career the Manipal edge.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-muj-orange pl-4">
                <p className="text-3xl font-bold">25,000+</p>
                <p className="text-sm text-gray-300">Learners Placed</p>
              </div>
              <div className="border-l-4 border-muj-orange pl-4">
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm text-gray-300">Hiring Partners</p>
              </div>
              <div className="border-l-4 border-muj-orange pl-4">
                <p className="text-3xl font-bold">20,000+</p>
                <p className="text-sm text-gray-300">Online Alumni</p>
              </div>
              <div className="border-l-4 border-muj-orange pl-4">
                <p className="text-3xl font-bold">INR 50K+</p>
                <p className="text-sm text-gray-300">Worth Free Content</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
             <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/26/Manipal_University_Jaipur.jpg" 
                alt="Manipal University Jaipur Campus" 
                className="rounded-lg shadow-2xl w-full h-auto border-4 border-white/20"
             />
             <p className="text-center text-xs text-white/50 mt-2">Manipal University Jaipur Campus</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramStats;