import React from "react";
import { motion } from "framer-motion";
import "./WhatWeDo.css"; // Create styles for card and container

const services = [
  {
    title: "Web Development",
    description: "Building responsive, high-performance websites using modern technologies.",
    icon: "/icons/web-development.svg", // Replace with actual icon URLs
  },
  {
    title: "Mobile App Development",
    description: "Creating seamless mobile experiences for iOS and Android platforms.",
    icon: "/icons/app-development.svg", // Replace with actual icon URLs
  },
  {
    title: "Cloud Solutions",
    description: "Helping businesses scale with cloud infrastructure and services.",
    icon: "/icons/cloud.svg", // Replace with actual icon URLs
  },
  {
    title: "IT Consulting",
    description: "Providing expert consulting to optimize IT strategies and improve business operations.",
    icon: "/icons/consulting.svg", // Replace with actual icon URLs
  },
];

const WhatWeDo = () => {
  return (
    <div className="container py-20 bg-gradient-to-r from-[#4a3d8f] to-[#f06eaa]">
      <div className="text-center text-white mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          What We Do
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          We provide innovative software solutions to help businesses scale and succeed.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
          >
            <img
              src={service.icon}
              alt={service.title}
              className="mx-auto mb-4 w-16 h-16 object-contain"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
            <p className="text-lg text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
