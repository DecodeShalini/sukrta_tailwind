import React from "react";
import { motion } from "framer-motion";
import "./ZenTec.css"; // Optional custom styles

const ZenTec = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Welcome Section */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          ZenTec - Welcome to IT Solutions
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-light mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Your next Preferred IT Partner
        </motion.h2>

        {/* Description Section */}
        <motion.p
          className="text-lg md:text-xl mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Dolor sit amet, consectetur adipisicing elit. Sed don eiusmod tempor sed incididunt ut labore et dolore magna aliqua. Minim veniam quis ipsum nostrud exercitation ullamco laboris nisi ut aliquip consequat.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Duis aute irure dolor reprehenderit voluptate velit esse dolore magna aliqua. Ut asto enim ad minim veniam quis nostrud exercitation ullamco.
        </motion.p>

        {/* We are committed Section */}
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          We are committed to providing quality IT Services
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefits Cards */}
          {[
            {
              title: "Endless Benefits",
              description: "Our benefits are endless for local IT Companies & Startups.",
            },
            {
              title: "Know the Customer",
              description: "We really know the true needs and expectations of customers.",
            },
            {
              title: "Talented Management",
              description: "Talented & experienced management solutions for IT.",
            },
            {
              title: "Excellence & Improvement",
              description: "Processes of achieving excellence and continuous improvements.",
            },
            {
              title: "Easier to Implement",
              description: "Easier to implement solutions tailored to your needs.",
            },
            {
              title: "Increase Growth Rates",
              description: "Solutions designed to increase growth rates for your business.",
            },
            {
              title: "Branding of Future",
              description: "Helping with branding that leads to future success.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
            >
              <h4 className="text-2xl font-semibold mb-4 text-gray-800">{item.title}</h4>
              <p className="text-lg text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZenTec;
