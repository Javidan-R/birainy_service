"use client";
import Image from 'next/image';
import { Service } from '@/types';

interface AccordionProps {
  service: Service;
  isOpen: boolean;
  onToggle: (id: number) => void;
  onSelect: (title: string, description: string, image?: string, youtubeUrl?: string) => void;
  activeSubService: string | null;
}

const Accordion: React.FC<AccordionProps> = ({ service, isOpen, onToggle, onSelect, activeSubService }) => {
  const hideIcons = service.title === 'Saytların yaradılması';

  return (
    <div className="border  border-gray-200 rounded-[12px] mb-2 transition-colors duration-300 cursor-pointer hover:border-[#f7cf00]">
      <div
        className={`flex justify-between items-center px-[32px] py-[24px] bg-gray-50 ${isOpen ? 'rounded-t-[12px]' : 'rounded-[12px]'}`}
        onClick={() => {
          onToggle(service.id);
          onSelect(service.title, service.description, service.image);
        }}
      >
        <span className={`text-[24px] leading-[32px] font-medium ${isOpen ? 'text-black' : 'text-[#808081]'}`}>
          {service.title}
        </span>
        {!hideIcons && (
          <span className="flex items-center ">
            {isOpen ? (
              <Image src="/images/icons/minus.svg" alt="Minus Icon" width={32} height={32} />
            ) : (
              <Image src="/images/icons/plus.svg" alt="Plus Icon" width={32} height={32} />
            )}
          </span>
        )}
      </div>
      {isOpen && service.subServices && (
        <div className="px-6 font-sans py-4 space-y-2 bg-gray-50 border-t-2 border-gray-200 rounded-b-[12px]">
          {service.subServices.map((subService, index) => (
            <div
              key={index}
              className={`text-[20px] leading-[24px] cursor-pointer ${
                activeSubService === subService.title ? 'text-black' : 'text-[#808081]'
              } transition-colors duration-200 py-2`}
              onClick={() =>
                onSelect(subService.title, subService.description || '', subService.image, subService.youtubeUrl)
              }
            >
              {subService.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
