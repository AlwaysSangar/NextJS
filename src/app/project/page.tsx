"use client";
import { projects, Project } from "../data/project";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectPage() {
  return (
    <section className="min-h-screen px-6 py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-gray-800 mb-10"
        >
          🚀 My <span className="text-blue-600">Project</span>
        </motion.h1>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p: Project, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              {/* Project Name */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {p.name}
              </h2>

              {/* Description */}
              <p className="text-gray-600 flex-1">{p.description}</p>

              {/* Links */}
              <div className="mt-4 flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
