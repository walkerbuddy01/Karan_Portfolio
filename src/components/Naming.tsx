"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Naming() {
  const headingOneRef = useRef<HTMLDivElement>(null);
  const headingTwoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let headingOneClutter = "";
    const headingOneSpillited = headingOneRef.current?.innerText?.split("");
    headingOneSpillited?.forEach((char) => {
      headingOneClutter += `<span class="inline-block ">${char}</span>`;
    });
    headingOneRef.current!.innerHTML = headingOneClutter;
    gsap.from(headingOneRef.current!.children, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.2,
      delay: 0.2,
    });

    let headingTwoClutter = "";
    const headingTwoSpillited = headingTwoRef.current?.innerText?.split("");
    headingTwoSpillited?.forEach((char) => {
      if (char === " ") {
        headingTwoClutter += `<span class="inline-block bg-transparent"> &nbsp; </span>`;
      }
      headingTwoClutter += `<span class="inline-block bg-transparent">${char}</span>`;
    });
    headingTwoRef.current!.innerHTML = headingTwoClutter;
    console.log({ headingTwoRef });
    gsap.from(headingTwoRef.current!.children, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.2,
      delay: 0.2,
    });
  });
  return (
    <div className="w-full pt-10 sm:pt-0 bg-transparent">
      <h3
        ref={headingOneRef}
        className="text-[17vw] bg-transparent uppercase overflow-hidden leading-none font-bulgie text-center hidden sm:block tracking-tighter "
      >
        KarannSharma
      </h3>
      <h3
        ref={headingTwoRef}
        className="text-[33vw] pl-[3vw] bg-transparent  uppercase leading-none  font-bulgie tracking-tighter  sm:hidden"
      >
        Karann Sharma
      </h3>
    </div>
  );
}

export default Naming;
