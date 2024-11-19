"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";

function Navbar() {
  const navbarRef = React.useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      y: -10,
      rotateX: 15,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
    });
  });
  return (
    <nav
      ref={navbarRef}
      className="flex items-center justify-between py-3 border-b border-gray-200 sm:px-5 px-2"
    >
      <h1 className="sm:text-xl uppercase text-sm font-helveticaNowDisplayMedium ">
        Karann Sharma
      </h1>
      <ul className="flex items-center space-x-4 ">
        <li className=" overflow-hidden">
          <Link href="/contact">
            <p className="sm:text-lg text-sm font-helveticaNowDisplayMedium ">Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
