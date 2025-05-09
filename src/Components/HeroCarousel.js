// HeroCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './HeroCarousel.css'; // Import your custom CSS for the carousel


const images = [
  '/images/pexels-cottonbro-5474299.jpg',
  '/images/pexels-fauxels-3184418.jpg',
  '/images/pexels-fauxels-3184405.jpg',
  '/images/pexels-mikhail-nilov-7988079.jpg',

];

const HeroCarousel = () => {
  return (
    <div className="relative z-[10]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
        className="w-full h-[600px]"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="bg-black bg-opacity-40 p-6 rounded text-center">
                <h2 className="text-4xl font-bold mb-4">Empowering Innovation</h2>
                <button className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Wavy Line */}
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
