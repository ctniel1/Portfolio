import React from 'react';
import { Button } from '@/components/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-2">{`Hi, I'm Chris 👋`}</h2>
        <p className="text-lg max-w-xl">Senior Frontend Engineer focused on building performant, accessible, and polished user interfaces with React and TypeScript. Passionate about clean code, system design, and continuous learning.</p>
        <div className="mt-4">
          <Button asChild>
            <a href="/Christopher_Nielson_Resume.docx" download>
              Download Resume
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}