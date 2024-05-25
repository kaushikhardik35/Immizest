import React, { useState } from "react";
import CountrySelect from "./CountrySelect";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { MenuItem, Select } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
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

  const [selectedCountry, setSelectedCountry] = useState();
  const [otherCountry, setOtherCountry] = useState("");
  const [academicBackground, setAcademicBackground] = useState();
  const [finalGrade, setFinalGrade] = useState("");
  const [testStatus, setTestStatus] = useState("");
  const [scholarshipExamStatus, setScholarshipExamStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const handleOtherCountryChange = (country) => {
    setOtherCountry(country);
  };

  const validateStep = () => {
    const newErrors = {};
    switch (currentStep) {
      case 1:
        if (!selectedCountry) {
          newErrors.selectedCountry = "Please select a country.";
        }
        break;
      case 2:
        if (!academicBackground) {
          newErrors.academicBackground =
            "Please select an academic background.";
        }
        break;
      case 3:
        if (!finalGrade) {
          newErrors.finalGrade = "Please enter your final grade.";
        }

        break;
      case 4:
        if (!testStatus) {
          newErrors.testStatus = "Please select your test status.";
        }
        break;
      case 5:
        if (!scholarshipExamStatus) {
          newErrors.scholarshipExamStatus =
            "Please select a scholarship exam status.";
        }
        break;
      case 6:
        if (!formData.name) {
          newErrors.name = "Please enter your name.";
        }
        if (!formData.email) {
          newErrors.email = "Please enter your email.";
        }
        if (!formData.phone) {
          newErrors.phone = "Please enter your phone number.";
        }
        break;
      case 7:
        if (!otp) {
          newErrors.otp = "Please enter the OTP.";
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitToGoogleSheets = (data) => {
    data.country = selectedCountry;
    console.log(otherCountry);
    if (selectedCountry == "Other" && otherCountry) {
      data.country = otherCountry.label;
    }
    data.academicBackground = academicBackground;
    data.finalGrade = finalGrade;
    data.testStatus = testStatus;
    data.scholarshipExamStatus = scholarshipExamStatus;
    fetch(
      "https://script.google.com/macros/s/AKfycbxMbYvpBl34uOl8Al5Vb13QGQn6VS5pXoodQF4MgwQcNh5NGiYbD2ajrx_Po_yi8kan/exec",
      {
        method: "POST",
        body: new URLSearchParams(data),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.result === "success") {
          console.log("Form submitted successfully to Google Sheets");
          // Further actions after successful submission
        }
      })
      .catch((error) => {
        console.error("Error submitting form to Google Sheets:", error);
      });
    handleNext();
  };

  const OTPverification = (event) => {
    setCurrentStep(currentStep + 1);
    submitToGoogleSheets(formData);
    // Proceed with further actions (e.g., form submission)
  };

  return (
    <div className="flex flex-col w-full text-center justify-center items-center p-10">
      {currentStep === 1 && (
        <div className="w-full flex flex-col justify-center">
          <div className="text-center items-center w-full pb-10">
            Choose Your Dream Country
          </div>
          <div className="grid grid-flow-col justify-center gap-10 grid-rows-2 w-full">
            <img
              src="/Flags/canada.png"
              className={`h-32 row-span-1 ${
                selectedCountry == "CANADA" ? "border-[#4754a4] border-2" : ""
              }`}
              alt="CANADA"
              onClick={() => setSelectedCountry("CANADA")}
            />
            <img
              src="/Flags/usa.png"
              className={`h-32 row-span-1 ${
                selectedCountry == "USA" ? "border-[#4754a4] border-2" : ""
              }`}
              alt="USA"
              onClick={() => setSelectedCountry("USA")}
            />
            <img
              src="/Flags/australia.png"
              className={`h-32 row-span-1 ${
                selectedCountry == "AUSTRALIA"
                  ? "border-[#4754a4] border-2"
                  : ""
              }`}
              alt="AUSTRALIA"
              onClick={() => setSelectedCountry("AUSTRALIA")}
            />
            <img
              src="/Flags/ireland.png"
              className={`h-32 row-span-1 ${
                selectedCountry == "IRELAND" ? "border-[#4754a4] border-2" : ""
              }`}
              alt="IRELAND"
              onClick={() => setSelectedCountry("IRELAND")}
            />
            <img
              src="/Flags/uk.png"
              className={`h-32 row-span-1 ${
                selectedCountry == "UK" ? "border-[#4754a4] border-2" : ""
              }`}
              alt="UK"
              onClick={() => setSelectedCountry("UK")}
            />
            <img
              src="/Flags/other.png"
              className={`h-32 row-span-1 ${
                selectedCountry == "Other" ? "border-[#4754a4] border-2" : ""
              }`}
              alt="Other"
              onClick={() => setSelectedCountry("Other")}
            />
          </div>
          {selectedCountry === "Other" && (
            <div className="w-full z-10 flex justify-center mt-5">
              <CountrySelect onCountryChange={handleOtherCountryChange} />
            </div>
          )}
          {errors.selectedCountry && (
            <div className="text-red-500">{errors.selectedCountry}</div>
          )}
          <div className="flex w-full mt-10  md:gap-32 justify-center flex-col md:flex-row">
            <div
              className="z-10 px-10 py-5 text-left text-white bg-[#4754a4] p-10 items-center mt-5"
              onClick={handleNext}
            >
              Continue
              <ArrowRightAltIcon />
            </div>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className="w-full">
          <div className="text-center items-center w-full font-bold text-[#4754a4] text-4xl mt-10 pb-10">
            Tell us about your academic background!
          </div>
          <div className="grid  grid-flow-col md:gap-12 grid-rows-2 w-full">
            <div className="flex p-2  w-full   flex-col sm:flex-row md:justify-around">
              <div
                className={`bg-gray-300 mt-10 px-8 py-5 text-3xl ${
                  academicBackground === "10th Standard"
                    ? "border-black border-2"
                    : ""
                }`}
                onClick={() => setAcademicBackground("10th Standard")}
              >
                10th Standard
              </div>
              <div
                className={`bg-gray-300 mt-10 px-8 py-5 text-3xl ${
                  academicBackground === "12th Standard"
                    ? "border-black border-2"
                    : ""
                }`}
                onClick={() => setAcademicBackground("12th Standard")}
              >
                12th Standard
              </div>
              <div
                className={`bg-gray-300 mt-10  px-8 py-5 text-3xl ${
                  academicBackground === "Bachelor's Degree"
                    ? "border-black border-2"
                    : ""
                }`}
                onClick={() => setAcademicBackground("Bachelor's Degree")}
              >
                Bachelor's Degree
              </div>
            </div>
            <div className="flex md:p-2  w-full flex-col sm:flex-row  md:gap-36  md:justify-center">
              <div
                className={`bg-gray-300 mt-10  px-8 py-5 text-3xl ${
                  academicBackground === "Master's Degree"
                    ? "border-black border-2"
                    : ""
                }`}
                onClick={() => setAcademicBackground("Master's Degree")}
              >
                Master's Degree
              </div>
              <div
                className={`bg-gray-300 mt-10  px-8 py-5 text-3xl ${
                  academicBackground === "Other Degree"
                    ? "border-black border-2"
                    : ""
                }`}
                onClick={() => setAcademicBackground("Other Degree")}
              >
                Other Degree
              </div>
            </div>
          </div>
          <div>
            {errors.academicBackground && (
              <div className="text-red-500">{errors.academicBackground}</div>
            )}
          </div>
          <div className="flex w-full mt-10  md:gap-32 justify-center flex-col md:flex-row">
            <div
              className="z-10 px-10 py-5 text-left text-white bg-[#4754a4] items-center mt-5"
              onClick={handlePrev}
            >
              <ArrowRightAltIcon className="rotate-180" />
              Previous
            </div>
            <div
              className="z-10 px-10 py-5 text-left text-white bg-[#4754a4] p-10 items-center mt-5"
              onClick={handleNext}
            >
              Continue
              <ArrowRightAltIcon />
            </div>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="w-full">
          <div className="text-center items-center w-full font-bold text-[#4754a4] text-4xl mt-10 pb-10">
            What is your expected or Final Grade percentage
          </div>
          <div>
            <input
              className="border m-3 border-gray-300 rounded-md px-3 py-2 w-44 md:w-96 text-3xl text-center focus:outline-none focus:border-blue-400"
              type="text"
              value={finalGrade}
              onChange={(event) => setFinalGrade(event.target.value)}
            />
          </div>
          {errors.finalGrade && (
            <div className="text-red-500">{errors.finalGrade}</div>
          )}
          <div className="flex w-full mt-10  md:gap-32 justify-center flex-col md:flex-row">
            <div
              className="z-10 px-10 py-5 text-left text-white bg-[#4754a4] items-center mt-5"
              onClick={handlePrev}
            >
              <ArrowRightAltIcon className="rotate-180" />
              Previous
            </div>
            <div
              className="z-10 px-10 py-5 text-left text-white bg-[#4754a4] p-10 items-center mt-5"
              onClick={handleNext}
            >
              Continue &nbsp; &nbsp;
              <ArrowRightAltIcon />
            </div>
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div className="w-full">
          <div className="text-center items-center w-full font-bold text-[#4754a4] text-4xl mt-10 pb-10">
            What is your IELTS/TOEFL/PTE/DUOLINGO test Status?
          </div>
          <div>
            <Select
              displayEmpty
              value={testStatus}
              className="w-48 md:w-96"
              onChange={(event) => setTestStatus(event.target.value)}
              renderValue={(testStatus) => {
                if (!testStatus) {
                  return <em>Placeholder</em>;
                }

                return testStatus;
              }}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                <em>Placeholder</em>
              </MenuItem>
              <MenuItem key="Not Decided" value="Not Decided">
                Not Decided
              </MenuItem>
              <MenuItem
                key="Already Gave the exam"
                value="Already Gave the exam"
              >
                Already Gave the exam
              </MenuItem>
              <MenuItem key="Booked my exam" value="Booked my exam">
                Booked my exam
              </MenuItem>
              <MenuItem
                key="Planning to give it soon"
                value="Planning to give it soon"
              >
                Planning to give it soon
              </MenuItem>
            </Select>
          </div>
          {errors.testStatus && (
            <div className="text-red-500">{errors.testStatus}</div>
          )}
          <div className="flex w-full mt-10  md:gap-32 justify-center flex-col md:flex-row">
            <div
              className="z-10 px-10 py-5 text-left text-white bg-[#4754a4] items-center mt-5"
              onClick={handlePrev}
            >
              <ArrowRightAltIcon className="rotate-180" />
              Previous
            </div>
            <div
              className="z-10 px-10 py-5 text-left text-white bg-[#4754a4] p-10 items-center mt-5"
              onClick={handleNext}
            >
              Continue
              <ArrowRightAltIcon />
            </div>
          </div>
        </div>
      )}
      {currentStep === 5 && (
        <div className="w-full">
          <div className="text-center items-center w-full font-bold text-[#4754a4] text-4xl mt-10 pb-10">
            Do you plan to take any scholarship exam?
          </div>
          <div>
            <Select
              displayEmpty
              value={scholarshipExamStatus}
              className="w-48 md:w-96"
              onChange={(event) => setScholarshipExamStatus(event.target.value)}
              renderValue={(scholarshipExamStatus) => {
                if (!scholarshipExamStatus) {
                  return <em>Choose Exam</em>;
                }

                return scholarshipExamStatus;
              }}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                <em>Choose Exam</em>
              </MenuItem>
              <MenuItem key="SAT Exam" value="SAT Exam">
                SAT Exam
              </MenuItem>
              <MenuItem key="GRE Exam" value="GRE Exam">
                GRE Exam
              </MenuItem>
              <MenuItem key="GMAT Exam" value="GMAT Exam">
                GMAT Exam
              </MenuItem>
              <MenuItem
                key="I need more guidance on this"
                value="I need more guidance on this"
              >
                I need more guidance on this
              </MenuItem>
            </Select>
          </div>
          {errors.scholarshipExamStatus && (
            <div className="text-red-500">{errors.scholarshipExamStatus}</div>
          )}
          <div className="flex w-full mt-10  md:gap-32 justify-center flex-col md:flex-row">
            <div
              className="z-10 px-10 py-5 text-left text-white bg-[#4754a4] items-center mt-5"
              onClick={handlePrev}
            >
              <ArrowRightAltIcon className="rotate-180" />
              Previous
            </div>
            <div
              className="z-10 px-10 py-5 text-left text-white bg-[#4754a4] p-10 items-center mt-5"
              onClick={handleNext}
            >
              Continue
              <ArrowRightAltIcon />
            </div>
          </div>
        </div>
      )}
      {currentStep === 6 && (
        <div className="w-full">
          <div className="text-center font-bold text-[#4754a4] text-4xl mt-10 pb-10">
            You are one step away from starting your study abroad journey
          </div>
          <div className="max-w-md  mx-auto">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border m-3 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-400"
            />

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border m-3 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-400"
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border m-3 border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-400"
            />
          </div>
          {errors.name && <div className="text-red-500">{errors.name}</div>}
          {errors.email && <div className="text-red-500">{errors.email}</div>}
          {errors.phone && <div className="text-red-500">{errors.phone}</div>}
          <div className="flex w-full mt-10  md:gap-32 justify-center flex-col md:flex-row">
            <div
              className="z-10 px-10 py-5 text-left text-white bg-[#4754a4] items-center mt-5"
              onClick={handlePrev}
            >
              <ArrowRightAltIcon className="rotate-180" />
              Previous
            </div>
            <div
              className="z-10 px-10 py-5 text-left text-white bg-[#4754a4] p-10 items-center mt-5"
              onClick={OTPverification}
            >
              Fulfil Your Dream With Us
              <TravelExploreIcon />
            </div>
          </div>
        </div>
      )}

      {currentStep === 7 && (
        <div className="w-full">You will shortly recieve Call from Us !</div>
      )}
      <img
        src="/worldMap.png"
        alt="World Map"
        className="hidden md:block -z-10 absolute bottom-0"
      />
    </div>
  );
};

export default ProgressiveFlowForm;
