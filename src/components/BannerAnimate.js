import React, { useState, useEffect } from "react";
import shoe1 from "../assets/shoe-1.avif";
import shoe2 from "../assets/shoe-2.jpg";
import shoe3 from "../assets/shoe-3.jpg";
import shoe4 from "../assets/shoe-4.jpg";
import shoe5 from "../assets/shoe-5.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const BannerLeft = () => {
  const [images] = useState([shoe1, shoe2, shoe3, shoe4, shoe5]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex mt-4 ml-16 w-1/2">
      <div className="relative w-[626px] h-[384px] border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full h-full object-cover"
          src={images[currentImageIndex]}
          alt={`shoe-${currentImageIndex + 1}`}
        />
        <button
          onClick={handlePrevClick}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerLeft;
