"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-50 to-white px-6">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Image
          src="/alwansangar.jpg"
          alt="Profile Picture"
          width={180}
          height={180}
          className="rounded-full border-4 border-blue-500 shadow-xl"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-900"
      >
        Haii, aku <span className="text-blue-600">Alwan</span> 👋
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mt-4 max-w-2xl text-lg md:text-xl text-gray-600"
      >
        Selamat datang di website portofolio saya, dirancang dengan sentuhan modern menggunakan{" "}
        <span className="font-semibold text-gray-800">Next.js 15</span> dan{" "}
        <span className="font-semibold text-gray-800">Tailwind CSS</span>.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="/project"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition"

        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
