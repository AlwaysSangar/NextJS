import Image from "next/image";

export default function HomePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Hi, I'm Alwan 👋</h1>
      <p className="mt-2 text-gray-600">
        Welcome to my portfolio website built with Next.js 15 and Tailwind CSS.
      </p>

      <Image
        src="/alwanrafa.jpg"
        alt="Profile Picture"
        width={160}
        height={160}
        className="rounded-full border-4 border-blue-500 shadow-lg"
      />
    </section>
  );
}
