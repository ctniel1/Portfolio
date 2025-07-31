'use client';
import React from 'react';
import TechnologySpinner from '@/components/technologySpinner';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-6 text-center">
      <h1 className="mb-2 text-6xl font-bold">Christopher Nielson</h1>
      <p className="mb-8 text-2xl">Developer</p>

      <div className="relative h-128 w-full max-w-4xl overflow-hidden">
        <TechnologySpinner />
      </div>
    </main>
  );
}
