import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

const captionStyle = "text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-semibold mb-2"; // New style for captions

export function Achivements() {
  const data = [
    {
      title: "2017",
      content: (
        <div>
          <Image
            src="https://teamaveon.org/Achievement_Img/KK.jpg"
            alt="E-baja 2017"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <p className={captionStyle}>OVERALL RANK - 14TH</p>
          <p className={captionStyle}>9TH - RULE QUIZ</p>
          <p className={captionStyle}>19TH - VIRTUALS</p>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <Image
            src="https://teamaveon.org/Achievement_Img/GG.jpg"
            alt="E-baja 2018"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <p className={captionStyle}>OVERALL RANK - 13TH</p>
          <p className={captionStyle}>5TH - COST REPORT</p>
          <p className={captionStyle}>9TH - SALES PRESENTATION</p>
          <p className={captionStyle}>12TH - DESIGN REPORT</p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <Image
            src="https://teamaveon.org/Achievement_Img/II.jpg"
            alt="E-baja 2019"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <p className={captionStyle}>OVERALL RANK - 5TH</p>
          <p className={captionStyle}>5TH - DESIGN REPORT</p>
          <p className={captionStyle}>4TH - ENDURANCE</p>
          <p className={captionStyle}>2ND - VIRTUALS</p>
          <p className={captionStyle}>6TH - COST REPORT</p>
          <p className={captionStyle}>3RD - SALES AND REPORT</p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <Image
            src="https://news.ecu.edu/wp-content/pv-uploads/sites/80/2019/05/BajaJump.jpeg"
            alt="E-baja 2021"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <p className={captionStyle}>OVERALL RANK - 9TH</p>
          <p className={captionStyle}>6TH - GRADEBILITY</p>
          <p className={captionStyle}>8TH - ACCELERATION</p>
          <p className={captionStyle}>9TH - COST REPORT</p>
          <p className={captionStyle}>12TH - SALES REPORT</p>
          <p className={captionStyle}>14TH - ENDURANCE</p>
          <p className={captionStyle}>14TH - SUSPENSION AND TRACTION</p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <Image
            src="https://news.ecu.edu/wp-content/pv-uploads/sites/80/2019/05/BajaJump.jpeg"
            alt="E-baja 2022"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <p className={captionStyle}>OVERALL RANK - 7TH</p>
          <p className={captionStyle}>14TH - ACCELERATION</p>
          <p className={captionStyle}>6TH - SLEDGE PULL</p>
          <p className={captionStyle}>7TH - ENDURANCE</p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <Image
            src="https://news.ecu.edu/wp-content/pv-uploads/sites/80/2019/05/BajaJump.jpeg"
            alt="E-baja 2023"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <p className={captionStyle}>OVERALL RANK - 13TH</p>
          <p className={captionStyle}>3RD - INNOVATION</p>
          <p className={captionStyle}>8TH - COST REPORT</p>
          <p className={captionStyle}>8TH - SALES REPORT</p>
          <p className={captionStyle}>12TH - PRELIMINARY</p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="achivements">
      <Timeline data={data} />
    </div>
  );
}
