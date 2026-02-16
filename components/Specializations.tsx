import React from 'react';

const Specializations: React.FC = () => {
  const specs = [
    "Finance", "Marketing", "Human Resource Management", "Analytics & Data Science",
    "IT & FinTech", "Operations Management", "International Business", "Information System Management",
    "Project Management", "Banking, Financial Services & Insurance",
    "Digital Marketing", "Retail Management"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose from 13 Career-Focused Specializations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailor your MBA to your career goals with our diverse range of electives designed for the modern industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {specs.map((spec, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-md border-l-4 border-transparent hover:border-muj-orange transition-all cursor-default group">
              <div className="flex items-start justify-between">
                <span className="font-semibold text-gray-800 group-hover:text-muj-purple transition-colors">{spec}</span>
                <span className="text-gray-300 text-xl font-bold opacity-30">{(idx + 1).toString().padStart(2, '0')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;