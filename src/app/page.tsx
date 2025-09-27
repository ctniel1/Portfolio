'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/button';
import { ProjectCard } from '@/components/projectCard';
import { ExperienceCard } from '@/components/experienceCard';
import AnimatedHero from '@/components/animatedHero';

export default function Home() {
  const featuredProjects = [
    {
      title: 'Tic-Tac-Toe',
      description:
        'Interactive tic-tac-toe game built with React and TypeScript featuring clean UI and smooth animations.',
      technologies: ['React', 'TypeScript', 'CSS'],
      liveUrl: 'https://tic-tac-toe-cn.vercel.app/',
    },
    {
      title: 'Investment Calculator',
      description:
        'Financial planning tool that helps users calculate investment returns with compound interest visualization.',
      technologies: ['React', 'JavaScript', 'CSS'],
      liveUrl: 'https://investment-calculator-cn.vercel.app/',
    },
  ];

  const recentExperiences = [
    {
      title: 'Software Engineer',
      company: 'Domo',
      duration: 'Aug 2022 – Present',
      location: 'American Fork, UT',
      highlights: [
        "Lead Frontend developer for shifting Domo's pricing model, generating $200k+ expected annual income",
        'Helped rebuild an in-house app store from scratch, participating in tech stack decisions and implementing polished UI',
        'Created customer-facing features with React, TypeScript, Next.js, and Kotlin-based backend services',
      ],
      isCurrentRole: true,
    },
    {
      title: 'Front End Web Developer',
      company: 'FamilySearch',
      duration: 'Apr 2020 – Aug 2022',
      location: 'Lehi, UT',
      highlights: [
        'Translated Figma designs into functional React components with accessibility and performance in mind',
        'Rebuilt legacy Flash apps into modern React web applications',
        'Implemented feedback capture systems using Google Sheets APIs without 3rd-party libraries',
      ],
    },
  ];

  const techSkills = [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'JavaScript',
    'HTML/CSS',
    'Git',
    'AWS',
    'MySQL',
    'Jest',
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <AnimatedHero />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-4xl rounded-3xl border border-white/10 bg-black/10 p-6 text-center backdrop-blur-sm md:p-12">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-7xl">Christopher Nielson</h1>
          <p className="mb-8 text-lg text-blue-200 md:text-xl lg:text-2xl">Senior Frontend Engineer</p>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Passionate about creating exceptional user experiences with modern web technologies.
            Specializing in React, TypeScript, and scalable frontend architecture.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
            <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/60"></div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-black/20 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">About Me</h2>
            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                I&apos;m a Senior Frontend Engineer from Utah County with over 4 years of experience
                building scalable web applications. I&apos;m passionate about UI/UX, performance
                optimization, and creating clean, maintainable code that solves real-world problems.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                Currently leading frontend development at Domo, where I&apos;ve helped generate
                significant revenue through strategic product initiatives and modern application
                development.
              </p>
              <Button asChild variant="secondary">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>

            <div>
              <h3 className="mb-6 text-xl font-semibold text-white">Technologies I Work With</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {techSkills.map(skill => (
                  <div
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-sm text-gray-300 backdrop-blur-sm transition-colors duration-200 hover:bg-white/10 md:px-4 md:text-base"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Preview Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Experience</h2>
            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {recentExperiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="secondary">
              <Link href="/experience">See Full Experience</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="bg-black/20 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Featured Projects</h2>
            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="secondary">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Let&apos;s Connect</h2>
            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
            I&apos;m always interested in discussing new opportunities, collaborating on interesting
            projects, or just connecting with fellow developers. Let&apos;s build something amazing
            together!
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="primary">
              <Link href="mailto:ctniel1@gmail.com">Email Me</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact">More Contact Options</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
