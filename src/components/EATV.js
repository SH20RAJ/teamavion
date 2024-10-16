"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function EATV({ title, paragraph, image }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <section className="py-12 shadow-sm rounded-lg m-4 animate-shadow">
      <div className="container mx-auto px-4">
        <div
          className="flex md:flex-row-reverse flex-col grid-cols-1 md:grid-cols-2 gap-8 items-center"
          ref={ref}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-4 w-full"
          >
            <h2 className="text-3xl font-bold ">
              Electric All-Terrain Vehicle
            </h2>
            <p className="text-lg text-gray-600">
              BAJA SAE INDIA is an international student-level competition that
              challenges Team Aveon to design and build a rugged, single-seat
              e-ATV. The goal for each team is to create a prototype that can
              pass various tests that also includes an endurance race. As part
              of the SAE INDIA , we accepted this challenge and decided to build
              an Electric All-Terrain Vehicle by intergrating all the individual
              skills and knowlege into work.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="order-first md:order-last w-full"
          >
            <Image
              src="https://teamaveon.org/assets/Front%20View-CzRn23tS.jpg"
              alt="Our Institution"
              width={300}
              height={200}
              className="rounded-lg shadow-md object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
