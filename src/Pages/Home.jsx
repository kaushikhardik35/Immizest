import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
const Home = () => {
  return (
    <>
      <div
        className="min-h-screen w-full bg-[#f7f7f7]"
        // style={{
        //   backgroundImage: `url("/background2.jpeg")`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundAttachment: "fixed",
        // }}
      >
        <Navbar className="sticky top-0" />
        <Hero />
      </div>
    </>
  );
};

export default Home;
