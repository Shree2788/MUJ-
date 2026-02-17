import React from 'react';
import Button from './Button';

interface FeeProps {
  onCtaClick: () => void;
}

const FeeSection: React.FC<FeeProps> = ({ onCtaClick }) => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Changed gradient to Orange theme */}
        <div className="bg-gradient-to-br from-orange-600 to-red-500 rounded-2xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-20 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-yellow-400 opacity-20 rounded-full blur-xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Affordable & Flexible Fee Structure</h2>
              <p className="text-orange-50 mb-4 font-medium text-lg">Invest in your future without the financial burden.</p>
              
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-3">
                   <div className="bg-white/20 rounded-full p-1"><svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                   <span className="font-medium">No Cost EMI Available</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="bg-white/20 rounded-full p-1"><svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                   <span className="font-medium">Scholarships for Defense, Differently Abled & Meritorious</span>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-800 rounded-xl p-6 md:p-8 w-full md:w-auto min-w-[300px] text-center shadow-lg">
              <p className="text-gray-500 uppercase text-xs font-bold tracking-wider mb-1">Starting at just</p>
              <h3 className="text-4xl font-extrabold text-muj-orange mb-1">₹6,198</h3>
              <p className="text-sm text-gray-500 mb-4">per month (EMI)</p>
              
              <div className="border-t border-gray-100 pt-4 mb-4">
                 <p className="text-sm text-gray-600">Total Course Fee: <span className="font-bold">₹1,75,000</span></p>
                 <p className="text-xs text-gray-400">(or ₹43,750 / semester)</p>
              </div>

              <Button onClick={onCtaClick} fullWidth className="bg-gray-900 hover:bg-gray-800">
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