import React from "react";

const ExclusiveResources = () => {
  return (
    <div className="w-full  bg-gray-100 p-6 ">
      {/* Introduction Section */}
      <div className="bg-white p-8 shadow-md md:mt-14 rounded-md md:mb-10">
        <div className="text-3xl font-bold text-purple-700 mb-4">
          Access to Exclusive Resources:
        </div>
        <div className="text-xl text-justify tracking-wider text-gray-800 mb-6">
          At ImmiZest, we go beyond basic consultancy to provide you with
          specialized resources and personalized services that are essential for
          securing your place at a top international institution. Here’s how our
          exclusive resources can benefit you:
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Points Section */}
        <div className="flex-1 space-y-10">
          <div className="bg-white p-6 shadow-md rounded-md">
            <div className="font-semibold text-lg text-purple-700 mb-2">
              SOP Writing:
            </div>
            <p className="text-gray-800">
              Crafting a compelling Statement of Purpose (SOP) is crucial to
              your application's success. Our experts work with you to develop a
              well-structured, persuasive SOP that reflects your academic
              achievements, career goals, and the reasons behind your choice of
              institution and program.
              <span className="text-purple-500 cursor-pointer"> Know More</span>
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <div className="font-semibold text-lg text-purple-700 mb-2">
              Personal Statement and Essay Writing:
            </div>
            <p className="text-gray-800">
              Personal statements and essays are your opportunity to stand out
              in a crowded applicant pool. Our experienced writers help you
              articulate your unique story in a clear and impactful way,
              ensuring that your application grabs the attention of admission
              committees.
              <span className="text-purple-500 cursor-pointer"> Know More</span>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:flex lg:w-1/3 items-center justify-center">
          <img
            className="max-w-full h-auto rounded-md shadow-md"
            src="tempImg.png"
            alt="Exclusive Resources"
          />
        </div>

        {/* Right Points Section */}
        <div className="flex-1 space-y-10">
          <div className="bg-white p-6 shadow-md rounded-md">
            <div className="font-semibold text-lg text-purple-700 mb-2">
              ECL Mentoring:
            </div>
            <p className="text-gray-800">
              Extra-Curricular Letters (ECLs) provide a snapshot of your life
              beyond academics. Our mentors guide you in presenting a holistic
              picture of your interests and achievements, enhancing your
              application's appeal. Whether it's leadership roles, community
              service, or other pursuits, we help you highlight how these
              experiences have shaped you and prepared you for the challenges of
              higher education.
              <span className="text-purple-500 cursor-pointer"> Know More</span>
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <div className="font-semibold text-lg text-purple-700 mb-2">
              Interview Preparation:
            </div>
            <p className="text-gray-800">
              Interviews can be daunting, especially when they stand between you
              and your dream school. Our interview preparation services equip
              you with the skills to confidently address a wide range of
              questions. We offer mock interviews, feedback on your performance,
              and tips on body language and communication techniques, all
              tailored to the specific culture and expectations of your target
              institution.
              <span className="text-purple-500 cursor-pointer"> Know More</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveResources;
