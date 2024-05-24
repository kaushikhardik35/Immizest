import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import Hero from "../Components/Home/Hero/Hero";
import Welcome from "../Components/Home/Welcome/Welcome";
import Footer from "../Components/Home/Footer";
import Commitments from "../Components/Home/Commitments/Commitments";
import Testimonial from "../Components/Home/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar className="sticky top-0" />
        <Hero />
        <Welcome />
        <Commitments />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default Home;
