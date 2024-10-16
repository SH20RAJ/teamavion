import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Achivements() {
  const data = [
    {
      title: "2017",
      content: (
        <div>
          <Image
            src="https://news.ecu.edu/wp-content/pv-uploads/sites/80/2019/05/BajaJump.jpeg" // Replace with the actual image URL
            alt="E-baja 2017"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            OVERALL RANK - 14TH
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            9TH - RULE QUIZ
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            19TH - VIRTUALS
          </p>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <Image
            src="https://news.ecu.edu/wp-content/pv-uploads/sites/80/2019/05/BajaJump.jpeg" // Replace with the actual image URL
            alt="E-baja 2018"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            OVERALL RANK - 13TH
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            5TH - COST REPORT
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            9TH - SALES PRESENTATION
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            12TH - DESIGN REPORT
          </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <Image
            src="https://news.ecu.edu/wp-content/pv-uploads/sites/80/2019/05/BajaJump.jpeg" // Replace with the actual image URL
            alt="E-baja 2019"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            OVERALL RANK - 5TH
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            5TH - DESIGN REPORT
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            4TH - ENDURANCE
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            2ND - VIRTUALS
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            6TH - COST REPORT
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            3RD - SALES AND REPORT
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <Image
            src="https://news.ecu.edu/wp-content/pv-uploads/sites/80/2019/05/BajaJump.jpeg" // Replace with the actual image URL
            alt="E-baja 2021"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            OVERALL RANK - 9TH
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            6TH - GRADEBILITY
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            8TH - ACCELERATION
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            9TH - COST REPORT
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            12TH - SALES REPORT
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            14TH - ENDURANCE
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            14TH - SUSPENSION AND TRACTION
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <Image
            src="https://news.ecu.edu/wp-content/pv-uploads/sites/80/2019/05/BajaJump.jpeg" // Replace with the actual image URL
            alt="E-baja 2022"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            OVERALL RANK - 7TH
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            14TH - ACCELERATION
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            6TH - SLEDGE PULL
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            7TH - ENDURANCE
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <Image
            src="https://news.ecu.edu/wp-content/pv-uploads/sites/80/2019/05/BajaJump.jpeg" // Replace with the actual image URL
            alt="E-baja 2023"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            OVERALL RANK - 13TH
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            3RD - INNOVATION
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            8TH - COST REPORT
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            8TH - SALES REPORT
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            12TH - PRELIMINARY
          </p>
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
