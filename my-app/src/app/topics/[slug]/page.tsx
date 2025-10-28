"use client";
import { useState } from "react";
import { topics } from "@/lib/data";
import { useParams } from "next/navigation";
import { RatingStars } from "@/components/RatingStar";
import { CommentSection } from "@/components/CommentSection";

export default function TopicDetail() {
  const { slug } = useParams();
  const topic = topics.find((t) => t.slug === slug);
  const [rating, setRating] = useState(0);
  if (!topic) return <p className="text-center text-gray-500 mt-10">Topic not found</p>;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-900">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6 leading-tight">
        {topic.title}
      </h1>

      {/* First Paragraph */}
      <p className="text-base sm:text-lg md:text-xl font-serif text-gray-700 mb-8 text-justify leading-relaxed">
        {topic.content1}
      </p>

      {/* Image Section */}
      <div className="relative my-12">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={topic.image}
            alt={topic.title}
            className="w-full h-auto max-h-[500px] object-contain bg-gray-100 rounded-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Second Paragraph */}
      <p className="text-base sm:text-lg md:text-xl font-serif text-gray-700 mb-8 text-justify leading-relaxed">
        {topic.content2}
      </p>

      {/* Review Section */}
      <section className="border-t border-gray-300 pt-10 mt-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-2xl font-semibold mb-4 sm:mb-0 text-gray-800">
            Leave a Review
          </h3>
          {/* Rating Stars aligned right */}
          <div className="flex justify-end mb-6 sm:mb-0">
            <RatingStars rating={rating} onChangeAction={setRating} />
          </div>
        </div>

        {/* Comment Section */}
        <div className="max-w-2xl mx-auto mt-6">
          <CommentSection />
        </div>
      </section>
    </article>
  );
}
