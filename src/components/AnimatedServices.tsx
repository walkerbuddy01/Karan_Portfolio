"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import HoverIcon from "./HoverIcon";
import MaxWidthWrapper from "./MaxWithWrapper";
import ReuseableService from "./ReuseableService";
import { Cog } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function AnimatedServices() {
  const parentSectionRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const shiftSectionRef = useRef<HTMLDivElement>(null);
  const slidingTextRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(borderRef.current, {
      borderTopLeftRadius: "3vw",
      borderTopRightRadius: "3vw",
      scrollTrigger: {
        trigger: parentSectionRef.current,
        scroller: "body",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    gsap.to(shiftSectionRef.current, {
      transform: "translateX(-80%)",
      scrollTrigger: {
        trigger: parentSectionRef.current,
        scroller: "body",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 2,
        onLeave: () => {
          gsap.to(slidingTextRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
          });
        },
      },
    });
  });
  return (
    <section className="h-screen md:h-screen w-full  " ref={parentSectionRef}>
      <div className=" h-full w-full bg-white rounded-t-[7vw] " ref={borderRef}>
        <MaxWidthWrapper>
          <div className="h-full w-[480%] flex" ref={shiftSectionRef}>
            <div className="flex flex-col items-center justify-center h-full w-[100vw]  gap-3 relative ">
              <h3 className="text-[6vw] leading-none font-helveticaNowDisplayBold  uppercase w-[50vw]">
                Our Excellent Approach
              </h3>
              <p className="text-[1.5vw] leading-none font-helveticaNowDisplayLight w-[50vw] uppercase text-gray-400  ">
                Our approch is rooted in a commitment to pushing the limits of
                creativity and Delivering solution that are as unique as your
                brand.
              </p>
              <HoverIcon
                src="https://ik.imagekit.io/bc/TechImages/typescript.png?updatedAt=1727111393920"
                className="w-[10%] absolute top-[30%] rotate-12 left-[5%] "
                gsapProperties={{
                  top: "25%",
                  duration: 2,
                  repeat: -1,
                  yoyoEase: "linear",
                }}
              />
              <HoverIcon
                src="https://ik.imagekit.io/bc/TechImages/JS.png?updatedAt=1727111560349"
                className="w-[10%] absolute top-[50%] -rotate-12 right-[5%] "
                gsapProperties={{
                  top: "40%",
                  right: "8%",
                  duration: 2,
                  repeat: -1,
                  yoyoEase: "linear",
                }}
              />
            </div>

            <ReuseableService
              title="type i need"
              mainImgSrc="https://ik.imagekit.io/buddycode/frontend.png?updatedAt=1731640883418"
              mainImgAlt="frontend"
              HoverIconSrc="https://ik.imagekit.io/buddycode/Crystal.png?updatedAt=1731640759885"
            />

            <ReuseableService
              title="type ii need"
              mainImgSrc="https://ik.imagekit.io/buddycode/Backend.png?updatedAt=1731643896733"
              mainImgAlt="backend"
              HoverIconSrc="https://ik.imagekit.io/buddycode/Prisma.png?updatedAt=1731399439583"
            />

            <ReuseableService
              title="type iii need"
              mainImgSrc="https://ik.imagekit.io/buddycode/FULLSTACK.png?updatedAt=1731644321665"
              mainImgAlt="fullstack"
              HoverIconSrc="https://ik.imagekit.io/buddycode/comet.png?updatedAt=1731558538284"
            />

            <section className="h-full w-[100vw]  flex items-center justify-center relative">
              <HoverIcon
                src="https://ik.imagekit.io/buddycode/geometery_Shape.png?updatedAt=1731681979489"
                className="w-[10%] absolute top-[10%] z-10 -rotate-12 left-[45%] "
                gsapProperties={{
                  rotate: -20,
                  top: "30%",
                  duration: 2.7,
                  repeat: -1,
                  yoyoEase: "linear",
                }}
              />
              <HoverIcon
                src="https://ik.imagekit.io/buddycode/lattern.png?updatedAt=1731680731588"
                className="w-[10%] absolute top-[30%] rotate-12 left-[5%] "
                gsapProperties={{
                  rotate: 20,
                  top: "25%",
                  duration: 2,
                  delay: 0.5,
                  repeat: -1,
                  yoyoEase: "linear",
                }}
              />

              <HoverIcon
                src="https://ik.imagekit.io/buddycode/stars.png?updatedAt=1731681057766"
                className="w-[10%] absolute top-[30%] z-10 -rotate-12 right-[5%] "
                gsapProperties={{
                  rotate: -20,
                  top: "25%",
                  duration: 2,
                  repeat: -1,
                  yoyoEase: "linear",
                }}
              />

              <HoverIcon
                src="https://ik.imagekit.io/buddycode/downArrow.png?updatedAt=1731681470337"
                className="w-[10%] absolute bottom-[10%] z-10 -rotate-12 left-[50%] "
                gsapProperties={{
                  rotate: -20,
                  bottom: "15%",
                  duration: 1.5,
                  repeat: -1,
                  yoyoEase: "linear",
                }}
              />

              <div className="overflow-hidden">
                <h3
                  className="text-[6vw] leading-none mix-blend-difference origin-left font-helveticaNowDisplayBold translate-y-[120%] opacity-0  uppercase text-center"
                  ref={slidingTextRef}
                >
                  Need Cust
                  <Cog className="h-[5.5vw] w-[5.5vw] inline-block  mb-[1.7%] animate-spin" />
                  m Solution
                </h3>
              </div>
            </section>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}

export default AnimatedServices;
