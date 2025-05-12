export default function Cards() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {[
            {
              img: "/images/web_design2.jpg",
              title: "Web Development",
              desc: "Build modern, responsive, and fast websites tailored to your business.",
            },
            {
              img: "/images/it_consulting.jpg",
              title: "IT Consulting",
              desc: "Expert guidance to streamline and modernize your tech solutions.",
            },
            {
              img: "/images/cloud-computing.jpg",
              title: "Cloud Solutions",
              desc: "Secure and scalable cloud infrastructures to grow with you.",
            },
            {
              img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200", // Image for AI Integration
              title: "AI Integration",
              desc: "Leverage artificial intelligence to enhance business processes and customer experiences.",
            },
            {
              img: "https://images.pexels.com/photos/5614119/pexels-photo-5614119.jpeg?auto=compress&cs=tinysrgb&w=1200", // Image for Payment Integration
              title: "Payment Integration",
              desc: "Seamless integration of secure and reliable payment systems for your business.",
            },
            {
              img: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200", // Image for E-commerce Solutions
              title: "E-commerce Solutions",
              desc: "End-to-end e-commerce solutions to help you sell online with ease, from store setup to payment integration.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  