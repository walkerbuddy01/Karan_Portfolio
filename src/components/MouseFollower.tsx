"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function MouseFollower() {
  const MouseFollowerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const follower = MouseFollowerRef.current;
    if (!follower) return;

    // Initial GSAP animation setup
    gsap.set(follower, {
      xPercent: -50,
      yPercent: -50,
      opacity: 1,
    });
    window.addEventListener("mousemove", (e) => {
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    });
  }, []);
  return (
    <div
      className=" fixed top-0 opacity-0 left-0 w-6 h-6 rounded-full bg-red-600  z-[90] hidden sm:block pointer-events-none "
      ref={MouseFollowerRef}
    />
  );
}
