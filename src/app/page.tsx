'use client';
import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="mb-2 text-6xl font-bold">Christopher Nielson</h1>
      <p className="mb-8 text-2xl">Developer</p>

      <div className="relative h-64 w-full max-w-4xl overflow-hidden">
        {/* Tech icons floating animation */}
        <div className="animate-slide absolute inset-0 flex items-center space-x-8">
          {['react', 'typescript', 'javascript', 'html', 'css'].map((tech, idx) => (
            <Image
              key={idx}
              src={`/${tech}.png`} // Replace with correct paths to your icons
              alt={tech}
              width={40}
              height={40}
              className="animate-float"
              style={{ animationDelay: `${idx * 1.5}s` }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateX(0%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(100%) scale(0);
            opacity: 0;
          }
        }

        .animate-slide > img {
          animation: slide 8s linear infinite;
        }
      `}</style>
    </main>
  );
}
