import React, { useState } from 'react';
import { FAQItem } from '../types';

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "Is the Online MBA from Manipal University Jaipur recognized?",
      answer: "Yes, the Online MBA program is entitled by UGC, accredited by NAAC with A+ grade, and AICTE approved. The degree is equivalent to an on-campus degree for jobs and higher education."
    },
    {
      question: "What is the duration of the program?",
      answer: "The program is for a minimum of 2 years (4 semesters) and a maximum of 4 years."
    },
    {
      question: "Are there any EMI options available?",
      answer: "Yes, we offer easy financing options including No-Cost EMIs starting at ₹6,198 per month to make quality education accessible."
    },
    {
      question: "How are the exams conducted?",
      answer: "Examinations are held online and are computer-based and proctored. You can take them from the comfort of your home using a laptop/desktop with a webcam."
    },
    {
        question: "Is there placement assistance?",
        answer: "Yes, we provide robust placement assistance including resume building, mock interviews, and access to a placement portal with 500+ hiring partners."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                <span className={`transform transition-transform duration-300 text-muj-orange font-bold text-xl ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-4 bg-white text-gray-600 border-t border-gray-100 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;