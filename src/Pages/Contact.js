import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6 lg:px-24 font-sans">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Let’s Connect and Collaborate!
        </h1>
        <p className="text-lg text-gray-600">
          Whether you're looking for a solution, a partnership, or just want to
          say hello — we're here to listen and help you succeed. Reach out and
          let's shape the future together.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <div className="bg-white shadow-xl rounded-lg p-10 space-y-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            We’d love to hear from you! Reach out using the information below:
          </p>

          <div className="space-y-6 text-gray-700 text-md">
            <div className="flex items-start gap-4">
              <MdEmail className="text-blue-600 text-2xl mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p>contact@yourcompany.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdPhone className="text-blue-600 text-2xl mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+123 456 7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdLocationOn className="text-blue-600 text-2xl mt-1" />
              <div>
                <p className="font-semibold">Address</p>
                <p>
                  123 Main Street, Suite 500
                  <br />
                  Your City, Country
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white shadow-xl rounded-lg p-10">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
            Contact Us
          </h2>

          <form className="space-y-6 text-gray-700 text-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
