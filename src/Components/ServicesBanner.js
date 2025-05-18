import React from "react";
import { motion } from "framer-motion";

const slide = {
  subtitle: "Our Services",
  title: "All-in-One Solutions to Power Your Business",
  description:
    "From software development and cloud integration to digital transformation and ongoing support — we offer comprehensive, scalable, and tailored IT services to help your business thrive in the digital age.",
  buttons: ["Explore Services", "Get a Quote"],
};


const ServicesBanner = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center text-white bg-custom-gradient">
      <motion.div
        className="text-center max-w-4xl px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        <motion.p
          className="text-lg md:text-xl uppercase tracking-widest mb-4 text-slate-100"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.0, delay: 0.2 },
            },
          }}
        >
          {slide.subtitle}
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 whitespace-pre-line"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.0, delay: 0.6 },
            },
          }}
        >
          {slide.title}
        </motion.h1>

        <motion.p
          className="text-base md:text-lg mb-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.0, delay: 1.0 },
            },
          }}
        >
          {slide.description}
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.0, delay: 1.4 },
            },
          }}
        >
          {slide.buttons.map((btn, i) => (
            <button
              key={i}
              className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-2 rounded-full transition"
            >
              {btn}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* Optional wave effect */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[100px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40,C480,120 960,-100 1440,60 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
};

export default ServicesBanner;
