import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./HeroCarousel.css";
import { motion } from "framer-motion";

const slides = [
  {
    bgImage: "/images/pexels-cottonbro-5474299.jpg",
    humanImage: "/images/slider-human-1.jpg",
    subtitle: "IT Solutions For Easy Integration",
    title: "Deliver Innovative\nIT Solutions For Technology Insights",
    description: "Building a relationship between IT companies & experts",
    buttons: ["Learn More", "Contact Us"],
  },
  {
    bgImage: "/images/pexels-fauxels-3184418.jpg",
    humanImage: "/images/slider-human-3.jpg",
    subtitle: "Collaborate Seamlessly",
    title: "Empowering Tech Teams\nAcross the Globe",
    description: "Unifying your IT landscape with modern solutions",
    buttons: ["Explore Now", "Get Support"],
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative z-[10]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-[600px]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center px-10">
                {activeIndex === idx && (
                  <motion.div
                    className="text-center max-w-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {},
                    }}
                  >
                    <motion.p
                      className="text-lg md:text-xl uppercase tracking-widest mb-8 underline decoration-pink-500"
                      variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 1.2, delay: 0.3 },
                        },
                      }}
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.h1
                      className="text-4xl md:text-6xl font-bold leading-tight mb-6 whitespace-pre-line"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 1.2, delay: 1.0 },
                        },
                      }}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      className="text-lg md:text-xl mb-8"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 1.2, delay: 1.8 },
                        },
                      }}
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      className="flex justify-center gap-4"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 1.2, delay: 2.6 },
                        },
                      }}
                    >
                      {slide.buttons.map((btn, i) => (
                        <button
                          key={i}
                          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition"
                        >
                          {btn}
                        </button>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Wave */}
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

export default HeroCarousel;
