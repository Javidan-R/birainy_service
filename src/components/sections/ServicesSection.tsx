"use client";
import Image from "next/image";
import { useState, useMemo } from "react";
import { services } from "@/lib/services";
import Accordion from "../common/Accordion";
import CTAButtons from "./CTAButtons";

const ServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<number>(services[0].id);
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(services[0].id);
  const [activeSubServiceTitle, setActiveSubServiceTitle] = useState<string | null>(null);

  const activeService = useMemo(
    () => services.find((s) => s.id === activeServiceId) || services[0],
    [activeServiceId]
  );

  const activeSubService = useMemo(() => {
    if (!activeSubServiceTitle || !activeService.subServices) return null;
    return activeService.subServices.find((sub) => sub.title === activeSubServiceTitle) || null;
  }, [activeSubServiceTitle, activeService]);

  const displayedContent = useMemo(() => {
    if (activeSubService) {
      return {
        title: activeSubService.title,
        description: activeSubService.description || activeService.description,
        image: activeSubService.image,
        youtubeUrl: activeSubService.youtubeUrl,
      };
    }
    return {
      title: activeService.title,
      description: activeService.description,
      image: activeService.image,
      youtubeUrl: undefined,
    };
  }, [activeService, activeSubService]);

  const handleSelect = (title: string) => {
    setActiveSubServiceTitle(title);
  };

  const handleToggle = (id: number) => {
    const isSame = openAccordionId === id;
    setOpenAccordionId(isSame ? null : id);
    setActiveServiceId(id);
    setActiveSubServiceTitle(null); 
  };

  const renderMedia = () => {
    // Media yalnız alt xidmətlərdə varsa göstərilir
    if (activeSubService?.youtubeUrl) {
      return (
        <iframe
          src={`${activeSubService.youtubeUrl}?autoplay=1&mute=1`}
          title={activeSubService.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-md w-full max-w-[600px] sm:max-w-[700px] md:max-w-[841px] min-h-[150px] sm:min-h-[200px] md:min-h-[300px] lg:min-h-[524px]"
        />
      );
    } else if (activeSubService?.image) {
      return (
        <Image
          src={activeSubService.image}
          alt={activeSubService.title}
          width={841}
          height={524}
          className="w-full max-w-[600px] sm:max-w-[700px] md:max-w-[841px] min-h-[150px] sm:min-h-[200px] md:min-h-[300px] lg:min-h-[524px] object-contain rounded-lg"
        />
      );
    }
    return null;
  };

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-white">
      <div className="flex flex-col lg:flex-row items-start px-[32px] lg:px-[60px] md:px-[40px] gap-12">
        {/* Sol Sticky Menyu */}
        <div className="w-full lg:w-[30%] xl:w-1/3 md:sticky md:top-24 space-y-2">
          {services.map((service) => (
            <Accordion
              key={service.id}
              service={service}
              isOpen={openAccordionId === service.id}
              onToggle={handleToggle}
              onSelect={handleSelect}
              activeSubService={activeSubServiceTitle}
            />
          ))}
        </div>

        {/* Sağ Aktiv Məzmun */}
        <div className="w-full lg:w-[70%] xl:w-2/3 flex flex-col space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
            {displayedContent.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">{displayedContent.description}</p>

          <CTAButtons />

          {/* Media Bölməsi */}
          {renderMedia() && <div className="mt-6 sm:mt-8">{renderMedia()}</div>}

          {/* Kartlar */}
          {activeService?.cards && (
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {activeService.cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#f5f5f7] rounded-xl overflow-hidden flex flex-col justify-between"
                >
                  <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-0">
                    <h3 className="text-base sm:text-lg font-[400]">{card.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base  w-[90%] ">{card.description}</p>
                  </div>
                  <div className="w-full h-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={150}
                      height={182}
                      className="w-[80%] object-contain rounded-lg ml-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;