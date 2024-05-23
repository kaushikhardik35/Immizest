import React from "react";

const TestPreparation = () => {
  return (
    <div className="w-full  bg-gradient-to-r from-green-200 to-blue-100 p-8">
      {/* Introduction Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 text-center  mt-14">
        <div className="text-3xl font-bold text-blue-800 mb-4">
          Test Preparation Support:
        </div>
        <div className="text-xl text-gray-700">
          We understand that success in standardized tests is a pivotal element
          of the application process for top universities around the world. To
          enhance your readiness and boost your confidence, we offer
          comprehensive test preparation support for a range of exams:
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Points Section */}
        <div className="flex-1 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="font-semibold text-lg text-blue-800 mb-2">
              IELTS Preparation:
            </div>
            <p className="text-gray-700">
              Tailored to non-native English speakers looking to demonstrate
              their English proficiency, our IELTS preparation courses include
              practice tests, strategies for each section (Listening, Reading,
              Writing, and Speaking), and tips from experienced instructors who
              help improve your score. <br />
              <span className="text-blue-500 cursor-pointer"> Know More</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="font-semibold text-lg text-blue-800 mb-2">
              SAT Preparation:
            </div>
            <p className="text-gray-700">
              Essential for undergraduate admissions, especially in the USA, our
              SAT prep courses cover critical reading, math, and writing skills.
              We provide you with practice questions, test-taking strategies,
              and regular feedback sessions to help you achieve a competitive
              score. <br />
              <span className="text-blue-500 cursor-pointer"> Know More</span>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center md:w-1/3">
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src="testPrepSupport.png"
            alt="Test Preparation Support"
          />
        </div>

        {/* Right Points Section */}
        <div className="flex-1 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="font-semibold text-lg text-blue-800 mb-2">
              GRE Preparation:
            </div>
            <p className="text-gray-700">
              Targeting graduate and business school applicants, our GRE
              preparation includes comprehensive coverage of verbal reasoning,
              quantitative reasoning, and analytical writing. Our expert
              instructors guide you through practice tests and problem-solving
              strategies tailored to meet the demands of the GRE. <br />
              <span className="text-blue-500 cursor-pointer"> Know More</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="font-semibold text-lg text-blue-800 mb-2">
              GMAT Preparation:
            </div>
            <p className="text-gray-700">
              Aimed at prospective MBA and management students, our GMAT
              preparation courses focus on enhancing your analytical, writing,
              quantitative, verbal, and reading skills through a customized
              study plan, detailed sectional practices, and time management
              techniques. <br />
              <span className="text-blue-500 cursor-pointer"> Know More</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPreparation;
