import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 pb-24 md:pb-6">
      <div className="container mx-auto px-4">
        <div className="text-center text-xs text-gray-500">
          <p className="mb-2">
            Disclaimer: We, Marvell Education, act as a marketing service partner only. Manipal University hold full rights to request change or removal of any non-relevant content. Images used are for illustrative purposes and do not directly represent the respective colleges or universities.
          </p>
          <p>
            The mentioned recruiters have expressed interest in MUJ Online students. This does not guarantee job offers or placements.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;