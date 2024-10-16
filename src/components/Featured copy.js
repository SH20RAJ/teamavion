import Image from "next/image"

export default function FeaturedSection({
    title, paragraph, image
}) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Our Institution</h2>
            <p className="text-lg text-gray-600">
              Our institution is committed to excellence in education, research, and community engagement. With a rich
              history spanning over a century, we have consistently adapted to meet the evolving needs of our students
              and society. Our dedicated faculty, state-of-the-art facilities, and innovative programs ensure that our
              graduates are well-prepared to face the challenges of the future and make meaningful contributions to
              their fields and communities.
            </p>
          </div>
          <div className="order-first md:order-last">
            <Image
              src="/placeholder.svg"
              alt="Our Institution"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}