import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer"

export const metadata = {
  title: "My Portfolio",
  description: "Personal Portfolio with Next.js 15 + Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
