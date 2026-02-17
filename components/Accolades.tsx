import React from 'react';
import { Accolade } from '../types';

const Accolades: React.FC = () => {
  const accolades: Accolade[] = [
    { title: "UGC Entitled", subtitle: "University Grants Commission", image: "https://marvelleducation.com/wp-content/uploads/UGC-2.jpg.webp" },
    { title: "NAAC A+", subtitle: "Accredited University", image: "https://marvelleducation.com/wp-content/uploads/NAAC-A-2.jpg.webp" },
    { title: "AICTE Approved", subtitle: "Technical Education", image: "https://marvelleducation.com/wp-content/uploads/AICTE-3-1.jpg.webp" },
    { title: "NIRF Ranked", subtitle: "Top 100 Universities", image: "https://marvelleducation.com/wp-content/uploads/NIRF-1.jpg.webp" },
    { title: "WES Recognized", subtitle: "World Education Services", image: "https://marvelleducation.com/wp-content/uploads/WES-2.jpg.webp" },
    { title: "QS Ranked", subtitle: "World University Rankings", image: "https://marvelleducation.com/wp-content/uploads/QS-2.jpg.webp" },
    { title: "NBA Accredited", subtitle: "National Board of Accreditation", image: "https://marvelleducation.com/wp-content/uploads/NBA.jpg.webp" },
  ];

  // Duplicate the array to create a seamless scrolling loop
  const scrollingAccolades = [...accolades, ...accolades, ...accolades];

  return (
    <section className="bg-white py-8 border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Accreditations & Recognitions</h2>
          <div className="w-16 h-1 bg-muj-orange mx-auto rounded"></div>
        </div>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Fade Edges for smoother look */}
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-scroll gap-6 px-4">
            {scrollingAccolades.map((item, index) => (
                <div key={index} className="flex-none w-40 md:w-48 bg-gray-50 p-4 rounded-xl border border-gray-100 text-center hover:shadow-md transition-shadow flex flex-col items-center group">
                <div className="h-20 w-full flex items-center justify-center mb-3 p-2 bg-white rounded-lg shadow-sm group-hover:shadow transition-all">
                    {item.image ? (
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="max-h-full max-w-full object-contain"
                        />
                    ) : (
                        <div className="text-muj-orange font-bold text-xl">{index + 1}</div>
                    )}
                </div>
                <h3 className="text-sm font-bold text-gray-800 group-hover:text-muj-orange transition-colors mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.subtitle}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Accolades;