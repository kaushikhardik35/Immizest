import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: "1",

    thumbnail:
      "https://drive.google.com/thumbnail?id=1Bs_eYyyrJUXtncxRz8iIwqzU-sjzsO95&sz=w1000",
    title: "Testimonial 1",
  },
  {
    id: "2",
    videoId: "HnNOjA62M5s",
    thumbnail:
      "https://i.ytimg.com/vi/HnNOjA62M5s/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBLT4oFBkGBdEuueB5EPijHN_cXeQ",
    title: "Testimonial 2",
  },
  {
    id: "3",

    thumbnail:
      "https://drive.google.com/thumbnail?id=16J8leFmKT-UNjto0LS3nniRZfqk6YYZ7&sz=w1000",
    title: "Testimonial 3",
  },
  {
    id: "4",

    thumbnail:
      "https://lh3.googleusercontent.com/d/1vJSPPYXUGwhq7rwQDKLijFSiCSoIG8aT=w1000",
    title: "Testimonial 4",
  },
  {
    id: "5",

    thumbnail:
      "https://drive.google.com/thumbnail?id=1a12egl40Wa_lgc1sdzN4dpMwU3_mYg5C&sz=w1000",
    title: "Testimonial 5",
  },
  {
    id: "6",

    thumbnail:
      "https://drive.google.com/thumbnail?id=1C-vQuMznUV4LUAAmKQAi4Bb3LF1u69Yw&sz=w1000",
    title: "Testimonial 6",
  },
  {
    id: "7",

    thumbnail:
      "https://drive.google.com/thumbnail?id=1NAinozbTz8EafVoTZSyf7L7hGfKOKLvP&sz=w1000",
    title: "Testimonial 7",
  },
  {
    id: "8",

    thumbnail:
      "https://lh3.googleusercontent.com/d/1fUFrQftk0iRoGNTsvaOKPfYhZ6AfpI0F=w1000",
    title: "Testimonial 8",
  },
  {
    id: "9",

    thumbnail:
      "https://lh3.googleusercontent.com/d/1giSBfajPE8LbKuAAXKtfSIEotWx9wT53=w1000",
    title: "Testimonial 9",
  },
];

const Testimonial = () => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isAutoScroll, setAutoScroll] = useState(true);
  const handleThumbnailClick = (id, videoId) => {
    console.log(videoId);
    if (videoId) {
      setAutoScroll(false);
    } else setAutoScroll(true);
    setSelectedVideoId(id);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: isAutoScroll,
    infinte: true,
    autoplaySpeed: 200,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative  md:text-4xl text-xl p-6 font-serif bg-gray-100">
        What our &nbsp;&nbsp;
        <span className="relative inline-block px-2 text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-blue-700 before:-skew-x-12 before:transform before:origin-top-right">
          <span className="relative"> students say about us&nbsp;</span>
        </span>
      </div>

      <div className="carousel-container w-full p-5 bg-gray-100 rounded-lg shadow-lg">
        <Slider className="h-full" {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-item p-4 cursor-pointer relative"
              onClick={() =>
                handleThumbnailClick(testimonial.id, testimonial.videoId)
              }
            >
              {testimonial.videoId && ( // Check if videoId exists
                <div className="play-button absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-white opacity-75"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.645 5.2L14.2 9.983l-5.555 4.783V5.2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
              <img
                src={testimonial.thumbnail}
                alt={testimonial.title}
                className={`w-48 h-96 rounded-lg shadow-md transition duration-300 ${
                  selectedVideoId === testimonial.videoId ? "hidden" : "block"
                }`}
              />
              {testimonial.videoId && selectedVideoId === testimonial.id && (
                <div
                  className="video-player w-48 h-96 rounded-lg shadow-md transition duration-300 absolute m-4 top-0 left-0"
                  style={{ marginTop: "10px" }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
