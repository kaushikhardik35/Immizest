import React from "react";

const ProgressiveFlowForm = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20   w-full bg-gray-100 md:h-full absolute top-0 ">
      <h1 className="text-2xl text-center font-semibold mb-10">
        We would love to know more about your requirements!
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8  w-full">
        <div
          className=" hover:scale-125 duration-300 flex mb-10 flex-col items-center space-y-2"
          onClick={() => {
            window.location.href = "web-progressive-flow/country";
          }}
        >
          <img src="logo.png" alt="Test Prep" className="w-36 text-white p-2" />
          <p className="text-lg font-medium text-center">
            Choose your dream country
          </p>
        </div>
        <div
          className=" hover:scale-125 duration-300  flex mb-10 flex-col items-center space-y-2"
          onClick={() => {
            window.location.href = "web-progressive-flow/test-prep";
          }}
        >
          <img
            src="logo.png"
            alt="Personalized Support"
            className="w-36  text-white p-2"
          />
          <p className="text-lg font-medium text-center">Test Preparation</p>
        </div>
        <div
          className=" hover:scale-125 duration-300  flex mb-10 flex-col items-center space-y-2"
          onClick={() => {
            window.location.href = "web-progressive-flow/personalized-support";
          }}
        >
          <img
            src="logo.png"
            alt="Personalized Support"
            className="w-36 text-white p-2"
          />
          <p className="text-lg font-medium text-center">
            Personalized Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressiveFlowForm;
