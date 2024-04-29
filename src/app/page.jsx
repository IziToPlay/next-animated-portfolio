"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="https://res.cloudinary.com/dlrw6guss/image/upload/v1713296673/Portfolio/photo_profile.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Coding with Passion, Delivering Excellence
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Hello and welcome to my portfolio! My name is Jose Lovon. This
            portfolio is a reflection of my skills, experiences, and creative
            endeavors. It serves as a window into my professional and personal
            growth, highlighting the projects, achievements, and learnings that
            have shaped me along the way.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link
              href="/Portfolio"
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
            >
              View My Work
            </Link>
            <Link href="/Contact" className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
