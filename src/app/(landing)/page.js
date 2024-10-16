import { Achivements } from "@/components/Achivements";
import { AVEON } from "@/components/AVEON";
import { DotBg } from "@/components/DotBg";
import Footer from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/NavBar";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <AVEON />
      <Hero />
      <Achivements />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl underline decoration-emerald-200 my-20">
          Team Gallery
        </h1>
        <Gallery />
      </div>
      <DotBg />
      <Footer/>
    </div>
  );
}
