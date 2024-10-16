'use client'
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function OurInstitution({
    title, paragraph, image
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <section className="py-12 shadow-lg rounded-lg m-4 animate-shadow shadow-neutral-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold ">Our Institution</h2>
            <p className="text-lg text-gray-600">
              Our institution is committed to excellence in education, research, and community engagement. With a rich
              history spanning over a century, we have consistently adapted to meet the evolving needs of our students
              and society. Our dedicated faculty, state-of-the-art facilities, and innovative programs ensure that our
              graduates are well-prepared to face the challenges of the future and make meaningful contributions to
              their fields and communities.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="order-first md:order-last"
          >
            <Image
              src="https://teamaveon.org/assets/BITS-CNi_2Fqn.jpg"
              alt="Our Institution"
              width={300}
              height={200}
              className="rounded-lg shadow-md object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
