import { MdMail } from "react-icons/md";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Contact Me
        </h1>
        <p className="mt-2 text-center text-gray-600">
          Hubungi saya melalui email atau sosial media berikut:
        </p>

        <ul className="mt-6 space-y-4">
          <li>
            <a
              href="mailto:alwanrafa08@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl border hover:bg-blue-50 transition"
            >
              <MdMail className="w-6 h-6 text-blue-500" />
              <span className="text-gray-700">alwanrafa08@gmail.com</span>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/AlwaysSangar"
              target="_blank"
              className="flex items-center gap-3 p-4 rounded-xl border hover:bg-gray-100 transition"
            >
              <FaGithub className="w-6 h-6 text-gray-800" />
              <span className="text-gray-700">github.com/AlwaysSangar</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/reezzz08/"
              target="_blank"
              className="flex items-center gap-3 p-4 rounded-xl border hover:bg-pink-50 transition"
            >
              <FaInstagram className="w-6 h-6 text-pink-500" />
              <span className="text-gray-700">instagram.com/reezzz08</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
