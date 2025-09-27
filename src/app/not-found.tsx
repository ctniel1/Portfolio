import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-24">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-9xl font-bold text-white/20">404</h1>
          <h2 className="mb-4 text-3xl font-bold text-white">Page Not Found</h2>
          <p className="mx-auto mb-8 max-w-md text-lg text-gray-300">
            Looks like this page decided to take a swim and never came back to the surface.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
          >
            Go Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
