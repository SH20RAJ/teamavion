import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function AVEON() {
  return (
    (<div className="h-[55rem] flex flex-col items-center justify-center">
      <TextHoverEffect text="AVEON" />
      <p className="-mt-40 underline text-slate-100 hover:text-white">
        This website is under construction.
      </p>
    </div>)
  );
}
