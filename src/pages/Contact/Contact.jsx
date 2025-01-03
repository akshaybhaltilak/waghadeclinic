import React, { useState } from 'react';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset the form submission status after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-200 to-purple-300">
      <div className="container mx-auto px-4 py-8">

        {/* Contact Section Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Contact Dr. Praful Waghade</h1>
          <p className="text-lg text-indigo-600 mt-2">We'd love to hear from you!</p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto transform transition-transform hover:scale-105 ease-out duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label className="block text-md text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-md text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-md text-gray-700">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300 ease-in-out transform"
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
          <p className="text-md text-gray-700 mb-2">Phone: <span className="text-indigo-600">+91 123 456 7890</span></p>
          <p className="text-md text-gray-700 mb-4">Email: <span className="text-indigo-600">dr.praful@example.com</span></p>
          <a
            href="mailto:dr.praful@example.com"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300 ease-in-out transform"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
