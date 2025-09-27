import { ProjectCard } from '@/components/projectCard';

export default function ProjectsPage() {
  const allProjects = [
    {
      title: 'Tic-Tac-Toe',
      description:
        'Interactive tic-tac-toe game built with React and TypeScript featuring clean UI, smooth animations, and intelligent game logic. Includes single-player mode against AI and multiplayer functionality.',
      technologies: ['React', 'TypeScript', 'CSS', 'Vite'],
      liveUrl: 'https://tic-tac-toe-cn.vercel.app/',
      githubUrl: 'https://github.com/ctniel1/tic-tac-toe',
    },
    {
      title: 'Investment Calculator',
      description:
        'Simple compound interest calculator that takes basic investment parameters (initial amount, annual contribution, interest rate, and duration) and displays a year-by-year breakdown showing how your investment grows over time.',
      technologies: ['React', 'JavaScript', 'CSS'],
      liveUrl: 'https://investment-calculator-cn.vercel.app/',
      githubUrl: 'https://github.com/ctniel1/investment-calculator',
    },
    {
      title: 'Portfolio Website',
      description:
        "This very portfolio website you're viewing! Built with Next.js 15, featuring modern animations, responsive design, and optimized performance. Includes a custom animated background and glass-morphism effects.",
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      githubUrl: 'https://github.com/ctniel1/portfolio',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-24">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center md:mb-16">
          <h1 className="mb-4 text-3xl font-bold text-white md:mb-6 md:text-4xl lg:text-5xl">My Projects</h1>
          <div className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 md:mb-6 md:w-24"></div>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
            Here&apos;s a collection of projects I&apos;ve built, showcasing my expertise in modern
            web development, user experience design, and problem-solving. Each project demonstrates
            different aspects of my technical skills and attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm md:mt-16 md:p-8">
          <h2 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">Interested in Working Together?</h2>
          <p className="mb-4 text-sm text-gray-300 md:mb-6 md:text-base">
            I&apos;m always excited to take on new challenges and collaborate on innovative
            projects.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 md:px-6 md:py-3 md:text-base"
            >
              Get In Touch
            </a>
            <a
              href="mailto:ctniel1@gmail.com"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 md:px-6 md:py-3 md:text-base"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
