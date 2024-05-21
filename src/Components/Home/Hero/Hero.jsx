import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set the playback rate to 2x (double speed)
      videoRef.current.playbackRate = 0.8;
    }
  }, []);
  return (
    <div className="relative w-full">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src="/introVideo.mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center md:justify-start md:ml-20 md:mt-32">
        <h1 className="text-shadow text-[#4754a4] md:text-7xl md:w-[500px] text-2xl md:text-left text-center font-bold mb-6">
          Opening Doors to Global Education
        </h1>
        <div className="flex  justify-around flex-row">
          <button
            style={{
              background:
                "linear-gradient(166deg, rgb(233 63 59) 0%, #4754a4 100%)",
              boxShadow: "0px 1px 5px #9C27B01F",
              borderRadius: "3px",
              opacity: 1,
            }}
            className="h-[50px] md:mt-8 md:w-[300px] w-[200px] px-3 py-1 text-white font-bold text-[18px] text-center rounded cursor-pointer"
          >
            Start your journey
          </button>
          <img
            className=" md:flex hidden h-[150px] mt-12 w-[300px]  ml-[-140px] text-white font-bold text-[18px] text-center rounded cursor-pointer"
            src="/aeroplane_landing.svg"
            alt="Aeroplane Landing"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
