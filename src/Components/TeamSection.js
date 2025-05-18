import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules"; // Add Autoplay

const teamMembers = [
  {
    name: "Raj Prakaran",
    title: "Founder & CEO",
    image:
      "https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Anandhi Ranganathan",
    title: "Head of Adminstration",
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
  {
    name: "Robert",
    title: "Front End Developer",
    image:
      "https://images.pexels.com/photos/4064839/pexels-photo-4064839.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Meet our awesome and professional team
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;
