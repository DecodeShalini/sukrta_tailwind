import React from "react";
import Slider from "react-slick";
import sofwaresolutions from "../assets/Images/softwaresolutions.jpg"; // Replace with real images
import Eccomerce from "../assets/Images/Eccomerce.jpg"; // Replace with real images
import GenAi from "../assets/Images/GenAI.jpg"; // Replace with real images
import Payment from "../assets/Images/Payment.jpg"; // Replace with real images
import Dashboard from "../assets/Images/Dashboard.jpg"; // Replace with real images
import Insights from "../assets/Images/Insights.jpg"; // Replace with real images
import Responsive from "../assets/Images/Responsive.jpg"; // Replace with real images
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Cpu, Settings, CreditCard, BarChart2, TrendingUp } from "lucide-react";
import { FaRobot } from "react-icons/fa";
const images = [
  Responsive,
  Eccomerce,
  GenAi,
  Payment,
  Dashboard,
  Insights
];

const UpgradeSection = () => {
  const items = [
    {
      icon: <Cpu className="text-blue-600 mt-1 flex-shrink-0" size={20} />,
      text: "Tailored Software Solutions Aligned with Your Business Goals"
    },
    {
      icon: (
        <Settings className="text-green-600 mt-1 flex-shrink-0" size={20} />
      ),
      text: "Streamlined Automation for Enhanced Efficiency"
    },
    {
      icon: (
        <FaRobot className="text-purple-600 mt-1 flex-shrink-0" size={20} />
      ),
      text: "Generative AI Integrations to Elevate User Experience"
    },
    {
      icon: (
        <CreditCard className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
      ),
      text: "Flexible and Secure Payment Configuration Options"
    },
    {
      icon: <BarChart2 className="text-red-600 mt-1 flex-shrink-0" size={20} />,
      text: "Interactive Dashboards for Real-Time Monitoring"
    },
    {
      icon: (
        <TrendingUp className="text-teal-600 mt-1 flex-shrink-0" size={20} />
      ),
      text: "Actionable Insights to Drive Business Growth"
    }
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // Show only 1 image
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="py-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Upgrade Your Business with <br /> Latest IT Solutions
          </h2>
          <p className="text-gray-600 mb-6">
            Empower your business with cutting-edge technology. Our services
            ensure you stay competitive and future-ready.
          </p>
          <ul className="space-y-3 text-gray-700">
            {items.map(({ icon, text }, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-2 border-b border-gray-300 last:border-b-0 pb-6 justify-center lg:justify-start"
              >
                {icon}
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div key={idx} className="px-2">
                <div className="w-full h-80 flex items-center justify-center overflow-hidden rounded-lg ">
                  <img
                    src={img}
                    alt={`Slide ${idx + 1}`}
                    className="h-full w-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default UpgradeSection;
