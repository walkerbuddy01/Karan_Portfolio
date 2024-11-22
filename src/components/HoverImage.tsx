// "use client";

// import React, { MouseEvent, useRef } from "react";
// import { gsap } from "gsap";

// const HoverImage = () => {
//   const hoverAreaRef = useRef<HTMLDivElement>(null);
//   const hoverImageRef = useRef<HTMLImageElement>(null);

//   const handleMouseEnter = () => {
//     gsap.to(hoverImageRef.current, {
//       opacity: 1,
//       duration: 0.3,
//     });
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     //@ts-ignore
//     const hoverArea = hoverAreaRef.current;
//     const hoverImage = hoverImageRef.current;

//     const rect = hoverAreaRef.current!.getBoundingClientRect();
//     const x = e.clientX - rect.left;

//     // Calculate rotation based on cursor position
//     const rotationAmount = ((x - rect.width / 2) / rect.width) * 20; // Adjust 20 for rotation intensity

//     // Move image to cursor position and apply rotation
//     gsap.to(hoverImage, {
//       x: x,
//       y: e.clientY - rect.top,
//       rotation: rotationAmount,
//       duration: 0.2,
//       ease: "power3.out",
      
//     });
//   };

//   const handleMouseLeave = () => {
//     gsap.to(hoverImageRef.current, {
//       opacity: 0,
//       duration: 0.3,
//       skewX: 0,
//       skewY: 0,
//     });
//   };

//   return (
//     <div
//       ref={hoverAreaRef}
//       className="relative w-[400px] h-[400px] bg-slate-500 border-2 border-black overflow-hidden cursor-none"
//       onMouseEnter={handleMouseEnter}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
//       <img
//         ref={hoverImageRef}
//         src="https://via.placeholder.com/100"
//         alt="Hover Image"
//         className="absolute w-24 h-24 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 opacity-0 rounded-lg"
//       />
//     </div>
//   );
// };

// export default HoverImage;
