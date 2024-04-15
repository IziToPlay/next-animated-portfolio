"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Retro (Web Design Company) Landing Page",
    desc: "Website designed and developed as a landing page for a fictitious web design company as part of my formation as web developer.",
    img: "https://res.cloudinary.com/dlrw6guss/image/upload/v1713048184/Portfolio/project1_ms6t9j.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://chipper-stroopwafel-ce450a.netlify.app",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Out Here Trails Hotel & Resort Landing Page",
    desc: "Hotel & Resort website designed and developed as part of my formation as web developer.",
    img: "https://res.cloudinary.com/dlrw6guss/image/upload/v1713048184/Portfolio/project2_genz5v.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://classy-sfogliatella-cd1f65.netlify.app",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Retro (Web Design Company) Landing Page",
    desc: "Website designed and developed as a landing page for a fictitious web design company as part of my formation as web developer.",
    img: "https://res.cloudinary.com/dlrw6guss/image/upload/v1713048184/Portfolio/project1_ms6t9j.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://chipper-stroopwafel-ce450a.netlify.app",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Out Here Trails Hotel & Resort Landing Page",
    desc: "Hotel & Resort website designed and developed as part of my formation as web developer.",
    img: "https://res.cloudinary.com/dlrw6guss/image/upload/v1713048184/Portfolio/project2_genz5v.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://classy-sfogliatella-cd1f65.netlify.app",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white max-w-[80%]">
                  <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} target="_blank" className="flex justify-end">
                    <button className="px-2 py-1 text-sm md:px-4 md:py-2 md:text-md lg:px-6 lg:py-3 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl md:text-9xl lg:text-10xl xl:text-11xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Mobile Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/Contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
