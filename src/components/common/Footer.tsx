"use client";
import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/lib/services";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className=" mx-auto xl:px-20 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-[48px] leading-[58px] font-bold max-w-[320px] md:max-w-[400px] text-center md:text-left">
            Bizimlə indi əlaqəyə keçin
          </h2>
          <h3 className="text-[18px] leading-[24px] font-bold mt-4 md:mt-0 hidden md:block">Bizi İzləyin</h3>
        </div>

        <div className="flex flex-col md:flex-row justify-between lg:items-center items-start space-y-8 md:space-y-0">
          {/* Naviqasiya */}
          <div className="py-6">
            <nav className="flex flex-col md:flex-row justify-center md:justify-start gap-6">
              <Link href="/services" className="text-[18px] leading-[23px] font-bold hover:text-gray-300">
                Xidmətlərimiz
              </Link>
              <Link href="/projects" className="text-[18px] leading-[23px] font-bold hover:text-gray-300">
                Layihələr
              </Link>
              <Link href="/analytics" className="text-[18px] leading-[23px] font-bold hover:text-gray-300">
                Analitika
              </Link>
              <Link href="/blog" className="text-[18px] leading-[23px] font-bold hover:text-gray-300">
                Blog
              </Link>
              <Link href="/about" className="text-[18px] leading-[23px] font-bold hover:text-gray-300">
                Haqqımızda
              </Link>
            </nav>
          </div>
          <h3 className="text-[18px] leading-[24px] font-bold mt-4 md:mt-0 md:hidden block">Bizi İzləyin</h3>

          {/* Sosial Media */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center rounded-full w-16 h-16 border border-white/50 hover:border-white transition-colors"
                aria-label="Instagram"
              >
                <Image src="/images/icons/instagram_white.svg" alt="Instagram" width={24} height={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center rounded-full w-16 h-16 border border-white/50 hover:border-white transition-colors"
                aria-label="LinkedIn"
              >
                <Image src="/images/icons/linkedin_white.svg" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center rounded-full w-16 h-16 border border-white/50 hover:border-white transition-colors"
                aria-label="TikTok"
              >
                <Image src="/images/icons/tiktok_white.svg" alt="TikTok" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Əlaqə Məlumatları */}
        <div className="grid
    grid-cols-3
    gap-20
    pb-12
    mt-12
    max-[1560px]:[grid-template-columns:2fr_2fr_1fr]
     max-[1280px]:grid-cols-2
    max-[993px]:[column-gap:48px]">
          {contactInfo.map((info, index) => (
            <div key={index} className=" text-left">
              <h3 className="md:text-[20px] text-[16px] leading-[30px] md:leading-[24px] font-normal mb-4">{info.country}</h3>
              <p className="md:text-[16px] text-[14px] leading-[24px] md:leading-[20px] text-[#99a1af] max-w-[320px] mx-auto md:mx-0">
                {info.address}
              </p>
            </div>
          ))}
        </div>


        {/* Əlaqə Məlumatları */}
        <div className="mt-8 flex flex-col md:flex-row justify-between  md:items-center items-start  gap-6 border-t border-[#efefef] pt-8">
          <div className="flex  justify-start items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src="/images/icons/partner.svg" alt="Partner with" width={39} height={40} />
              <p className="text-[18px] leading-[24px] font-normal">Partner with</p>
            </div>
            <Image src="/images/microsoft.svg" alt="Microsoft Partner" width={120} height={40} />
          </div>

          <div className="flex flex-row flex-wrap gap-4 items-center gap-4">
            <a href="tel:+994124886654" className="text-[16px] leading-[24px] font-bold hover:text-gray-300">
              +994 12 488 66 54
            </a>
            <a href="tel:+994776131317" className="text-[16px] leading-[24px] font-bold hover:text-gray-300">
              +994 77 613 13 17
            </a>
            <a href="mailto:info@birainy.com" className="text-[16px] leading-[24px] font-bold hover:text-gray-300">
              info@birainy.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;