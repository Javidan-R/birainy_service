"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const DecorativeElement: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="block relative right-0 top-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-[136px] h-[136px] bg-black rounded-full transition-all duration-300">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/icons/direction.svg"
            alt="direction"
            width={58}
            height={46}
            className={`transition-transform duration-300 ${isHovered ? 'rotate-0' : 'rotate-[-45deg]'}`}
          />
        </div>

        <svg
          viewBox="0 0 100 100"
          width="136"
          height="136"
          className={`absolute top-0 left-0 spin-container ${isHovered ? 'paused' : ''}`}
        >
          <defs>
            <path
              id="circle"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <g className="spin-group">
            <text fontSize="10" fill="white" fontFamily="sans-serif">
              <textPath href="#circle" startOffset="0%">
                SİFARİŞ ET ⚡ SİFARİŞ ET ⚡ SİFARİŞ ET ⚡ SİFARİŞ ET ⚡
              </textPath>
            </text>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="8s"
              repeatCount="indefinite"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DecorativeElement;