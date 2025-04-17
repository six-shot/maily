import Image from "next/image";
import svg from "../../public/maily.svg";
import bg2 from "../../public/bg2.png";
import Navbar from "@/components/ui/global/navbar";
import one from "../../public/first.png";
import second from "../../public/second.png";
import third from "../../public/third.png";
import mask from "../../public/mask.svg";
import blur from "../../public/Blur.png";
import right from "../../public/right.svg";
import left from "../../public/left.svg";
import mail1 from "../../public/mail1.avif";
export default function Home() {
  return (
    <div>
      <div className="hero-bg h-[847px] bg relative">
        <div className="absolute -top-[325px] w-[1558px] h-[1558px] border border-[rgba(255,255,255,0.59)] rounded-full flex justify-center items-center ">
          <div className="w-[1223px] h-[1223px] border border-[rgba(255,255,255,0.59)] rounded-full flex justify-center items-center relative">
            <Image
              src={mail1}
              alt="mail"
              className="absolute bottom-[15%] left-[2%] w-[267px] h-[171px] rotate-[34deg] blur-[2px]"
            />
            <Image
              src={mail1}
              alt="mail"
              className="absolute bottom-[10%] -right-[17%] w-[337px] h-[216px] rotate-[-28deg] blur-[5px]"
            />
            <Image
              src={mail1}
              alt="mail"
              className="absolute top-[11%] -right-[24%] w-[337px] h-[216px] rotate-[3deg] blur-[8px]"
            />
            <Image
              src={mail1}
              alt="mail"
              className="absolute top-[22%] -left-[0%] w-[151px] h-[101px] rotate-[12deg] blur-[4px]"
            />
            <Image
              src={mail1}
              alt="mail"
              className="absolute top-[45%] left-[10%] w-[89px] h-[57px] rotate-[25deg] "
            />
            <Image
              src={mail1}
              alt="mail"
              className="absolute top-[45%] -right-[4%] w-[183px] h-[117px] rotate-[-33deg] "
            />
            <div className="w-[904px] h-[904px] border border-[rgba(255,255,255,0.59)] rounded-full  "></div>
          </div>
        </div>

        <div className="relative z-10">
          {" "}
          <Navbar />
        </div>
        <div className=" pl-[14px] pr-5 h-[68px] bg-white rounded-[100px] flex gap-2.5 items-center mt-[99px] relative z-10">
          <div className="flex items-center">
            <Image
              src={one}
              className="w-[44px] h-[44px] -mr-4 border border-[#FBFBF8] rounded-full first-bg relative z-10"
              alt="one"
            />
            <Image
              src={second}
              className="w-[44px] h-[44px] -mr-3 border border-[#FBFBF8] rounded-full second-bg relative z-[8]"
              alt="two"
            />
            <Image
              src={third}
              className="w-[44px] h-[44px] border border-[#FBFBF8] rounded-full third-bg relative "
              alt="three"
            />
          </div>
          <h6 className="text-black/70 text-[17px] font-[family-name:var(--font-inter)]">
            6,000+ people use our product
          </h6>
        </div>
        <div className=" z-10 flex flex-col items-center">
          <h1 className="mt-[38px] font-[family-name:var(--font-montserrat)] text-[90px] text-[rgba(255,255,255,0.94)] font-black leading-[90px] text-center ">
            The best email,
          </h1>
          <h1 className=" font-[family-name:var(--font-montserrat)] text-[90px] text-[rgba(255,255,255,0.94)] font-black leading-[90px] text-center relative">
            ever made.
            <Image
              src={right}
              alt="right"
              className="absolute -right-8 top-5"
            />
            <Image src={left} alt="left" className="absolute -left-11 top-1" />
          </h1>
          <p className="mt-[17px] text-[white]/70 text-[18px] font-[family-name:var(--font-inter)] leading-[27px]">
            Get real-time notifications with our email app, ensuring you
          </p>
          <p className=" text-[white] text-[18px] font-[family-name:var(--font-inter)] leading-[27px]">
            never miss an important message.
          </p>
          <div className="mt-[27px] flex gap-[19px] items-center">
            <button className="h-[65px] px-[60px] get-started-btn text-[22px] font-bold font-[family-name:var(--font-inter)] text-white">
              Get Started
            </button>
            <button className="h-[65px] px-[60px] explore-btn text-[22px] font-medium font-[family-name:var(--font-inter)] text-black">
              𝕏 Reach us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
