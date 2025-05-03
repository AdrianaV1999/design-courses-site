import React, { useState, useEffect } from "react";

const Rating = ({ initialRating, onRate }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleRating = (value) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  useEffect(() => {
    if (initialRating) {
      setRating(initialRating);
    }
  }, [initialRating]);

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`text-xl sm:text-2xl cursor-pointer transition-colors ${
              starValue <= rating ? "text-purple-800" : "text-gray-300"
            }`}
            onClick={() => handleRating(starValue)}
            onClickCapture={() => handleRating(starValue)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
