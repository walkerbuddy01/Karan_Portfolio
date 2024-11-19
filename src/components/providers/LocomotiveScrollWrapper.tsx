"use client";

import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef } from "react";

export default function LocomotiveScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const locoScroll = new LocomotiveScroll({});

    return () => locoScroll.destroy();
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}className="relative">
      {children}
    </div>
  );
}
