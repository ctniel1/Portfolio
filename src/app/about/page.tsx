export default function AboutPage() {
  const highlights = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: 'Problem Solver',
      description:
        'I love the puzzle-piecing nature of frontend development, creating visually interesting applications with intuitive designs.',
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Team Player',
      description:
        'Able to jump into any codebase and ramp up quickly, providing value through both debugging and new feature development.',
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'High Performance',
      description:
        'Work efficiently under tight deadlines while maintaining high code quality, drawing from competitive swimming discipline.',
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: 'Innovative Vision',
      description:
        'Aspiring to start my own company and game development studio, creating rich, story-driven single-player experiences.',
    },
  ];

  const milestones = [
    {
      year: '2000-2006',
      title: 'Southern California Childhood',
      description:
        'Lived in San Marcos, CA, experiencing Disneyland, beaches, and Legoland regularly - shaping my love for immersive experiences.',
    },
    {
      year: 'High School',
      title: 'Competitive Swimming',
      description:
        'Achieved 5th place in state for 100m butterfly and 7th place in 500m freestyle, learning discipline and performance under pressure.',
    },
    {
      year: '2013-2015',
      title: 'Mission Service',
      description:
        'Served 2 years in New York City, learned Spanish, and worked with the Hispanic communities of Queens and Staten Island.',
    },
    {
      year: '2015-2021',
      title: 'BYU & Discovery',
      description:
        'Studied Information Technology at BYU, discovered programming through an intro course, and began working as a student web developer.',
    },
    {
      year: '2021-Present',
      title: 'Software Engineering Career',
      description:
        'Graduated with IT degree and have been building my career in frontend development, currently as a Software Engineer at Domo.',
    },
    {
      year: '2019-Present',
      title: 'Family Life',
      description:
        'Married for 6 years with a 2-year-old son. Enjoy bike rides throughout Utah Valley and annual trips to Southern California.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-24">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">About Chris</h1>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-300">
            Frontend Engineer, Competitive Swimmer, Drummer, Father, and Aspiring Game Developer
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="mb-6 text-2xl font-bold text-white">My Journey</h2>
          <div className="space-y-4 leading-relaxed text-gray-300">
            <p>
              I&apos;m a Senior Frontend Engineer based in Utah County, where I combine my passion
              for creating intuitive user experiences with the discipline I learned as a competitive
              swimmer. My journey into software engineering began during my studies at Brigham Young
              University, where a single intro programming course sparked a career path I never
              expected.
            </p>
            <p>
              What drives me most about frontend development is its puzzle-piecing nature—taking
              complex problems and crafting them into visually interesting, intuitive web
              applications. Whether I&apos;m debugging legacy code or building new features from
              scratch, I approach each challenge with the same focus and determination that once
              helped me achieve 5th place in the state championship for the 100m butterfly.
            </p>
            <p>
              Beyond the code, I&apos;m a husband of 6 years and father to an energetic 2-year-old
              boy. Our family loves exploring Utah Valley on bike rides and making annual
              pilgrimages back to Southern California, where I spent my childhood between Disneyland
              visits and beach days.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-2xl font-bold text-white">
            What Defines My Approach
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-500/20 p-3 text-blue-300">
                  {highlight.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{highlight.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Life Timeline */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-2xl font-bold text-white">
            Life & Career Timeline
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 md:flex-row"
              >
                <div className="flex-shrink-0 md:w-48">
                  <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold text-white">{milestone.title}</h3>
                  <p className="leading-relaxed text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h2 className="mb-6 text-2xl font-bold text-white">When I&apos;m Not Coding</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
                <span>
                  <strong>Music:</strong> Playing drums to classic rock and smooth jazz
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
                <span>
                  <strong>Sports:</strong> Playing basketball and watching both basketball and
                  football
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
                <span>
                  <strong>Reading:</strong> Michael Crichton novels (Jurassic Park is my favorite)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
                <span>
                  <strong>Family Time:</strong> Bike rides around Utah Valley with my son
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h2 className="mb-6 text-2xl font-bold text-white">Current Projects & Dreams</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="mb-2 font-semibold text-white">Disneyland Simulator</h3>
                <p className="text-sm leading-relaxed">
                  Building a digital experience that captures the feeling of a day at Disneyland,
                  helping users manage their time and maximize their park experience.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white">Future Game Studio</h3>
                <p className="text-sm leading-relaxed">
                  My ultimate goal is to start my own game development studio, creating rich,
                  story-driven single-player games that offer immersive experiences.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white">Entrepreneurial Vision</h3>
                <p className="text-sm leading-relaxed">
                  Beyond becoming a senior developer, I aspire to start my own company, combining
                  technical expertise with business acumen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-bold text-white">Let&apos;s Connect</h2>
          <p className="mx-auto mb-6 max-w-2xl text-gray-300">
            Whether you want to discuss frontend development, swap Michael Crichton book
            recommendations, or talk about the future of gaming, I&apos;d love to connect.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
