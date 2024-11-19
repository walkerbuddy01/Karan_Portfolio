"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedLaptop() {
  const laptopRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(laptopRef.current, {
      scale: 0.6,
      scrollTrigger: {
        trigger: laptopRef.current,
        scroller: "body",
        start: "top bottom",
        end: "bottom 80%",
        scrub: 2,
      },
    });
  });
  return (
    <div
      className=" h-full w-full sm:scale-[1] scale-[1.9] mt-20  rounded-3xl overflow-hidden  relative "
      ref={laptopRef}
    >
      <Image
        src="https://ik.imagekit.io/buddycode/Laptop_Mock.jpg?updatedAt=1731488022383"
        alt="Laptop_mock_up"
        width={400}
        height={400}
        className="  sm:scale-125  rounded-3xl "
        layout="responsive"
      />
    </div>
  );
}
