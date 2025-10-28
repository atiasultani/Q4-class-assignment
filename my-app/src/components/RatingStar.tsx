// File: components/RatingStars.tsx
"use client";
import { useState } from "react";
import { Star } from "lucide-react";

export const RatingStars = ({ rating, onChangeAction }: { rating: number; onChangeAction: (n: number) => void }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex mb-3">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
           className={`cursor-pointer transition-colors duration-200 
            ${(hover || rating) >= i ? "text-yellow-400" : "text-gray-300"}
            hover:scale-110`}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChangeAction(i)}
          fill={i <= (hover || rating) ? "#facc15" : "none"}
        />
      ))}
    </div>
  );
};
