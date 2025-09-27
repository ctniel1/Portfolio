import { CompanyLogo } from '@/components/companyLogo';

export default function ExperiencePage() {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Domo',
      duration: 'Aug 2022 – Present',
      location: 'American Fork, UT',
      logo: 'https://logo.clearbit.com/domo.com',
      current: true,
      highlights: [
        "Lead Frontend developer for shifting Domo's pricing model, generating $200k+ expected annual income",
        'Helped rebuild an in-house app store from scratch, participating in tech stack decisions and implementing polished UI',
        'Created customer-facing features with React, TypeScript, Next.js, and Kotlin-based backend services',
        'Worked cross-functionally to deliver data apps with feedback-driven iteration cycles',
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Kotlin', 'JavaScript'],
    },
    {
      title: 'Front End Web Developer',
      company: 'FamilySearch',
      duration: 'Apr 2020 – Aug 2022',
      location: 'Lehi, UT',
      logo: 'https://logo.clearbit.com/familysearch.org',
      current: false,
      highlights: [
        'Translated Figma designs into functional React components with accessibility and performance in mind',
        'Rebuilt legacy Flash apps into modern React web applications',
        'Implemented feedback capture systems using Google Sheets APIs without 3rd-party libraries',
        'Maintained test coverage using React Testing Library and Jest',
      ],
      technologies: ['React', 'JavaScript', 'Figma', 'Jest', 'Google Sheets API'],
    },
    {
      title: 'Full Stack Developer',
      company: 'YBA Shirts',
      duration: 'Sep 2019 – Apr 2020',
      location: 'Orem, UT',
      logo: '/api/placeholder/64/64', // Generic placeholder for smaller company
      current: false,
      highlights: [
        'Built internal portal using React, Node.js, and MySQL to track company-wide workflow and orders',
        'Integrated QuickBooks Online for in-app invoice and billing functionality',
      ],
      technologies: ['React', 'Node.js', 'MySQL', 'QuickBooks API'],
    },
    {
      title: 'Full Stack Developer',
      company: 'BYU Athletics',
      duration: 'Apr 2018 – Apr 2020',
      location: 'Provo, UT',
      logo: 'https://logo.clearbit.com/byu.edu',
      current: false,
      highlights: [
        'Used Angular and Drupal CMS to manage byucougars.com content and custom modules',
        'Collaborated with athletic department teams to build fast, optimized microsites for nutrition, sports camps, and boosters',
        'Resolved front-end bugs within 24 hours to maintain site performance',
      ],
      technologies: ['Angular', 'Drupal', 'JavaScript', 'CSS'],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-24">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center md:mb-16">
          <h1 className="mb-4 text-3xl font-bold text-white md:mb-6 md:text-4xl lg:text-5xl">
            Professional Experience
          </h1>
          <div className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 md:mb-6 md:w-24"></div>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
            Over 4+ years of experience building scalable web applications, leading frontend
            initiatives, and collaborating with cross-functional teams to deliver impactful
            solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 md:p-8"
            >
              {/* Current Role Badge */}
              {exp.current && (
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <span className="rounded-full border border-green-400/20 bg-green-500/20 px-2.5 py-1 text-xs font-medium text-green-300 md:px-3 md:text-sm">
                    Current Role
                  </span>
                </div>
              )}

              {/* Header with Logo */}
              <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
                <div className="flex-shrink-0">
                  <CompanyLogo src={exp.logo} alt={`${exp.company} logo`} company={exp.company} />
                </div>

                <div className="flex-1">
                  <h2 className="mb-1 text-xl font-bold text-white md:text-2xl">{exp.title}</h2>
                  <h3 className="mb-2 text-lg font-semibold text-blue-300 md:text-xl">{exp.company}</h3>
                  <div className="flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:items-center md:text-base">
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {exp.duration}
                    </span>
                    <span className="hidden text-gray-500 sm:inline">•</span>
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="mb-4 text-lg font-semibold text-white">Key Achievements</h4>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
                      <span className="leading-relaxed text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-gray-400">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-blue-400/20 bg-blue-600/20 px-3 py-1 text-sm font-medium text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm md:mt-16 md:p-8">
          <h2 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">Ready to Work Together?</h2>
          <p className="mb-4 text-sm text-gray-300 md:mb-6 md:text-base">
            I&apos;m always open to discussing new opportunities and exciting projects.
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
