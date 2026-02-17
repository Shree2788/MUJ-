import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import LeadForm from './LeadForm';

const Specializations: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const specs = [
    "Finance", 
    "Marketing", 
    "Human Resource Management", 
    "Analytics & Data Science",
    "IT & FinTech", 
    "Operations Management", 
    "International Business", 
    "Information System Management",
    "Project Management", 
    "Banking, Financial Services & Insurance",
    "Digital Marketing", 
    "Retail Management",
    "Supply Chain Management"
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose from 13 Career-Focused Specializations</h2>
          <div className="w-20 h-1 bg-muj-orange mx-auto mb-4 rounded"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Tailor your MBA to your career goals with our diverse range of electives designed for the modern industry.
          </p>
        </div>

        {/* Updated Grid for Mobile: grid-cols-2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
          {specs.map((spec, idx) => (
            <div key={idx} className="bg-gray-50 p-4 md:p-5 rounded-lg border border-gray-100 hover:border-muj-orange hover:shadow-lg transition-all cursor-default group flex flex-col md:flex-row items-start md:items-center justify-between h-full">
                <span className="font-semibold text-gray-800 text-sm md:text-base group-hover:text-muj-orange transition-colors">{spec}</span>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:bg-muj-orange group-hover:text-white group-hover:border-muj-orange transition-all mt-2 md:mt-0 self-end md:self-auto shrink-0">
                    {idx + 1}
                </div>
            </div>
          ))}
        </div>

        <div className="text-center">
            <Button onClick={() => setIsModalOpen(true)} className="px-8 shadow-lg shadow-orange-200">
                Download Detailed Syllabus
            </Button>
            <p className="text-xs text-gray-500 mt-3">Get the complete semester-wise curriculum for all specializations</p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Download Syllabus">
        <LeadForm onSuccess={() => setIsModalOpen(false)} source="Specialization_Section" />
      </Modal>
    </section>
  );
};

export default Specializations;