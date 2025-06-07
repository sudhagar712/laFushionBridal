import React, { useState } from "react";
import bannercont from "../assets/images/sexygirl.webp"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name.length < 3) {
      setError("Your name should be at least 3 characters long.");
      return;
    }
    if (
      !(email.includes(".") && email.includes("@")) ||
      !validateEmail(email)
    ) {
      setError("Please enter a valid email address.");
      return;
    }
    if (message.length < 15) {
      setError("Please write a longer message.");
      return;
    }

    setError("");
    setSuccessMsg("Thank you! I will get back to you as soon as possible.");
    setTimeout(() => {
      setSuccessMsg("");
      setFormData({ name: "", email: "", message: "" });
    }, 6000);
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full min-h-screen bg-gray-200 ">
      <div className="relative md:w-1/2 h-64 md:h-auto">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bannercont})`,
            filter: "brightness(0.4)" 
          }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

      
       
      </div>
      <div className="md:w-1/2 px-8 py-12 md:py-20 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-light uppercase tracking-widest text-gray-800 mb-4">
          Contact us
        </h1>

        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-xs uppercase text-gray-600 mb-2"
            >
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-gray-400 py-2 px-1 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xs uppercase text-gray-600 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-400 py-2 px-1 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-xs uppercase text-gray-600 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-gray-400 py-2 px-1 focus:outline-none resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 text-white uppercase text-sm tracking-widest py-2 px-6 rounded hover:opacity-80"
          >
            Send
          </button>
        </form>

        {error && (
          <div className="mt-4 text-red-600 text-xs uppercase">{error}</div>
        )}
        {successMsg && (
          <div className="mt-4 text-green-600 text-xs uppercase">
            {successMsg}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
