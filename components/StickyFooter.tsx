import React from 'react';
import Button from './Button';

interface StickyFooterProps {
  onDownload: () => void;
  onCounseling: () => void;
}

const StickyFooter: React.FC<StickyFooterProps> = ({ onDownload, onCounseling }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 z-50 md:hidden flex gap-3">
      <Button 
        variant="outline" 
        className="flex-1 py-3 text-xs font-bold border-muj-orange text-muj-orange" 
        onClick={onCounseling}
      >
        Free Counselling
        <span className="block text-[10px] font-normal text-gray-500 mt-1">Get Expert Guidance</span>
      </Button>
      <Button 
        className="flex-1 py-3 text-xs font-bold bg-muj-orange text-white" 
        onClick={onDownload}
      >
        Download Brochure
        <span className="block text-[10px] font-normal text-orange-100 mt-1">Detailed Syllabus</span>
      </Button>
    </div>
  );
};

export default StickyFooter;