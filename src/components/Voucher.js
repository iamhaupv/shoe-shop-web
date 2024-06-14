import React, { useState, useEffect } from "react";
import voucher1 from "../assets/voucher-1.png";
import voucher2 from "../assets/voucher-2.png";
import voucher3 from "../assets/voucher-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Voucher = () => {
  const [images] = useState([voucher1, voucher2, voucher3]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

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
    <div className="mt-4 w-1/2">
      <div className="relative w-[670px] h-[384px] border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full h-full object-cover"
          src={images[currentImageIndex]}
          alt={`voucher-${currentImageIndex + 1}`}
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

export default Voucher;
