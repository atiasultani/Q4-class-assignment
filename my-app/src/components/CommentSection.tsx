// File: components/CommentSection.tsx
"use client";
import { useState } from "react";

export const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setSubmitted(true);
  };

  if (submitted) return <p className="text-green-600">Thank you for your feedback!</p>;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
      <textarea
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="Write your thoughts..."
        className="border rounded-lg p-3"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Submit
      </button>
    </form>
  );
};
