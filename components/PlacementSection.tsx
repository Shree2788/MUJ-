import React from 'react';

const PlacementSection: React.FC = () => {
  // Using text representation for logos to avoid external dependency issues, 
  // or simple colored boxes with text for a clean look.
  const recruiters = [
    "Amazon", "Deloitte", "Microsoft", "KPMG", "Accenture", 
    "HDFC Bank", "Infosys", "TCS", "Wipro", "Capgemini",
    "IBM", "American Express"
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Placement Assistance</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our dedicated placement cell provides 100% placement assistance to all eligible students. 
            From resume building to mock interviews, we prepare you for the corporate world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-100">
                <div className="w-12 h-12 bg-muj-orange/10 text-muj-orange rounded-full flex items-center justify-center mx-auto mb-4 text-xl">📄</div>
                <h3 className="font-bold text-lg mb-2">Resume Building</h3>
                <p className="text-gray-500 text-sm">Expert guidance to craft a professional resume that stands out.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-100">
                <div className="w-12 h-12 bg-muj-orange/10 text-muj-orange rounded-full flex items-center justify-center mx-auto mb-4 text-xl">🤝</div>
                <h3 className="font-bold text-lg mb-2">Mock Interviews</h3>
                <p className="text-gray-500 text-sm">One-on-one sessions to refine your interview skills and confidence.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-100">
                <div className="w-12 h-12 bg-muj-orange/10 text-muj-orange rounded-full flex items-center justify-center mx-auto mb-4 text-xl">💼</div>
                <h3 className="font-bold text-lg mb-2">Job Portal</h3>
                <p className="text-gray-500 text-sm">Exclusive access to job openings from our 500+ hiring partners.</p>
            </div>
        </div>

        <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-8 uppercase tracking-wide">Our Hiring Partners</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-70">
                {recruiters.map((company, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 px-6 py-3 rounded-lg shadow-sm font-bold text-gray-600 hover:text-muj-purple hover:border-muj-purple transition-colors cursor-default">
                        {company}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;