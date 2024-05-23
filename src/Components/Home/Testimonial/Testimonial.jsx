import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: "1",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
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
    videoId: "3JZ_D3ELwOQ",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
    title: "Testimonial 3",
  },
  {
    id: "4",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    title: "Testimonial 4",
  },
  {
    id: "5",
    videoId: "5qap5aO4i9A",
    thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
    title: "Testimonial 5",
  },
  {
    id: "6",
    videoId: "3JZ_D3ELwOQ",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
    title: "Testimonial 6",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isAutoScroll, setAutoScroll] = useState(true);
  const handleThumbnailClick = (videoId) => {
    setAutoScroll(false);
    setSelectedVideoId(videoId);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: isAutoScroll,
    infinte: true,
    autoplaySpeed: 2000,
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
              onClick={() => handleThumbnailClick(testimonial.videoId)}
            >
              <img
                src={testimonial.thumbnail}
                alt={testimonial.title}
                className={`w-48 h-96 rounded-lg shadow-md transition duration-300 ${
                  selectedVideoId === testimonial.videoId ? "hidden" : "block"
                }`}
              />
              {selectedVideoId === testimonial.videoId && (
                <div
                  className="video-player w-48 h-96 rounded-lg shadow-md transition duration-300 absolute m-4  top-0 left-0"
                  style={{ marginTop: "10px" }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideoId}`}
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
