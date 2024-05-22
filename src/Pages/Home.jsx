import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import Hero from "../Components/Home/Hero/Hero";
import Welcome from "../Components/Home/Welcome/Welcome";
import Footer from "../Components/Home/Footer";
import Commitments from "../Components/Home/Commitments/Commitments";
const Home = () => {
  return (
    <>
      <div
        className="min-h-screen w-full "
        // style={{
        //   backgroundImage: `url("/background2.jpeg")`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundAttachment: "fixed",
        // }}
      >
        <Navbar className="sticky top-0" />
        <Hero />
        <Welcome />
        <Commitments />
        <Footer />
      </div>
    </>
  );
};

export default Home;
