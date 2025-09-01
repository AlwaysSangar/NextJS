"use client";

import Link from "../../../node_modules/next/link";
import { usePathname } from "../../../node_modules/next/navigation";


export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/project" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-lg font-bold">MyPortfolio</h1>
      <div className="space-x-4">
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
      </div>
    </nav>
  );
}
