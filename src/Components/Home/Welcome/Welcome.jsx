import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState, useEffect } from "react";

const sections = [
  {
    title: "Customized Educational Plans",
    details:
      "We understand that each student's journey is unique. That's why we prioritize personalized educational plans that align with your specific academic goals and career aspirations. Our experts take the time to understand your background and preferences, ensuring a tailored pathway that fits your personal and professional objectives.",
    imageUrl:
      "https://www.chieflearningofficer.com/wp-content/uploads/2023/02/AdobeStock_565290230.jpeg", // replace with actual image paths
  },
  {
    title: "End-to-End Support",
    details:
      "From your first inquiry to your first day on campus and beyond, ImmiZest is with you every step of the way. Our services cover everything from choosing the right program and institution to application processing, visa assistance, and post-arrival support.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/751/751432.png",
  },
  {
    title: "Test Preparation Support",
    details:
      "We offer comprehensive test preparation support for a range of exams including IELTS, SAT, GRE, and GMAT to enhance your readiness and boost your confidence.",
    imageUrl:
      "https://www.chieflearningofficer.com/wp-content/uploads/2023/02/AdobeStock_565290230.jpeg",
  },
  {
    title: "Access to Exclusive Resources",
    details:
      "At ImmiZest, we provide specialized resources and personalized services such as SOP writing, personal statement and essay writing, ECL mentoring, and interview preparation.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/751/751432.png",
  },
];

gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  useEffect(() => {
    gsap.fromTo(
      ".welcome",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".welcome",
          start: "top 80%", // when the top of the trigger hits 80% from the top of the viewport
          end: "bottom 20%", // when the bottom of the trigger hits 20% from the top of the viewport
          scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      }
    );
    gsap.fromTo(
      ".givings",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".givings",
          start: "top 80%", // when the top of the trigger hits 80% from the top of the viewport
          end: "bottom 20%", // when the bottom of the trigger hits 20% from the top of the viewport
          scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="bg-blue-100 m-0 px-10 py-5 md:grid md:grid-row md:grid-cols-5 md:gap-4">
        <div className="md:col-span-3 text-[65px] welcome md:text-[120px]">
          <span className="text-[#4754a4]">Welcome to </span>{" "}
          <span className="text-[#e93f3b]">ImmiZest</span>
        </div>
        <div className=" md:col-span-2 subpixel-antialiased text-xl md:text-2xl text-justify">
          At ImmiZest, we are dedicated to helping you navigate the complex
          world of global education. With our expert guidance and personalized
          consulting approach, we tailor our services to meet your unique
          aspirations and educational goals. Whether you're aiming to study in
          Canada, the USA, Australia, or other leading educational destinations,
          we provide a comprehensive suite of services designed to support every
          step of your journey.
        </div>
      </div>
      <div className="m-4 p-5 md:grid h-[500px] md:grid-row md:grid-cols-9 md:gap-4">
        {/* Right side with details */}
        <div className="md:col-span-5  subpixel-antialiased flex flex-col text-xl md:text-2xl text-justify">
          <div className="flex flex-row w-full items-start justify-between">
            {sections.map((section, index) => (
              <img
                key={index}
                src={section.imageUrl}
                alt={section.title}
                className="md:w-[100px] md:h-[100px] h-[70px] w-[70px] cursor-pointer p-1 rounded-full"
                onClick={() => setSelectedSection(section)}
              />
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedSection.title}</h2>
            <p>{selectedSection.details}</p>
          </div>
        </div>
        <div className="hidden md:block givings text-orange-300 md:col-span-4 w-full items-end  flex text-right md:flex-col flex-row text-[50px] md:text-[80px]">
          Our <br /> Commitment <br />
          to you
        </div>
      </div>
      {/* Why Choose us: At ImmiZest, we take pride in the achievements of our
          students and their journeys to global educational excellence.(We will add
          the Dynamic Pictures and Testimonials of around 15 students in this part)
          and give a CTA: Start Your Journey */}
    </div>
  );
};

export default Welcome;
