import React, { useState } from "react";
import CountrySelect from "./CountrySelect";
const ProgressiveFlowForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const questions = [
    { id: 1, title: "Country", type: "text" },
    { id: 2, title: "Academic Background", type: "text" },
    { id: 3, title: "Final Grade", type: "text" },
    { id: 4, title: "Status 1", type: "text" },
    { id: 5, title: "Status 2", type: "text" },
    { id: 6, title: "Scholarship Exam", type: "text" },
    {
      title: "Your Information",
      type: "info",
      info: [
        { label: "Name:", type: "text" },
        { label: "Email:", type: "email" },
        { label: "Phone:", type: "text" },
      ],
    },
  ];
  const [formResopnse, setFormResponse] = useState({});

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const [selectedCountry, setSelectedCountry] = useState();

  return (
    <div className="flex flex-col w-full    justify-center items-center p-10  ">
      {currentStep == 1 && (
        <div>
          <div className="text-center items-center w-full pb-10 ">
            Choose Your Dream Country
          </div>
          <div className=" grid grid-flow-col gap-10 grid-rows-2 w-full">
            <img
              src="/background.jpeg"
              className="h-24 row-span-1"
              alt=""
              srcset=""
            />
            <img
              src="/background.jpeg"
              className="h-24 row-span-1"
              alt=""
              srcset=""
            />
            <img
              src="/background.jpeg"
              className="h-24 row-span-1"
              alt=""
              srcset=""
            />
            <img
              src="/background.jpeg"
              className="h-24 row-span-1"
              alt=""
              srcset=""
            />
            <img
              src="/background.jpeg"
              className="h-24 row-span-1"
              alt=""
              srcset=""
              onClick={() => {
                setSelectedCountry("USA");
              }}
            />
            <img
              src="/background.jpeg"
              className="h-24 row-span-1"
              alt=""
              srcset=""
              onClick={() => {
                setSelectedCountry("Other");
              }}
            />
          </div>
          {selectedCountry == "Other" && (
            <div className="w-full z-10 flex justify-center  mt-5">
              <CountrySelect />
            </div>
          )}
          <div className="w-full z-10 text-center items-center mt-5">
            Continue
          </div>
        </div>
      )}

      <img
        src="/worldMap.png"
        alt=""
        srcset=""
        className="hidden md:block -z-10 absolute bottom-0 "
      />
    </div>
  );
};

export default ProgressiveFlowForm;
