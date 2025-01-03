import React from 'react';

const DoctorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-200 to-purple-300">
      <div className="container mx-auto px-6 py-12">
        {/* Doctor's Image */}
        <div className="flex items-center justify-center mb-10">
          <img
            src="https://www.w3schools.com/w3images/avatar2.png" // Replace with doctor's image
            alt="Dr. Praful Waghade"
            className="w-48 h-48 rounded-full object-cover border-8 border-indigo-600 shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

        {/* Doctor's Name and Specialization */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Dr. Praful Waghade</h1>
          <p className="text-2xl text-indigo-600 font-medium">Dermatologist & Skin Specialist</p>
        </div>

        {/* Doctor's Bio */}
        <div className="text-center mb-12 px-6 max-w-4xl mx-auto">
          <p className="text-lg text-gray-800 leading-relaxed">
            With over a decade of experience in treating a wide range of skin and hair conditions, Dr. Praful Waghade is a trusted name in dermatology in Akola. He offers a compassionate and personalized approach to each patient, ensuring that every treatment plan is tailored to individual needs. Dr. Waghade stays up-to-date with the latest advancements in dermatology to provide the best care possible.
          </p>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-xl shadow-lg p-10 mb-12 max-w-3xl mx-auto transform hover:scale-105 transition duration-500 ease-in-out">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Experience & Expertise</h2>
          <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700">
            <li>10+ years of experience in dermatology</li>
            <li>Specialized in treating acne, eczema, psoriasis, and more</li>
            <li>Expert in advanced skin treatments and technologies</li>
            <li>Committed to providing personalized care and treatments</li>
            <li>Focused on patient education and long-term skin health</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Contact Information</h2>
          <p className="text-lg text-gray-700 mb-4">You can visit Waghade Skin Clinic for consultations and treatments or contact us using the details below:</p>
          <p className="text-lg text-gray-700 font-semibold mb-4">📍 Address: Akola, Maharashtra</p>
          <p className="text-lg text-gray-700 font-semibold mb-4">📞 Phone: <span className="text-indigo-600">+91 123 456 7890</span></p>
          <a
            href="mailto:dr.praful@example.com" // Replace with actual email
            className="inline-block mt-4 px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
