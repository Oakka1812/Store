import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Star = ({ rating }) => {
  const maxStar = 5;
  const roundedRating = Math.round(rating);
  return (
    <div className="flex">
      {[...Array(maxStar)].map((_, index) => {
        if (index < roundedRating) {
          return <FaStar key={index} className="text-[#A8DFF1]"/>;
        } else {
          return <FaRegStar key={index} />;
        }
      })}
    </div>
  );
};

export default Star;
