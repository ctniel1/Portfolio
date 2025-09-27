'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10">
      {imageUrl && (
        <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={225}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <p className="mb-4 leading-relaxed text-gray-300">{description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map(tech => (
            <span
              key={tech}
              className="rounded-full border border-blue-400/20 bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {liveUrl && (
            <Button asChild variant="primary" size="sm">
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </Link>
            </Button>
          )}
          {githubUrl && (
            <Button asChild variant="secondary" size="sm">
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
