import React, { useState } from "react";
import { motion } from "framer-motion";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Raj Prakaran",
      title: "Founder & CEO",
      image:
        "https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Anandhi Ranganathan",
      title: "Co-founder & Head of Adminstration",
      image:
        "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Jeysingh Anbu",
      title: "Senior UI/UX Developer",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Velu",
      title: "Full Stack Developer",
      image:
        "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Sigamani",
      title: "Senior Backend Developer",
      image:
        "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Godwin",
      title: "MuleSoft Developer",
      image:
        "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Alex",
      title: "Backend Developer",
      image:
        "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Sai",
      title: "Backend Developer",
      image:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Praveen",
      title: "Front End Developer",
      image:
        "https://images.pexels.com/photos/31986953/pexels-photo-31986953/free-photo-of-young-professional-with-creative-background.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    // {
    //   name: "Shalini Paulraj",
    //   title: "React Developer",
    //   image:
    //     "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
    // },
  ];

  const visibleCount = 4;
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + visibleCount < teamMembers.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const handlePrev = () => {
    if (startIndex - visibleCount >= 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  const visibleMembers = teamMembers.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Meet our awesome and professional team
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border rounded-full shadow hover:bg-blue-500 hover:text-white disabled:opacity-30 transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= teamMembers.length}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border rounded-full shadow hover:bg-blue-500 hover:text-white disabled:opacity-30 transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slider Container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${startIndex * (260 + 24)}px` }} // 260px card width + 24px gap
            transition={{ duration: 0.5 }}
            style={{ minWidth: "fit-content" }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-64 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow flex-shrink-0"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
