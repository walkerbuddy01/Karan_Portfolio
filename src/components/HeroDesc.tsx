"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MoveUpRight } from "lucide-react";
import React, { useRef } from "react";

function HeroDesc() {
  const reactOutWrapperRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    // Add hover in and out effects
    reactOutWrapperRef.current!.addEventListener("mouseenter", () => {
      gsap.to(".underline", {
        scaleX: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    });

    reactOutWrapperRef.current!.addEventListener("mouseleave", () => {
      gsap.to(".underline", {
        scaleX: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    });

    gsap.from(".sliding-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
    });
    gsap.from(".heading-desc", {
      y: 100,
      rotateZ: 15,
      stagger: 0.5,
      duration: 0.9,
      delay: 1,
    });
  });
  return (
    <div className=" w-[50%] absolute z-10 right-5 top-[5%]  ">
      <a
        href="mailto:karansharma40692@email.com"
        className="w-full overflow-hidden inline-block "
      >
        <p className="sliding-text text-xl sm:text-4xl leading-none font-helveticaNowDisplayRegular uppercase text-[#4B06C5] flex items-center justify-end  ">
          <span ref={reactOutWrapperRef} className="relative inline-block ">
            <span className="reach-out">Reach out</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4B06C5] scale-x-0 origin-left transition-transform duration-300 ease-out underline"></span>
          </span>
          <MoveUpRight className="h-7 w-7 sm:h-9 sm:w-9" />
        </p>
      </a>
      <div className="uppercase leading-none text-[10vw] sm:text-[8vw] font-helveticaNowDisplayMedium text-right  overflow-hidden">
        <h2 className="origin-top-left heading-desc">Creative</h2>
      </div>
      <div className="uppercase leading-none text-[8vw] sm:text-[8vw] font-helveticaNowDisplayMedium text-right  overflow-hidden">
        <h2 className="origin-top-left heading-desc">Developer</h2>
      </div>
    </div>
  );
}

export default HeroDesc;
