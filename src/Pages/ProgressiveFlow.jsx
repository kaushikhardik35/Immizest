import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import ProgressiveFlowForm from "../Components/ProgressiveFlow/ProgressiveFlow";
import CountryForm from "../Components/ProgressiveFlow/CountryForm";
import TestPrepForm from "../Components/ProgressiveFlow/TestPrepForm";
import PersonalizedSupportForm from "../Components/ProgressiveFlow/PersonalizedSupportForm";

const ProgressiveFlow = () => {
  return (
    <div className=" bg-white  h-[100vh] w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProgressiveFlowForm />} />
        <Route path="/country" element={<CountryForm />} />
        <Route path="/test-prep" element={<TestPrepForm />} />
        <Route
          path="/personalized-support"
          element={<PersonalizedSupportForm />}
        />
      </Routes>
    </div>
  );
};

export default ProgressiveFlow;
