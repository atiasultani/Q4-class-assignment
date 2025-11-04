// File: app/topics/page.tsx
import Link from "next/link";
import { topics } from "@/lib/data";

export const metadata = {
  title: "Topics | Modern Blog",
  description:
    "Explore all topics including Prompt Engineering & Context Engineering",
};

export default function TopicsPage() {
  // Merge both topic arrays for simplicity
  const allTopics = [...topics];

  return (
    <section className="px-16 py-8 bg-yellow-300">
      <h1 className="text-3xl font-serif mb-6 px-9">All Topics</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {allTopics.map((t) => (
          <Link
            key={t.slug}
            href={`/topics/${t.slug}`}
            className="group block bg-white rounded-2xl shadow hover:shadow-lg transition p-4 border"
          >
            <div className="grid grid-cols-3 gap-2 mb-3">
              {/* Support multiple image fields safely */}
              {t.image1 && (
                <img
                  src={t.image1}
                  alt={t.title} 
                  width={300}
                  height={150}
                  className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 "
                />
              )}
            </div>

            <h2 className="text-xl font-semibold mb-1 group-hover:text-blue-600">
              {t.title}
            </h2>
            <p className="text-gray-600 text-sm">{t.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
