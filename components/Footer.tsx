import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 pb-24 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-gray-800 pb-8">
          <div>
            <h4 className="text-white font-bold mb-4">Manipal University Jaipur</h4>
            <p className="text-sm">Dehmi Kalan, Off Jaipur-Ajmer Expressway,<br/>Jaipur, Rajasthan 303007</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <p className="text-sm">Phone: 9886895560</p>
            <p className="text-sm">Email: info@muj.onlinemanipal.com</p>
          </div>
          <div>
             <h4 className="text-white font-bold mb-4">Quick Links</h4>
             <ul className="text-sm space-y-2">
                 <li><a href="#" className="hover:text-white">Admission Process</a></li>
                 <li><a href="#" className="hover:text-white">Fee Structure</a></li>
                 <li><a href="#" className="hover:text-white">Sample Certificate</a></li>
             </ul>
          </div>
        </div>
        
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