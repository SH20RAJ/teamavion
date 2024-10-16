"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Promote({ title, paragraph, image }) {
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
            <h2 className="text-3xl font-bold ">Promote E - Mobility</h2>
            <p className="text-lg text-gray-600">
              As the world continues to shift towards a greener, more
              eco-friendly electrical approach, Team Aevon is taking steps to
              contribute towards this change by participating in various
              competitions that will allow us to gain the knowledge in the
              development of an electric All-Terrain Vehicle (ATV).Tesr is
              committed to promoting a greener future and we&anpos;re excited to
              be part of this important movement!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="order-first md:order-last w-full"
          >
            <Image
              src="https://teamaveon.org/assets/sideview-DYBbaOWS.jpg"
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
