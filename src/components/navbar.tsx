'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="mb-8 flex items-center justify-between border-b p-6 pb-4">
      <Link href="/" className="text-3xl font-bold">
        <h1 className="text-3xl font-bold">Nielson Dev</h1>
      </Link>
      <nav className="space-x-4">
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/experience" className="hover:underline">
          Experience
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
}
