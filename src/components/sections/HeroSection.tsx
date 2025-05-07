import Image from "next/image";
import DecorativeElement from "../common/DecorativeElement";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 bg-white">
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-[60px] flex flex-col md:flex-row items-center justify-between ">
        <div className="flex flex-col">
          <Image src="/images/icons/dot.svg" alt="Xidmətlər" width={40} height={40} className="object-contain mb-6 sm:mb-8 md:mb-10" />
          <div className="flex items-center space-x-2 mb-3 sm:mb-4">
            <h1 className="text-[36px] leading-[44px] sm:text-[48px] sm:leading-[56px] md:text-[60px] md:leading-[72px] lg:text-[72px] lg:leading-[84px] font-normal">
              Xidmətlərimiz
            </h1>
          </div>
          <p className="text-[14px] leading-[20px] sm:text-[15px] sm:leading-[22px] md:text-[16px] md:leading-[24px] font-normal w-[90%] sm:w-[80%] md:w-[100%] lg:w-[90%]">
            Şirkət daxilindəki prosesləri və müştərilərlə əlaqəni avtomatlaşdırılmış şəkildə həyata keçirtmək və
            bazarda innovativ şəkildə inkişaf etmək üçün bizim xidmətlərdən yararlanın.
          </p>
        </div>
        <div className="relative hidden justify-end md:block">
          <DecorativeElement />
        </div>
      </div>
      <hr className="border-t border-black w-[92%]  mx-auto mt-6 sm:mt-8 md:mt-10" />
    </section>
  );
};

export default HeroSection;