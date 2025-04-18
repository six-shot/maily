"use client";
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
import organize from "../../public/organize.png";
import testimonial from "../../public/testimonial.avif";
import samantha from "../../public/samantha.png";
import star from "../../public/star.png";
import cta from "../../public/cta.png";
import book from "../../public/book.png";
import organizee from "../../public/organise.png";
import Marquee from "react-fast-marquee";
import twitter from "../../public/x.svg";
import linkedin from "../../public/linkedin.svg"
import instagram from "../../public/instagram.svg"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Check from "./ui/check";
import footerMaily from "../../public/footer-maily.png";
import zoom from "../../public/zoom.png";
import tg from "../../public/tg.png";
import visa from "../../public/visa.png";
import notion from "../../public/notion.png";
import ms from "../../public/ms.png";
import vimeo from "../../public/vv.png";
import youtube from "../../public/youtube.png";
import bat from "../../public/bat.png"
import skip from "../../public/vimeo.png"
export default function Home() {
  const testimonials = [
    {
      name: "Samantha Collins",
      text: `I can't imagine running my day without it. The notifications are instant, and the categorization makes life much easier. A game-changer for staying organized!`,
      image: samantha,
      rating: 5,
    },
    {
      name: "James Parker",
      text: `It keeps my projects on track like nothing else. Easy to use, beautifully designed, and super reliable.`,
      image: samantha,
      rating: 4,
    },
    {
      name: "Aisha Khan",
      text: `Finally, an app that does what it promises. I'm more productive and less stressed. Total win.`,
      image: samantha,
      rating: 5,
    },
    {
      name: "Samantha Collins",
      text: `I can't imagine running my day without it. The notifications are instant, and the categorization makes life much easier. A game-changer for staying organized!`,
      image: samantha,
      rating: 5,
    },
    {
      name: "James Parker",
      text: `It keeps my projects on track like nothing else. Easy to use, beautifully designed, and super reliable.`,
      image: samantha,
      rating: 4,
    },
    {
      name: "Aisha Khan",
      text: `Finally, an app that does what it promises. I'm more productive and less stressed. Total win.`,
      image: samantha,
      rating: 5,
    },
    {
      name: "Samantha Collins",
      text: `I can't imagine running my day without it. The notifications are instant, and the categorization makes life much easier. A game-changer for staying organized!`,
      image: samantha,
      rating: 5,
    },
    {
      name: "James Parker",
      text: `It keeps my projects on track like nothing else. Easy to use, beautifully designed, and super reliable.`,
      image: samantha,
      rating: 4,
    },
    {
      name: "Aisha Khan",
      text: `Finally, an app that does what it promises. I'm more productive and less stressed. Total win.`,
      image: samantha,
      rating: 5,
    },
    {
      name: "Samantha Collins",
      text: `I can't imagine running my day without it. The notifications are instant, and the categorization makes life much easier. A game-changer for staying organized!`,
      image: samantha,
      rating: 5,
    },
    {
      name: "James Parker",
      text: `It keeps my projects on track like nothing else. Easy to use, beautifully designed, and super reliable.`,
      image: samantha,
      rating: 4,
    },
    {
      name: "Aisha Khan",
      text: `Finally, an app that does what it promises. I'm more productive and less stressed. Total win.`,
      image: samantha,
      rating: 5,
    },
  ];
  const pricingTiers = [
    {
      name: "Basic",
      price: "$0",
      description: "All the email basics in one package.",
      features: [
        "Unlimited mails",
        "2 Team members",
        "30 AI credits per month",
        "Scheduling",
        "Privacy reports",
      ],
      cta: "Get started today",
    },
    {
      name: "Premium",
      price: "$30",
      description: "More power for growing teams.",
      features: [
        "Everything in Basic",
        "10 Team members",
        "200 AI credits per month",
        "Priority support",
        "Advanced analytics",
      ],
      cta: "Upgrade to Premium",
    },
    {
      name: "Business",
      price: "$100",
      description: "Built for large organizations.",
      features: [
        "Everything in Premium",
        "Unlimited team members",
        "2000 AI credits per month",
        "Dedicated manager",
        "Custom integrations",
      ],
      cta: "Contact sales",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const data = [
    {
      title: "How does this work?",
      answer:
        "Our platform organizes your emails using AI-powered tags, ensuring important messages are easy to find and manage instantly.",
    },
    {
      title: "How does this work?",
      answer:
        "Our platform organizes your emails using AI-powered tags, ensuring important messages are easy to find and manage instantly.",
    },
    {
      title: "How does this work?",
      answer:
        "Our platform organizes your emails using AI-powered tags, ensuring important messages are easy to find and manage instantly.",
    },
    {
      title: "How does this work?",
      answer:
        "Our platform organizes your emails using AI-powered tags, ensuring important messages are easy to find and manage instantly.",
    },
  ];
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

        <div className="fixed z-[1000]">
          <Navbar />
        </div>
        <div className=" pl-[14px] pr-5 h-[68px] bg-white rounded-[100px] flex gap-2.5 items-center mt-[188px] relative z-10">
          <div className="flex items-center group">
            <Image
              src={one}
              className="w-[44px] h-[44px] -mr-4 border border-[#FBFBF8] rounded-full first-bg relative z-10 transition-all duration-300 ease-in-out group-hover:-translate-x-1"
              alt="one"
            />
            <Image
              src={second}
              className="w-[44px] h-[44px] -mr-3 border border-[#FBFBF8] rounded-full second-bg relative z-[8] transition-all duration-300 ease-in-out group-hover:translate-x"
              alt="two"
            />
            <Image
              src={third}
              className="w-[44px] h-[44px] border border-[#FBFBF8] rounded-full third-bg relative transition-all duration-300 ease-in-out group-hover:translate-x-1"
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
      <div className="max-w-[1440px] mx-auto px-[48px]">
        <div className="mt-[90px] flex justify-between">
          <h2 className="text-[56px] font-[family-name:var(--font-inter)] text-[rgba(0,0,0,0.94)] font-bold leading-[56px]">
            Features you <br /> will love.
          </h2>
          <div>
            <p className="text-[17px] font-[family-name:var(--font-inter)] text-[black]/70 leading-[27px] w-[351px] text-right">
              Manage emails for over 5,000 startups all over the world, making
              the process
            </p>
            <p className="text-[17px] font-[family-name:var(--font-inter)] text-[black]/70 leading-[27px] w-[351px] text-right ">
              seamless and efficient
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-[56px]">
          <div className="p-2 border border-white rounded-[50px] shadow-[0_1px_1px_#0000001a,_0_1.5px_1.5px_#00000017,_0_4px_2.5px_#0000000d]">
            <div className="w-full card-bg h-[258px]"></div>
            <div className="py-[33px] px-4">
              <p className="text-[15px] font-[family-name:var(--font-inter)] text-[black]/50 leading-[22px]">
                We ensure every message stays{" "}
                <span className="text-black">
                  {" "}
                  secure with advanced encryption{" "}
                </span>
                , giving you full control over who sees what and when.
              </p>
            </div>
          </div>
          <div className="p-2 border border-white rounded-[50px] shadow-[0_1px_1px_#0000001a,_0_1.5px_1.5px_#00000017,_0_4px_2.5px_#0000000d]">
            <div className="w-full card-bg h-[258px]"></div>
            <div className="py-[33px] px-4">
              <p className="text-[15px] font-[family-name:var(--font-inter)] text-[black]/50 leading-[22px]">
                Never miss an{" "}
                <span className="text-black">important message</span>. Get
                notified instantly, ensuring{" "}
                <span className="text-black">
                  you &apos; re always in the loop
                </span>{" "}
                and ready.
              </p>
            </div>
          </div>
          <div className="p-2 border border-white rounded-[50px] shadow-[0_1px_1px_#0000001a,_0_1.5px_1.5px_#00000017,_0_4px_2.5px_#0000000d]">
            <div className="w-full card-bg h-[258px]"></div>
            <div className="py-[33px] px-4">
              <p className="text-[15px] font-[family-name:var(--font-inter)] text-[black]/50 leading-[22px]">
                Identify errors with{" "}
                <span className="text-black">
                  {" "}
                  smart notifications and search tools
                </span>
                , helping you stay organized and solve problems{" "}
                <span className="text-black">quickly</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[720px] category-bg mt-[90px] flex justify-center items-center flex-col font-[family-name:var(--font-inter)] gap-[14px] relative">
          <h5 className="text-[22px] text-black/30 font-black">AI-TAGS</h5>
          <h3 className="text-[rgba(0,0,0,0.94)] text-[56px] font-bold leading-[56px] text-center">
            Categorization?
            <br /> Done for you!
          </h3>
          <div className="absolute top-[74px] left-[145px]">
            <button className="flex items-center gap-[17px] design-btn px-[38px] h-[102px] text-[36px] font-extrabold text-[rgba(255,255,255,0.87)] rotate-[-2deg]">
              👨‍🎨 Design
            </button>
          </div>
          <div className="absolute top-[68px] right-[107px]">
            <button className="flex items-center gap-[17px] family-btn px-[38px] h-[102px] text-[36px] font-extrabold text-[rgba(255,255,255,0.87)] rotate-[10deg]">
              ✨ Family
            </button>
          </div>
          <div className="absolute bottom-[52px] left-[94px]">
            <button className="flex items-center gap-[17px] it-team-btn px-[38px] h-[102px] text-[36px] font-extrabold text-[rgba(255,255,255,0.87)] rotate-[6deg]">
              👨‍💻 IT Team
            </button>
          </div>
          <div className="absolute bottom-[110px] right-[146px]">
            <button className="flex items-center gap-[17px] work-btn px-[38px] h-[102px] text-[36px] font-extrabold text-[rgba(255,255,255,0.87)] rotate-[6deg]">
              💼 Work
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[48px] items-center mt-[90px] font-[family-name:var(--font-inter)] py-[56px]">
          <div>
            <h3 className="text-[rgba(0,0,0,0.94)] text-[56px] font-bold leading-[56px] ">
              Organize all the
              <br /> things you do.
            </h3>
            <div className="mt-[50px] grid grid-cols-3 gap-4 items-center">
              <button className="h-[63px] px-[36px] bg-[#F0F0F0] rounded-[100px] text-black/50 text-[18px] text-nowrap">
                Custom Inboxes
              </button>
              <button className="h-[63px] px-[36px] bg-[#F0F0F0] rounded-[100px] text-black/50 text-[18px]">
                Read Checker
              </button>
              <button className="h-[63px] px-[36px] bg-[#F0F0F0] rounded-[100px] text-black/50 text-[18px]">
                Scheduling
              </button>
              <button className="h-[63px] px-[36px] bg-[#F0F0F0] rounded-[100px] text-black/50 text-[18px]">
                Book Meetings
              </button>
              <button className="h-[63px] px-[36px] bg-[#F0F0F0] rounded-[100px] text-black/50 text-[18px]">
                Team Support
              </button>
              <button className="h-[63px] px-[36px] bg-[#F0F0F0] rounded-[100px] text-black/50 text-[18px]">
                AI Writer
              </button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <button className="h-[63px] px-[36px] bg-[#F0F0F0] rounded-[100px] text-black/50 text-[18px]">
                Advanced Spam Detection
              </button>
              <button className="h-[63px] px-[36px] col-span-2 flex justify-start items-center  rounded-[100px] text-black/50 text-[18px]">
                And so much more...
              </button>
            </div>
          </div>
          <div className="w-[692px] h-[525px] border-[3px] border-[rgba(255,255,255,0.24)] rounded-[46px] relative overflow-hidden">
            <Image
              className="w-full h-full object-cover rounded-[46px]"
              src={organize}
              alt="organize"
            />
            <div className="absolute top-0 left-0 w-full h-[234px] pl-[46px] pt-[40px]">
              <div className="pl-[59px] flex gap-[27px]">
                <div className="px-8 pt-4  work-tab relative text-[26px] text-white leading-8 flex justify-center pb-[48px] animate-[firstTab_1.5s_ease-in-out_infinite]">
                  Work
                </div>
                <div className="px-8 pt-4 it-team-tab relative text-[26px] text-white leading-8 flex justify-center pb-[64px] animate-[secondTab_1.5s_ease-in-out_infinite]">
                  IT Team
                </div>
              </div>
              <div className="-mt-[48px]">
                <div className="h-[234px] work w-full pl-[48px] flex gap-[48px] items-center  rounded-l-[72px] relative z-10">
                  <Image
                    src={bg2}
                    className="w-[150px] h-[150px] rounded-full border border-[#FBFBF8] google-bg"
                    alt="bg2"
                  />
                  <div className="max-w-[700px] overflow-hidden">
                    <h5 className="text-[38px] text-[rgba(0,0,0,0.83)] font-bold leading-[46px] mb-3">
                      Google Inc.
                    </h5>
                    <h6 className="text-[22px] text-[rgba(0,0,0,0.83)] font-medium leading-[27px] opacity-[0.6] mb-[9px]">
                      Add User to Workspace
                    </h6>
                    <p className="whitespace-nowrap text-[20px] text-[rgba(0,0,0,0.83)] opacity-[0.3]">
                      New user has been added to your workspace. You can now
                      collaborate seamlessly <br /> within your Google Workspace
                      account.
                    </p>
                  </div>
                </div>
                <div className="h-[234px] work w-full  rounded-l-[72px] pl-[48px] flex gap-[48px] items-center mt-[21px]">
                  <Image
                    src={bg2}
                    className="w-[150px] h-[150px] rounded-full border border-[#FBFBF8] google-bg"
                    alt="bg2"
                  />
                  <div className="max-w-[700px] overflow-hidden">
                    <h5 className="text-[38px] text-[rgba(0,0,0,0.83)] font-bold leading-[46px] mb-3">
                      Slack
                    </h5>
                    <h6 className="text-[22px] text-[rgba(0,0,0,0.83)] font-medium leading-[27px] opacity-[0.6] mb-[9px]">
                      You have Been Mentioned
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1010px] rounded-[48px] mt-[107px] mb-[146px] relative">
          <Image
            src={testimonial}
            alt="testimonial"
            className="w-full h-full object-cover rounded-[48px]"
          />
          <div className="absolute top-0 left-0 w-full h-full z-10 pt-[88px]">
            <h3 className="text-white text-[80px] font-semibold leading-[80px] text-center font-[family-name:var(--font-inter)]">
              Why <span className="text-white/50">people</span> <br /> love
              Maily.
            </h3>
            <div className="absolute left-[50%] translate-x-[-50%] w-screen  mt-[67px] font-[family-name:var(--font-inter)] overflow-hidden">
              <Marquee className="" direction="left" speed={40}>
                <div className="flex flex-wrap ">
                  {testimonials.map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="w-[580px] h-[261px] testimonial-card pt-[41px] pb-[38px] px-[48px] mx-3"
                    >
                      <p className="text-[17px] text-black/70 leading-[27px]">
                        {testimonial.text}
                      </p>

                      <div className="mt-[27px] flex gap-[27px] items-center">
                        <Image
                          className="w-20 h-20 rounded-full bg-white/0 shadow-[0px_5px_10px_0px_rgba(0,0,0,0.10),_0px_20px_15px_0px_rgba(0,0,0,0.17)]"
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <div className="flex flex-col gap-3">
                          <h5 className="font-medium">{testimonial.name}</h5>
                          <div className="flex gap-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <div
                                key={i}
                                className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-white shadow-[inset_0px_-1px_1px_0px_rgba(10,114,237,0.64)]"
                              >
                                <Image
                                  className="w-[18px] h-[17px]"
                                  src={star}
                                  alt="star"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Marquee>
              <Marquee className="mt-[38px]" direction="right" speed={40}>
                <div className="flex flex-wrap">
                  {testimonials.map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="w-[580px] h-[261px] testimonial-card pt-[41px] pb-[38px] px-[48px] mx-3"
                    >
                      <p className="text-[17px] text-black/70 leading-[27px]">
                        {testimonial.text}
                      </p>

                      <div className="mt-[27px] flex gap-[27px] items-center">
                        <Image
                          className="w-20 h-20 rounded-full bg-white/0 shadow-[0px_5px_10px_0px_rgba(0,0,0,0.10),_0px_20px_15px_0px_rgba(0,0,0,0.17)]"
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <div className="flex flex-col gap-3">
                          <h5 className="font-medium">{testimonial.name}</h5>
                          <div className="flex gap-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <div
                                key={i}
                                className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-white shadow-[inset_0px_-1px_1px_0px_rgba(10,114,237,0.64)]"
                              >
                                <Image
                                  className="w-[18px] h-[17px]"
                                  src={star}
                                  alt="star"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
        <div className="w-full h-[456px] relative rounded-[50px]">
          <Image
            src={book}
            className="absolute bottom-0 right-0 rounded-br-[50px]"
            alt="book"
          />
          <Image
            src={organizee}
            className="absolute bottom-0 left-0 rounded-bl-[50px] "
            alt="organize"
          />
          <Image
            className="w-full h-full  object-cover rounded-[50px] "
            src={cta}
            alt="cta"
          />
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="flex flex-col justify-center items-center h-full font-[family-name:var(--font-inter)]">
              <h3 className="text-[rgba(0,0,0,0.94)] text-[56px] font-bold leading-[56px] text-center mb-[29px] ">
                The Best Enail
                <br /> Ever Made
              </h3>
              <p className="text-[17px] text-black/70 leading-[27px]">
                Discover how Maily helps teams, businesses, and <br />
                individuals stay organized, productive, and stress-free
              </p>
              <button className="h-[65px] px-[60px] get-started-btn text-[22px] font-bold font-[family-name:var(--font-inter)] text-white mt-[35px]">
                Try it first
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[90px]">
          <div className="  h-[760px]  relative flex flex-col justify-center items-center font-[family-name:var(--font-inter)]">
            <Image
              className="absolute top-[30px] -left-[70px]"
              src={zoom}
              alt="zoom"
            />
            <Image
              className="absolute top-[250px] -left-[300px]"
              src={notion}
              alt="zoom"
            />
            <Image
              className="absolute top-[500px] -left-[300px]"
              src={ms}
              alt="zoom"
            />
            <Image
              className="absolute top-[30px] right-[100px]"
              src={tg}
              alt="zoom"
            />
            <Image
              className="absolute -bottom-[50px] left-[300px]"
              src={vimeo}
              alt="zoom"
            />
            <Image
              className="absolute -bottom-[60px] left-[500px]"
              src={visa}
              alt="zoom"
            />
            <Image
              className="absolute bottom-[180px] -right-[270px]"
              src={youtube}
              alt="zoom"
            />
            <Image
              className="absolute -bottom-[70px] left-[20px]"
              src={bat}
              alt="zoom"
            />
            <Image
              className="absolute bottom-[400px] -right-[230px]"
              src={skip}
              alt="zoom"
            />
            <h3 className="text-[80px] leading-[80px] font-bold text-black">
              Works <span className="text-black/50">with your </span>
            </h3>
            <h3 className="text-[80px] leading-[80px] font-bold text-black">
              favorite tools...
            </h3>
          </div>
        </div>
        <div className="flex items-start gap-[60px] mt-[90px]">
          <div className="py-[50px] font-[family-name:var(--font-inter)] w-[485px]">
            <h3 className="text-[rgba(0,0,0,0.94)] text-[56px] font-bold leading-[56px]  mb-[29px] w-[485px] ">
              Frequently asked
              <br />
              questions
            </h3>
            <p className="text-[17px] text-black/70 leading-[27px] mt-[29px]">
              Got questions? We &apos; ve got the answers <br />
              to help you get started smoothly.
            </p>
          </div>
          <div className="ml-[60px] flex flex-col w-full">
            {data.map((item, index) => (
              <Accordion
                key={index}
                index={index}
                title={item.title}
                answer={item.answer}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[90px] footer-bg px-[48px]">
        <div className="pt-[48px] pb-[100px] max-w-[1440px] mx-auto">
          <div className=" font-[family-name:var(--font-inter)] flex justify-between  items-center  w-full">
            <h3 className="text-[rgba(0,0,0,0.94)] text-[56px] font-bold leading-[56px] ">
              Simple pricing
            </h3>
            <p className="text-[17px]  text-right text-black/70 leading-[27px] ">
              Get everything you need to manage emails <br />
              efficiently and collaborate with your team
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-[120px]">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className="w-full faq-card p-[48px] font-[family-name:var(--font-inter)]"
              >
                <h6>{tier.name}</h6>
                <div className="mt-[11px] flex items-end">
                  <h5 className="text-[48px] leading-[58px]">{tier.price}</h5>
                  <p className="text-[28px] text-[rgba(0,0,0,0.45)] leading-[34px] pb-[5px]">
                    /month
                  </p>
                </div>
                <p className="text-[17px] text-black opacity-[0.45] leading-[27px] mt-5 mb-[35px]">
                  {tier.description}
                </p>
                <button className="relative px-10 h-[48px] text-white text-base rounded-[15px] bg-black shadow-[0px_2px_0px_0px_#B7B7B7,_inset_0px_5px_14px_0px_rgba(255,255,255,0.5)] font-medium overflow-hidden">
                  <span className="relative z-10">{tier.cta}</span>
                  <div className="shine-effect absolute top-1/2 -translate-y-1/2 w-[298px] h-[298px] rotate-45 opacity-40 bg-[radial-gradient(99.24%_17%_at_50%_50%,rgba(255,255,255,0.5)_0%,rgba(68,68,68,0)_100%)] blur-[5px]" />
                </button>
                <div className="mt-[31px] mb-[34px] border border-[rgba(0,0,0,0.10)]" />
                <div className="flex gap-4 flex-col">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-[11px]">
                      <Check />
                      <p className="text-[17px] text-black opacity-[0.45] leading-[27px]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[120px]">
            <Image className="w-full " src={footerMaily} alt="footer-maily" />
            <div className="mt-[100px] flex items-center justify-between font-[family-name:var(--font-inter)]">
              <div className="flex flex-col gap-[18px]">
                <h5 className="text-[40px] leading-[48px] text-white">
                  Maily.io
                </h5>
                <p className="text-[16px] text-white/70 w-[284px] leading-[24px]">
                  Secure funding for your startup from over 5,000 investors,
                  making the process seamless and efficient.
                </p>
              </div>
              <div className="flex gap-[95px] ">
                <div className="flex gap-[57px]">
                  <div className="flex flex-col">
                    <h5 className="text-[24px] text-white font-medium">
                      Legal
                    </h5>
                    <div className="mt-[26px] flex gap-6 flex-col">
                      <h6 className="text-white/70 leading-[24px]">
                        Privacy Policy
                      </h6>
                      <h6 className="text-white/70 leading-[24px]">404</h6>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h5 className="text-[24px] text-white font-medium">Menu</h5>
                    <div className="mt-[26px] flex gap-6 flex-col">
                      <h6 className="text-white leading-[24px]">Home</h6>
                      <h6 className="text-white/70 leading-[24px]">
                        Solutions
                      </h6>
                      <h6 className="text-white/70 leading-[24px]">Pricing</h6>
                      <h6 className="text-white/70 leading-[24px]">Contacts</h6>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h5 className="text-[24px] text-white font-medium">
                    Social Media
                  </h5>
                  <div className="flex items-center gap-5">
                    <Image src={twitter} alt="twitter" />
                    <Image src={linkedin} alt="linkedin" />
                    <Image src={instagram} alt="instagram" />.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Accordion = ({ title, answer, index, hoveredIndex, setHoveredIndex }) => {
  const isOpen = hoveredIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      onClick={() => setHoveredIndex(isOpen ? null : index)}
      className="relative p-[1px] overflow-hidden cursor-pointer"
    >
      <div className="stroke-rectangle absolute inset-0"></div>
      {isOpen && <div className="stroke-rectangle is-gradient"></div>}
      <div className=" faq-card text-black font-[family-name:var(--font-inter)] p-8">
        <motion.button
          className="flex gap-6 items-center w-full text-left"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <g clipPath="url(#clip0_1_556)">
              <path
                d="M13.2018 25.1331C12.7266 25.1331 12.2709 24.9444 11.9349 24.6084C11.5989 24.2724 11.4102 23.8166 11.4102 23.3415V1.84147C11.4102 1.36629 11.5989 0.910575 11.9349 0.574572C12.2709 0.23857 12.7266 0.0498047 13.2018 0.0498047C13.677 0.0498047 14.1327 0.23857 14.4687 0.574572C14.8047 0.910575 14.9935 1.36629 14.9935 1.84147V23.3415C14.9935 23.8166 14.8047 24.2724 14.4687 24.6084C14.1327 24.9444 13.677 25.1331 13.2018 25.1331Z"
                fill="#0C7DFF"
              />
              <path
                d="M2.45182 14.3831C1.97664 14.3831 1.52093 14.1944 1.18492 13.8584C0.848921 13.5224 0.660156 13.0666 0.660156 12.5915C0.660156 12.1163 0.848921 11.6606 1.18492 11.3246C1.52093 10.9886 1.97664 10.7998 2.45182 10.7998H23.9518C24.427 10.7998 24.8827 10.9886 25.2187 11.3246C25.5547 11.6606 25.7435 12.1163 25.7435 12.5915C25.7435 13.0666 25.5547 13.5224 25.2187 13.8584C24.8827 14.1944 24.427 14.3831 23.9518 14.3831H2.45182Z"
                fill="#0C7DFF"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_556">
                <rect
                  width="26"
                  height="26"
                  fill="white"
                  transform="translate(0.5 0.0498047)"
                />
              </clipPath>
            </defs>
          </motion.svg>
          <span className="text-[22px] font-medium">{title}</span>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-[22px] text-[1rem]">{answer}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
