import { Achivements } from "@/components/Achivements";
import { AVEON } from "@/components/AVEON";
import { DotBg } from "@/components/DotBg";
import FeaturedSection from "@/components/Featured";
import Footer from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/NavBar";
import OurInstitution from "@/components/OurInstitution";
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
      <OurInstitution />
      {/* Other Fetures */}
      <DotBg />
      <p className=" text-center">
        Note:- This website is under construction and not yet ready.
      </p>
      <Footer />
    </div>
  );
}
