"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Xidmətlərimiz" },
    { href: "/projects", label: "Layihələr" },
    { href: "/analytics", label: "Analitika" },
    { href: "/blog", label: "Bloq" },
    { href: "/about", label: "Biz kimik?" },
  ];

  const socialIcons = [
    { src: "/images/icons/instagram.svg", alt: "Instagram", href: "https://instagram.com" },
    { src: "/images/icons/linkedin.svg", alt: "LinkedIn", href: "https://linkedin.com" },
    { src: "/images/icons/tiktok.svg", alt: "TikTok", href: "https://tiktok.com" },
  ];

  return (
    <header className="bg-white shadow-md py-6 w-full md:static md:top-auto md:left-auto top-0 left-0 z-50 md:z-auto fixed">
      <div className="px-8 sm:px-8 lg:px-20 mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className=" ">
          <Image src="/images/logo.svg" alt="Birainy Logo" width={120} height={40} priority />
        </Link>

        {/* Desktop Naviqasiya və Sağ Tərəf */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-6 py-3 flex-1 justify-between">
          {/* Naviqasiya */}
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-yellow-500 text-base font-normal transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Sosial Media və CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-3">
              {socialIcons.map((icon, index) => (
                <div key={icon.alt} className="flex items-center gap-3">
                  <Link
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label={icon.alt}
                  >
                    <Image src={icon.src} alt={icon.alt} width={24} height={24} priority />
                  </Link>
                  {index < socialIcons.length - 1 && (
                    <div className="w-px h-6 bg-gray-500" />
                  )}
                </div>
              ))}
            </div>

            <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 text-base font-normal transition-colors duration-200">
              Bizimlə əlaqə saxlayın
            </button>
            <button className="hover:opacity-80 transition-opacity" aria-label="Dil seçimi">
              <Image src="/images/icons/globe.svg" alt="Dil seçimi" width={24} height={24} priority />
            </button>
          </div>
        </div>

        {/* Mobil Menyu Düyməsi və Globe İkonu */}
        <div className="flex items-center gap-4 md:hidden  ">
          <button className="hover:opacity-80 transition-opacity" aria-label="Dil seçimi">
            <Image src="/images/icons/globe.svg" alt="Dil seçimi" width={24} height={24} priority />
          </button>
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menyunu bağla" : "Menyunu aç"}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobil Menyu */}
      <div
        className={`md:hidden fixed left-0 w-full px-8 bg-white shadow-md flex flex-col items-start space-y-6 py-6 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "top-16 h-[calc(100vh-20px)] opacity-100" : "top-20 h-0 opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-black  text-[28px] leading-[36px] font-bold transition-colors duration-200 "
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
         <Link  href={"/contact"}             className="text-black  text-[28px] leading-[36px] font-bold transition-colors duration-200 "
>
            Bizimlə əlaqə
          </Link>
        <div>
            <p className="text-[#555] text-[20px] leading-[30px] font-normal">Bizi izləyin</p>
              <div className="flex items-center gap-4">
        
          {socialIcons.map((icon, index) => (
            <div key={icon.alt} className="flex items-center gap-3 my-4 "> 
              <Link
              key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 transition-opacity border border-gray-500 hover:opacity-100 p-2 rounded-md"
                aria-label={icon.alt}
              >
                <Image src={icon.src} alt={icon.alt} width={20} height={20} priority />
              </Link>
             
            </div>
          ))}
         
        </div>
        </div>
        <div>
          <Image src={"/images/academy_banner.webp"} alt="academy" width={608} height={134} className="rounded-md object-cover" />
        </div>
      
      </div>
    </header>
  );
};

export default Header;