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
          <div className="w-full md:w-1/2 hidden md:block">
             {/* Hidden on mobile per instructions */}
             <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/300/300?random=2" className="rounded-lg shadow-lg" alt="Campus Life" />
                <img src="https://picsum.photos/300/300?random=3" className="rounded-lg shadow-lg mt-8" alt="Convocation" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramStats;