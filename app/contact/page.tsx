"use client";

import React, { useState } from "react";
import Footer from "@/components/footer";
import Nav from "../quote/nav";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <div className="min-h-screen bg-[#f9f9f9] flex flex-col justify-center items-center px-6 md:px-16 py-16">
        <Nav />

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 pt-20">
          <p className="text-orange-500 font-semibold text-lg">Contact Us</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Get in Touch with Us
          </h2>
          <p className="mt-4 text-gray-600">
            Have questions or need assistance? Fill out the form below and our
            team will get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-8 w-full max-w-2xl space-y-6"
        >
          <div>
            <label className="block text-gray-700 text-sm mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of your message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 px-4 rounded-lg"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full text-center">
          <div className="bg-white shadow-sm rounded-xl p-6">
            <h3 className="font-semibold text-gray-800">📍 Address</h3>
            <p className="text-gray-600 mt-2">Abia State, Nigeria</p>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-6">
            <h3 className="font-semibold text-gray-800">📧 Email</h3>
            <p className="text-gray-600 mt-2">ndukap23@gmail.com</p>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-6">
            <h3 className="font-semibold text-gray-800">📞 Phone</h3>
            <p className="text-gray-600 mt-2">+234 806 363 6497</p>
          </div>

          {/* WhatsApp contact button */}
          <a
            href="https://wa.me/2348063636497?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry"
            target="_blank"
            className="mt-6 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-xl transition-all"
          >
            <span className="mr-2">💬</span> Contact on WhatsApp
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
