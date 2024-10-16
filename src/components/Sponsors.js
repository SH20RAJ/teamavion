"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Sponsors() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className=" text-center text-4xl  underline  m-2">Our Sponsors</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    logo: "https://teamaveon.org/Sponsors_Img/cmpi.png",
  },
  {
    logo: "https://teamaveon.org/Sponsors_Img/1.jpg",
  },
  {
    logo: "https://www.solarranchi.in/img/main_logo.png",
  },
  {
    logo: "https://teamaveon.org/Sponsors_Img/2.png",
  },
  {
    logo: "https://teamaveon.org/Sponsors_Img/3.png",
  },
  {
    logo: "https://teamaveon.org/Sponsors_Img/4.png",
  },
  {
    logo: "https://teamaveon.org/Sponsors_Img/5.png",
  },
  {
    logo: "https://teamaveon.org/Sponsors_Img/6.png",
  },
  {
    logo: "https://teamaveon.org/Sponsors_Img/7.png",
  },
  {
    logo: "https://teamaveon.org/Sponsors_Img/8.png",
  },
  {
    logo: "https://teamaveon.org/Sponsors_Img/9.png",
  },
  {
    logo: "https://teamaveon.org/Sponsors_Img/10.png",
  },
  {
    logo: "https://teamaveon.org/Sponsors_Img/11.png",
  },
  {
    logo: "https://teamaveon.org/Sponsors_Img/12.png",
  },
  {
    logo: "https://teamaveon.org/Sponsors_Img/13.png",
  },
];
