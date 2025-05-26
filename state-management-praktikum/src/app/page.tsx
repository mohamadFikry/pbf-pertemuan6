import Image from "next/image";
import ThemeToggle from '../components/ThemeToggle';

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Halaman Utama</h1>
      <ThemeToggle /> {}
    </main>
  );
}


