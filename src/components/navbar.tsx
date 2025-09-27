'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur-md">
      <div className="flex items-center justify-between p-4 md:p-6">
        <Link
          href="/"
          className="text-xl font-bold text-white transition-colors hover:text-blue-300 md:text-2xl"
          onClick={closeMenu}
        >
          <h1 className="font-bold">
            <span className="text-blue-400">&lt;</span>Chris{' '}
            <span className="text-blue-400">/&gt;</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
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

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex h-10 w-10 flex-col items-center justify-center space-y-1 rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="flex flex-col space-y-1 p-4">
            <Link
              href="/projects"
              className="rounded-lg px-4 py-3 text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href="/experience"
              className="rounded-lg px-4 py-3 text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              onClick={closeMenu}
            >
              Experience
            </Link>
            <Link
              href="/about"
              className="rounded-lg px-4 py-3 text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-4 py-3 text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 mt-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:from-blue-700 hover:to-purple-700"
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
