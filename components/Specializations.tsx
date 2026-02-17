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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose from 13 Career-Focused Specializations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Tailor your MBA to your career goals with our diverse range of electives designed for the modern industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {specs.map((spec, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg shadow hover:shadow-lg border-l-4 border-muj-light-purple hover:border-muj-orange transition-all cursor-default group flex items-center justify-between">
                <span className="font-semibold text-gray-800 group-hover:text-muj-purple transition-colors">{spec}</span>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-xs font-bold text-gray-300 group-hover:bg-muj-orange group-hover:text-white transition-all">
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