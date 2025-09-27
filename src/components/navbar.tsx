'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/10 p-6 backdrop-blur-md">
      <Link
        href="/"
        className="text-2xl font-bold text-white transition-colors hover:text-blue-300"
      >
        <h1 className="text-2xl font-bold">
          <span className="text-blue-400">&lt;</span>Chris{' '}
          <span className="text-blue-400">/&gt;</span>
        </h1>
      </Link>
      <nav className="flex items-center space-x-6">
        <Link
          href="/projects"
          className="text-gray-300 transition-colors duration-200 hover:text-white"
        >
          Projects
        </Link>
        <Link
          href="/experience"
          className="text-gray-300 transition-colors duration-200 hover:text-white"
        >
          Experience
        </Link>
        <Link
          href="/about"
          className="text-gray-300 transition-colors duration-200 hover:text-white"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-gray-300 transition-colors duration-200 hover:text-white"
        >
          Contact
        </Link>
        <a
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
