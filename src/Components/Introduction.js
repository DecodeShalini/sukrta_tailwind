export default function Introduction() {

//     <style>
//   {`
//     @keyframes move {
//       0% { transform: translateX(-100%); }
//       100% { transform: translateX(100%); }
//     }

//     .animated-line {
//       animation: move 2s linear infinite;
//     }
//   `}
// </style>
//     // CSS for the animated line

  return (
    <div>
      <section className="relative bg-white">
        {/* Top Wave */}
        <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M321.39 56.17C227.21 68.52 133.05 80.86 0 66V120h1200V0c-92.4 29.6-185.6 59.2-289.2 59.2C801.6 59.2 695.2 29.6 588 18c-100.5-11.1-211.4 13.1-266.6 25.5z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 z-10 relative">
          {/* Left: Text */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Sukrta Technologies
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We are a cutting-edge tech company delivering innovative solutions
              in web development, IT consulting, and cloud services. Our expert
              team transforms ideas into scalable products.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

          {/* Right: Image collage */}
          <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
            <img
              src="/images/pexels-cottonbro-5474299.jpg"
              alt="About 1"
              className="w-full h-40 object-cover rounded shadow"
            />
            <img
              src="/images/pexels-fauxels-3184418.jpg"
              alt="About 2"
              className="w-full h-40 object-cover rounded shadow"
            />
            <img
              src="/images/pexels-fauxels-3184405.jpg"
              alt="About 3"
              className="w-full h-40 object-cover rounded shadow"
            />
            <img
              src="/images/pexels-mikhail-nilov-7988079.jpg"
              alt="About 4"
              className="w-full h-40 object-cover rounded shadow"
            />
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center my-6">
  <div className="relative w-40 h-1 bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden rounded-full">
    <div className="absolute top-0 left-0 w-full h-full animated-line"></div>
  </div>

  <style>
    {`
      @keyframes move {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }

      .animated-line {
        background: linear-gradient(to right, #9333ea, #3b82f6, #9333ea);
        width: 200%;
        height: 100%;
        opacity: 0.3;
        animation: move 2s linear infinite;
      }
    `}
  </style>
</div>

    </div>
  );
}
