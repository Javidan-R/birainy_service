import React from 'react';
import Image from 'next/image';

const CTAButtons: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-start">
      <button
        className="bg-[#f7d000] text-black px-8 py-3 rounded-lg text-base font-normal transition-colors duration-200 flex items-center space-x-2 md:w-auto"
      >
        <Image src="/images/icons/phone.svg" alt="Phone" width={24} height={24} />
        <span>Bizimlə əlaqə saxlayın</span>
      </button>
      <button
        className="bg-gray-200 text-[#000005] px-8 py-3 rounded-lg text-base font-normal transition-colors duration-200 flex items-center space-x-2  md:w-auto"
      >
        <Image src="/images/icons/projects.svg" alt="Eye" width={24} height={24} />
        <span>İşlərimizə nəzər yetirin</span>
      </button>
    </div>
  );
};

export default CTAButtons;