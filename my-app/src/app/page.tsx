// File: app/page.tsx
import Link from "next/link";
import { topics } from "@/lib/data";

export default function Home() {
  return (
    <section className="px-12 py-8">
      <h1 className="text-3xl font-bold mb-6 mt-6 font-mono">Saturday 2:00pm to 5:00pm</h1>
      <h2 className="text-2xl font-semibold mb-9 mt-8">Featured Topics</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {topics.map(t => (
          <Link key={t.slug} href={`/topics/${t.slug}`} className="block border rounded-2xl p-4 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">{t.title}</h3>
            <p className="text-gray-600">{t.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );}