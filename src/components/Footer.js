import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Image
              src="https://teamaveon.org/assets/Logo-DZienXbr.png" // Replace with the actual path to the logo image
              alt="Team Aveon Logo"
              width={150}
              height={150}
            />
            <p className="mt-4 text-sm">
              An e-ATV Racing Team of Birla Institute of Technology - Mesra, Ranchi
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col text-center">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <Link href="/" className="text-sm mb-1 hover:underline">
                Home
              </Link>
              <Link href="/about" className="text-sm mb-1 hover:underline">
                About
              </Link>
              <Link href="/team" className="text-sm mb-1 hover:underline">
                Team
              </Link>
              <Link href="/gallery" className="text-sm mb-1 hover:underline">
                Gallery
              </Link>
            </div>
            <div className="flex flex-col text-center">
              <h4 className="font-semibold mb-2">Other Links</h4>
              <Link href="#" className="text-sm mb-1 hover:underline">
                Back to top
              </Link>
              <Link href="https://www.bitmesra.ac.in" className="text-sm mb-1 hover:underline">
                Our Institute
              </Link>
              <Link href="/team-aveon" className="text-sm mb-1 hover:underline">
                Team Aveon
              </Link>
              <Link href="/contact" className="text-sm mb-1 hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Team Aveon, BIT Mesra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
