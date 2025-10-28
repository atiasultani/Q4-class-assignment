"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icon set

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative">
      {/* Background Image */}
      <div className="flex justify-between h-48 sm:h-20 md:h-28 lg:h-40 w-full">
        <Image
          src="/images/cover.jpeg"
          alt="Cover"
          fill
          priority
          className="object-cover opacity-90"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex justify-between text-white px-10 py-4 items-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-serif text-center"
          >
            GIAIC Q-4 Class Assignments
          </motion.h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex mt-6 gap-8 text-2xl font-extrabold font-serif">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link href="/topics" className="hover:text-orange-600 transition-colors">
              Topics
            </Link>
            <Link href="/about" className="hover:text-orange-600 transition-colors">
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute top-4 right-4 p-2 rounded-md bg-black/30 hover:bg-black/50 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-sm text-white flex flex-col items-center py-4 md:hidden"
          >
            <Link
              href="/"
              className="py-2 text-lg hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/topics"
              className="py-2 text-lg hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Topics
            </Link>
            <Link
              href="/about"
              className="py-2 text-lg hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  );
};