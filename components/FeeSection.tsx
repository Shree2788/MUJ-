import React from 'react';
import Button from './Button';

interface FeeProps {
  onCtaClick: () => void;
}

const FeeSection: React.FC<FeeProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-indigo-900 to-muj-purple rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Affordable & Flexible Fee Structure</h2>
              <p className="text-indigo-200 mb-6">Invest in your future without the financial burden.</p>
              
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-3">
                   <div className="bg-green-500 rounded-full p-1"><svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                   <span className="font-medium">No Cost EMI Available</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="bg-green-500 rounded-full p-1"><svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                   <span className="font-medium">Scholarships for Defense, Differently Abled & Meritorious</span>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-800 rounded-xl p-6 md:p-8 w-full md:w-auto min-w-[300px] text-center shadow-lg">
              <p className="text-gray-500 uppercase text-xs font-bold tracking-wider mb-2">Starting at just</p>
              <h3 className="text-4xl font-extrabold text-muj-orange mb-1">₹6,198</h3>
              <p className="text-sm text-gray-500 mb-6">per month (EMI)</p>
              
              <div className="border-t border-gray-100 pt-4 mb-6">
                 <p className="text-sm text-gray-600">Total Course Fee: <span className="font-bold">₹1,75,000</span></p>
                 <p className="text-xs text-gray-400">(or ₹43,750 / semester)</p>
              </div>

              <Button onClick={onCtaClick} fullWidth>
                Check Scholarship Eligibility
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeSection;