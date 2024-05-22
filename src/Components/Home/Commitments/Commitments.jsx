import React, { useRef } from "react";
import TestPreparation from "./TestPreparation";
import ExclusiveResources from "./ExclusiveResources";
import NewPage from "./Top2";
import { FaBook, FaGlobe, FaUsers, FaFileAlt } from "react-icons/fa";

const Commitments = () => {
  const testPreparationRef = useRef(null);
  const exclusiveResourcesRef = useRef(null);
  const newPageRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full py-10">
        <div className="w-full text-center text-3xl uppercase tracking-wider font-bold text-blue-700">
          Our Commitments
        </div>
        <div className="w-full text-center text-6xl mt-5 font-bold text-teal-800 font-mono">
          We commit to you...
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center text-3xl mt-10 text-teal-800 ">
          {/* Test Preparation Support */}
          <div
            className="px-10 items-center flex flex-col hover:scale-105 duration-300 cursor-pointer"
            onClick={() => scrollToSection(testPreparationRef)}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <FaBook className="text-blue-600 text-4xl" />
            </div>
            <div className="text-xl text-gray-900 text-center mb-2">
              Test Preparation Support
            </div>
            <div className="text-gray-700 text-xl text-center">
              We provide comprehensive test preparation support for a range of
              exams.
            </div>
          </div>

          {/* Exclusive Resources */}
          <div
            className="px-10 items-center flex flex-col hover:scale-105 duration-300 cursor-pointer"
            onClick={() => scrollToSection(exclusiveResourcesRef)}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <FaGlobe className="text-blue-600 text-4xl" />
            </div>
            <div className="text-xl text-gray-900 text-center mb-2">
              Exclusive Resources
            </div>
            <div className="text-gray-700  text-xl text-center">
              We provide specialized resources and personalized services for
              securing your place at a top international institution.
            </div>
          </div>

          {/* End-to-End Support */}
          <div
            className="px-10 items-center flex flex-col hover:scale-105 duration-300 cursor-pointer"
            onClick={() => scrollToSection(newPageRef)}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <FaUsers className="text-blue-600 text-4xl" />
            </div>
            <div className="text-xl text-gray-900 text-center mb-2">
              End-to-End Support
            </div>
            <div className="text-gray-700 text-xl text-center">
              From your first inquiry to your first day on campus and beyond, we
              are with you every step of the way.
            </div>
          </div>

          {/* Customized Educational Plans */}
          <div
            className="px-10 items-center flex flex-col hover:scale-105 duration-300 cursor-pointer"
            onClick={() => scrollToSection(newPageRef)}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <FaFileAlt className="text-blue-600 text-4xl" />
            </div>
            <div className="text-xl text-gray-900 text-center mb-2">
              Customized Educational Plans
            </div>
            <div className="text-gray-700 text-xl text-center">
              We prioritize personalized educational plans that align with your
              specific academic goals and career aspirations.
            </div>
          </div>
        </div>
      </div>

      <div ref={testPreparationRef}>
        <TestPreparation className=" scroll-mx-96 " />
      </div>
      <div ref={exclusiveResourcesRef}>
        <ExclusiveResources />
      </div>
      <div ref={newPageRef}>
        <NewPage />
      </div>
    </>
  );
};

export default Commitments;
