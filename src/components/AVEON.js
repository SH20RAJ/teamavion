import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Spotlight } from "./ui/Spotlight";

export function AVEON() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Spotlight
        className="-top-20 left-0 md:left-20 md:-top-10"
        fill="white"
      />
      <TextHoverEffect text="AVEON" />
    </div>
  );
}
