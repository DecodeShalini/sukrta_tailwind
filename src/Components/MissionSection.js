import React from 'react';

const MissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
        {/* Image on the left */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Our Mission"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Text on the right */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to empower businesses and individuals by delivering innovative, reliable, and scalable technology solutions.
            We strive to build a better digital future through creativity, collaboration, and an unwavering commitment to quality and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
