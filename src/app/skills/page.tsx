"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500", bar: "bg-orange-500", level: 80 },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", bar: "bg-blue-500", level: 75 },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500", bar: "bg-yellow-400", level: 70 },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", bar: "bg-blue-600", level: 60 },
  { name: "React", icon: FaReact, color: "text-blue-400", bar: "bg-blue-400", level: 65 },
  { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900 dark:text-white", bar: "bg-gray-900 dark:bg-white", level: 55 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500", bar: "bg-teal-500", level: 60 },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500", bar: "bg-green-500", level: 50 },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600", bar: "bg-orange-600", level: 85 },
  { name: "GitHub", icon: FaGithub, color: "text-gray-900 dark:text-white", bar: "bg-gray-700 dark:bg-white", level: 80 },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-16"
        >
          💡 Skills & <span className="text-blue-600">Technologies</span>
        </motion.h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 text-center group"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <Icon
                    className={`text-5xl ${skill.color} group-hover:scale-110 transform transition duration-300`}
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {skill.name}
                </h3>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className={`${skill.bar} h-3 rounded-full`}
                  />
                </div>

                {/* Percentage */}
                <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                  {skill.level}%
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
