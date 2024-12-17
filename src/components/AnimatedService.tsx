"use client";

import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function AnimatedDescription({
  key,
  title,
  description,
  className,
  serialNumber,
}: {
  key: number;
  title: string;
  description: string;
  className?: string;
  serialNumber: number;
}) {
  const [show, setShow] = useState(false);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    // Calculate dynamic height based on device width
    const updateMaxHeight = () => {
      const deviceWidth = window.innerWidth;

      if (deviceWidth < 768) {
        // Mobile view
        setMaxHeight(150); // Example: height in pixels
      } else if (deviceWidth < 1024) {
        // Tablet view
        setMaxHeight(200);
      } else {
        // Desktop view
        setMaxHeight(250);
      }
    };

    // Initial calculation
    updateMaxHeight();

    // Recalculate on resize
    window.addEventListener("resize", updateMaxHeight);
    return () => window.removeEventListener("resize", updateMaxHeight);
  }, []);

  const handleToggle = () => {
    console.log(show);
    setShow((prev) => !prev);

    if (!show) {
      // Open animation
      gsap.to(descriptionRef.current, {
        height: maxHeight,
        opacity: 1,
        duration: 0.25,
        ease: "linear",
      });
      gsap.to(arrowRef.current, {
        rotate: 180,
        duration: 0.25,
        ease: "linear",
      });
    } else {
      // Close animation
      gsap.to(descriptionRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "linear",
      });
      gsap.to(arrowRef.current, {
        rotate: 0,
        duration: 0.25,
        ease: "linear",
      });
    }
  };

  return (
    <div className={cn(className, "h-full w-full select-none")} key={key}>
      <div
        className="h-full w-full flex items-end justify-between px-[2vw] sm:px-[1.5vw] text-black"
        onClick={handleToggle}
      >
        <p className="h-full text-[12vw] sm:text-[6vw] font-helveticaNowDisplayBold">
          {serialNumber}.
        </p>
        <div className="flex flex-col items-end pt-4">
          <ArrowDown
            className="sm:h-[7vw] sm:w-[7vw] h-10 w-10 md:h-[5vw] md:w-[5vw] lg:h-[4vw] lg:w-[4vw] p-1 sm:p-3 rounded-full  border border-black text-black "
            ref={arrowRef}
          />
          <p className="uppercase text-[6vw] sm:text-[4vw] font-helveticaNowDisplayBold">
            {title}
          </p>
        </div>
      </div>
      <div
        ref={descriptionRef}
        className={cn(
          "h-0 overflow-hidden w-full transition-all duration-300 ease-in-out flex sm:flex-row flex-col items-center"
        )}
        style={{ opacity: 0 }}
      >
        <p className="sm:px-7 px-3 text-[4vw] sm:text-[1.5vw] leading-none pt-2 font-helveticaNowDisplayRegular text-black">
          {description}
        </p>
        <div className="h-full w-[70%] sm:w-[20%] flex items-center justify-center ">
          <div className="flex justify-center items-center rounded-full w-fit  bg-black p-[3vw] sm:px-[1vw] sm:py-[1vw] ">
            <a
              href="mailto:karansharma40692@email.com"
              className="w-full overflow-hidden inline-block text-white leading-none uppercase"
            >
              <p className=" text-[4vw] sm:text-[1vw] font-helveticaNowDisplayBold">
                reach out
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
