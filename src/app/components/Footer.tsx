export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-12 border-t dark:bg-gray-800 dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Portofolio sederhana, tapi asli karya Alwan
      </p>
    </footer>
  );
}
