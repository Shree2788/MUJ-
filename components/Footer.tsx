import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 pb-24 md:pb-6">
      <div className="container mx-auto px-4">
        <div className="text-center text-xs">
          <p className="mb-2">
            © 2026 Marvell Education. All degrees conferred by Manipal Online (UGC Recognised). 
            Marvell Education is an authorized enrollment partner.
          </p>
          <p className="text-gray-600">Disclaimer: The mentioned recruiters have expressed interest in MUJ Online students. This does not guarantee job offers or placements.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;