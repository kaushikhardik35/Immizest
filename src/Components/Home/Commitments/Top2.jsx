import React from "react";

const NewPage = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 p-8 bg-gray-100">
      {/* Customized Educational Plans Section */}
      <div className="bg-gradient-to-r from-blue-200 to-green-100 rounded-lg shadow-md p-6">
        <div className="text-3xl font-bold text-blue-800 mb-4">
          Customized Educational Plans:
        </div>
        <div className="text-xl text-gray-700">
          We understand that each student's journey is unique. That's why we
          prioritize personalized educational plans that align with your
          specific academic goals and career aspirations. Our experts take the
          time to understand your background and preferences, ensuring a
          tailored pathway that fits your personal and professional objectives.
        </div>
        <div className="mt-4">
          <button className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
            Submit your Profile Now
          </button>
        </div>
      </div>

      {/* End-to-End Support Section */}
      <div className="bg-gradient-to-r from-green-200 to-blue-100 rounded-lg shadow-md p-6">
        <div className="text-3xl font-bold text-blue-800 mb-4">
          End-to-End Support:
        </div>
        <div className="text-xl text-gray-700">
          From your first inquiry to your first day on campus and beyond,
          ImmiZest is with you every step of the way. Our services cover
          everything from choosing the right program and institution to
          application processing, visa assistance, and post-arrival support. We
          simplify the complexities of studying abroad, making your transition
          as smooth as possible.
        </div>
        <div className="mt-4">
          <button className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300">
            Start Your Journey Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
