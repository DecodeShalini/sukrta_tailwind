import React, { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setFeedback(result.message);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setFeedback("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
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
                <p>info@sukrtatech.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdPhone className="text-blue-600 text-2xl mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>044 4853 5969</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdLocationOn className="text-blue-600 text-2xl mt-1" />
              <div>
                <p className="font-semibold">Address</p>
                <p>
                  Dwaraka, G1 - Sreyas, 1st St, Adyar,
                  <br />
                  Chennai, Tamil Nadu 600020
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

        <form onSubmit={handleSubmit} className="space-y-6 text-gray-700 text-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {feedback && <p className="text-center text-green-600">{feedback}</p>}

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      </div>
    </div>
  );
};

export default Contact;
