import React from "react";
import { FaPlane } from "react-icons/fa";

const Welcome = () => {
  return (
    <div style={{ background: "linear-gradient(#4754a4, #e93f3b)" }}>
      <style>
        {`
         @keyframes fly-plane {
  0% {
    transform: translate(-400%, -100%) rotate(0deg);
  }
  40% {
    transform: translate(250%, -100%) rotate(0deg);
  }
  60% {
    transform: translate(250%, -100%) rotate(180deg);
  }
  90% {
    transform: translate(-400%, -100%) rotate(180deg);
  }
  100% {
    transform: translate(-400%, -100%) rotate(0deg);
  }
}

        `}
      </style>
      <div className="bg-blue-100 p-10 md:grid md:grid-cols-5 md:gap-4 relative">
        <div className="md:col-span-3 text-5xl md:text-7xl font-bold text-white welcome">
          <span className="text-[#4754a4]">Welcome to </span>
          <span className="text-[#e93f3b]"> ImmiZest</span>
        </div>
        <div className="md:col-span-2 text-lg md:text-xl text-justify text-gray-800">
          At ImmiZest, we are dedicated to helping you navigate the complex
          world of global education. With our expert guidance and personalized
          consulting approach, we tailor our services to meet your unique
          aspirations and educational goals. Whether you're aiming to study in
          Canada, the USA, Australia, or other leading educational destinations,
          we provide a comprehensive suite of services designed to support every
          step of your journey.
        </div>
        {/* Plane Animation */}
        <div
          style={{
            position: "absolute",
            top: "calc(50% + 5rem)",
            left: "calc(50% - 14rem)",
            transform: "translate(-50%, -50%)",
          }}
        >
          <FaPlane
            className="hidden md:block text-white text-8xl"
            style={{ animation: "fly-plane 5s infinite" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
