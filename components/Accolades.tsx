import React from 'react';
import { Accolade } from '../types';

const Accolades: React.FC = () => {
  const accolades: Accolade[] = [
    { title: "NAAC A+", subtitle: "Accredited University", rank: "3.28 CGPA" },
    { title: "NIRF Rank 58", subtitle: "Top 100 Universities", rank: "2025" },
    { title: "UGC Entitled", subtitle: "Online Degrees", rank: "Approved" },
    { title: "WES Recognized", subtitle: "Education Services", rank: "Global" },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Manipal University Jaipur Accolades</h2>
          <div className="w-16 h-1 bg-muj-orange mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {accolades.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow text-muj-orange text-xl font-bold">
                {/* Placeholder icon */}
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-muj-purple mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.subtitle}</p>
              <span className="inline-block bg-muj-light-purple text-muj-purple text-xs font-semibold px-2 py-1 rounded">
                {item.rank}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accolades;