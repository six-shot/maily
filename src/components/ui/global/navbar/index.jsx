import Image from "next/image";
import React from "react";
import maily from "../../../../../public/maily.svg";
import menu from "../../../../../public/menu.svg"
export default function Navbar() {
  return (
    <div className="flex justify-between  w-full tablet:px-0 px-[29px] tablet:pt-0 pt-8 font-[family-name:var(--font-inter)]">
      <div className="tablet:hidden  w-[60px] h-[60px] bg-white shadow-[0px_2px_0px_0px_#B7B7B7,_inset_0px_5px_14px_0px_rgba(255,255,255,0.5)]  rounded-[18px] flex justify-center items-center">
        <Image src={maily} alt="Next.js logo" />
      </div>
      <div className="px-1.5 h-[61px] bg-white rounded-[18px] tablet:hidden flex gap-1.5 items-center">
        <button className="relative px-10 h-[48px] text-white text-base rounded-[15px] bg-black shadow-[0px_2px_0px_0px_#B7B7B7,_inset_0px_5px_14px_0px_rgba(255,255,255,0.5)] font-medium overflow-hidden">
          <span className="relative z-10">Start Today</span>
          <div className="shine-effect absolute top-1/2 -translate-y-1/2 w-[298px] h-[298px] rotate-45 opacity-40 bg-[radial-gradient(99.24%_17%_at_50%_50%,rgba(255,255,255,0.5)_0%,rgba(68,68,68,0)_100%)] blur-[5px]" />
        </button>
        <div className="w-[48px] h-[48px] menu-bg flex justify-center items-center">
      <Image src={menu} className="mt-1" alt="menu"/>
        </div>
      </div>
      <div className="mt-8 tablet:flex  hidden  h-[60px] bg-white px-1.5 rounded-[18px]  gap-[56px] items-center font-[family-name:var(--font-inter)] w-full">
        <Image className="" src={maily} alt="Next.js logo" />
        <nav className="tablet:flex hidden">
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
    </div>
  );
}
