import React from 'react';

const customers = [
  {
    name: 'BOY SCOUTS OF AMERICA',
    logo: 'https://mma.prnewswire.com/media/2406018/Scouting_America_Logo.jpg?p=twitter',
  },
  {
    name: 'NSM',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2QHtJPMdxWRBagNP2-FFSC0xX2D1tzXk0VA&s',
  },
];

const CustomersSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Trusted by Our Customers</h2>
        <p className="text-gray-600 mt-3">We proudly collaborate with industry leaders</p>
      </div>

      <div className="flex justify-center items-center gap-16 px-8">
        {customers.map((customer, index) => (
          <div key={index} className="w-52 h-28 flex items-center justify-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
            <img
              src={customer.logo}
              alt={customer.name}
              className="max-h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomersSection;
