"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutUs({ title, paragraph, image }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <section className="py-12 shadow-sm rounded-lg m-4 animate-shadow ">
      <div className="container mx-auto px-4">
        <div
          className="flex sm:flex-row-reverse flex-col grid-cols-1 md:grid-cols-2 gap-8 items-center"
          ref={ref}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-4 w-full"
          >
            <h2 className="text-3xl font-bold ">About Us</h2>
            <p className="text-lg text-gray-600">
              Team Aveon Racing consists of 25 members and 15 interns from
              different disciplines who come together to design and fabricate an
              Electric all terrain Vehicle and participate in the national level
              event, e-BAJA SAE INDIA. Team Aveon comprises students from the
              departments of Mechanical Engineering, Electrical & Electronics
              Engineering,Electronics & Communications Engineering, and Computer
              Science Engineering. Team Aveon was established in with the sole
              purpose of utilising technical knowledge and inspiring research
              for manufacture of alternate energy automobiles. We were the first
              E-BAJA team from East India. Our club aims to foster a passion for
              high-performance vehicles, build camaraderie among members, and
              excel in motorsports
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="order-first md:order-last w-full"
          >
            <Image
              src="https://teamaveon.org/assets/Group%20Img-BPydvFWr.jpg"
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
