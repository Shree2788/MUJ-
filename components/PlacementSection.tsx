import React from 'react';
import Button from './Button';

interface PlacementSectionProps {
  onCtaClick: () => void;
}

const PlacementSection: React.FC<PlacementSectionProps> = ({ onCtaClick }) => {
  const recruiterImages = [
    "Accenture", "AllStates", "Bajaj-Alliance", "Cardekho", "Colive", "DIAGEO", "EY", "Fincar",
    "Goldman-Sachs", "GRG-Health", "HDFC-ERGO", "Hexa-Health", "HP", "Infinity-Learn", "Jogo",
    "Lencekart", "LTIMintree", "Manipal-Hospitals", "Meddi-Assist", "Nobrocker", "PlanetSpark",
    "pregrad", "Quess", "rippeling", "russeltobin", "SBI-Securities", "SportDunia", "Sutherland",
    "Team-Lease"
  ].map(name => ({
      name: name.replace('-', ' '),
      url: `https://marvelleducation.com/wp-content/uploads/${name}.png`
  }));

  // Split logos into two rows
  const midPoint = Math.ceil(recruiterImages.length / 2);
  const row1 = recruiterImages.slice(0, midPoint);
  const row2 = recruiterImages.slice(midPoint);

  // Duplicate for seamless loop
  const logos1 = [...row1, ...row1];
  const logos2 = [...row2, ...row2];

  return (
    <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Placement Assistance</h2>
          <div className="w-20 h-1 bg-muj-orange mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our dedicated placement cell provides 100% placement assistance to all eligible students. 
            From resume building to mock interviews, we prepare you for the corporate world.
          </p>
        </div>

        {/* 
          Cards Section 
          - Mobile: Flex container with overflow-x-auto for horizontal scroll
          - Desktop: Grid layout
        */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-8 mb-10 pb-6 md:pb-0 hide-scrollbar snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0">
            <div className="min-w-[85vw] md:min-w-0 bg-gray-50 p-6 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow snap-center">
                <div className="w-14 h-14 bg-orange-100 text-muj-orange rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">📄</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Resume Building</h3>
                <p className="text-gray-500 text-sm">Expert guidance to craft a professional resume that stands out.</p>
            </div>
            <div className="min-w-[85vw] md:min-w-0 bg-gray-50 p-6 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow snap-center">
                <div className="w-14 h-14 bg-orange-100 text-muj-orange rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🤝</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Mock Interviews</h3>
                <p className="text-gray-500 text-sm">One-on-one sessions to refine your interview skills and confidence.</p>
            </div>
            <div className="min-w-[85vw] md:min-w-0 bg-gray-50 p-6 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow snap-center">
                <div className="w-14 h-14 bg-orange-100 text-muj-orange rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">💼</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Job Portal</h3>
                <p className="text-gray-500 text-sm">Exclusive access to job openings from our 500+ hiring partners.</p>
            </div>
        </div>

        <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wide">Our Hiring Partners</h3>
            
            {/* Row 1 */}
            <div className="relative w-full overflow-hidden py-4 bg-gray-50/50 mb-4">
                <div className="flex w-max animate-scroll items-center">
                    {logos1.map((logo, idx) => (
                        <div key={idx} className="flex-shrink-0 mx-6 md:mx-10 w-32 h-20 flex items-center justify-center transition-all">
                             <img 
                                src={logo.url} 
                                alt={logo.name} 
                                className="max-w-full max-h-full object-contain"
                                loading="lazy"
                                onError={(e) => {
                                    // Fallback to text if image fails
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    if(target.parentElement) {
                                        target.parentElement.innerText = logo.name;
                                        target.parentElement.className = "flex-shrink-0 mx-8 font-bold text-gray-400 text-sm whitespace-nowrap";
                                    }
                                }}
                             />
                        </div>
                    ))}
                </div>
                {/* Fade edges */}
                <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>

            {/* Row 2 */}
            <div className="relative w-full overflow-hidden py-4 bg-gray-50/50 mb-8">
                <div className="flex w-max animate-scroll items-center">
                    {logos2.map((logo, idx) => (
                        <div key={idx} className="flex-shrink-0 mx-6 md:mx-10 w-32 h-20 flex items-center justify-center transition-all">
                             <img 
                                src={logo.url} 
                                alt={logo.name} 
                                className="max-w-full max-h-full object-contain"
                                loading="lazy"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    if(target.parentElement) {
                                        target.parentElement.innerText = logo.name;
                                        target.parentElement.className = "flex-shrink-0 mx-8 font-bold text-gray-400 text-sm whitespace-nowrap";
                                    }
                                }}
                             />
                        </div>
                    ))}
                </div>
                {/* Fade edges */}
                <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
               <Button onClick={onCtaClick} className="shadow-lg shadow-orange-100 px-8">
                  Download Placement Report
               </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;