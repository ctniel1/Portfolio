export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="mb-4 text-3xl font-bold">Projects</h1>
      <p>{`Here you'll find a selection of projects I've worked on. More coming soon!`}</p>
      {/* Add your project listings here */}
      <div>
        <a
          href="https://tic-tac-toe-cn.vercel.app/"
          target="_blank"
          className="block border-b border-gray-200 p-4"
        >
          Tic-Tac-Toe
        </a>
      </div>
    </main>
  );
}
