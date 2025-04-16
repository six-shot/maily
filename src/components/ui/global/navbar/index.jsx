import Image from 'next/image';
import React from 'react'
import maily from "../../../../../public/maily.svg"

export default function Navbar() {
  return (
    <div className="mt-8  h-[60px] bg-white px-1.5 rounded-[18px] flex gap-[56px] items-center font-[family-name:var(--font-inter)]">
      <Image className="" src={maily} alt="Next.js logo" />
      <nav>
        <ul className="flex items-center gap-[48px]  text-base">
          <li className="text-black">Home</li>
          <li className="text-black/60">Solutions</li>
          <li className="text-black/60">Pricing</li>
          <li className="text-black/60">Contact</li>
        </ul>
      </nav>
      <button className="relative px-10 h-[48px] text-white text-base rounded-[15px] bg-black shadow-[0px_2px_0px_0px_#B7B7B7,_inset_0px_5px_14px_0px_rgba(255,255,255,0.5)] font-medium overflow-hidden">
        <span className="relative z-10">Start Today</span>
        <div className="shine-effect absolute top-1/2 -translate-y-1/2 w-[298px] h-[298px] rotate-45 opacity-40 bg-[radial-gradient(99.24%_17%_at_50%_50%,rgba(255,255,255,0.5)_0%,rgba(68,68,68,0)_100%)] blur-[5px]" />
      </button>
    </div>
  );
}
