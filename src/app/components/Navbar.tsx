"use client";

import Link from "../../../node_modules/next/link";
import { usePathname } from "../../../node_modules/next/navigation";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-100">
      <h1 className="text-lg font-bold">MyPortfolio</h1>
      <div className="flex items-center space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`hover:underline ${
              pathname === item.path ? "text-yellow-400 font-semibold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
      </div>
    </nav>
  );
}
