'use client';

import { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
  color: string;
}

interface FloatingTech {
  id: number;
  text: string;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  opacity: number;
  scale: number;
}

const techTerms = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'GraphQL',
  'AWS',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Git',
  'Docker',
  'MySQL',
  'Redux',
  'Jest',
  'Figma',
  'Tailwind',
  'Vue',
  'Angular',
];

const colors = [
  'rgb(59, 130, 246)', // blue-500
  'rgb(147, 51, 234)', // purple-500
  'rgb(236, 72, 153)', // pink-500
  'rgb(34, 197, 94)', // green-500
  'rgb(245, 158, 11)', // amber-500
];

export default function AnimatedHero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [floatingTech, setFloatingTech] = useState<FloatingTech[]>([]);
  const animationRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      return; // Skip animations if user prefers reduced motion
    }

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Initialize particles
    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      velocityX: (Math.random() - 0.5) * 0.5,
      velocityY: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // Initialize floating tech terms
    const initialTech: FloatingTech[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      text: techTerms[Math.floor(Math.random() * techTerms.length)],
      x: Math.random() * width,
      y: Math.random() * height,
      velocityX: (Math.random() - 0.5) * 0.3,
      velocityY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.3 + 0.1,
      scale: Math.random() * 0.5 + 0.5,
    }));

    setParticles(initialParticles);
    setFloatingTech(initialTech);

    const animate = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + particle.velocityX;
          let newY = particle.y + particle.velocityY;

          // Wrap around edges
          if (newX > width) newX = 0;
          if (newX < 0) newX = width;
          if (newY > height) newY = 0;
          if (newY < 0) newY = height;

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );

      setFloatingTech(prevTech =>
        prevTech.map(tech => {
          let newX = tech.x + tech.velocityX;
          let newY = tech.y + tech.velocityY;

          // Wrap around edges
          if (newX > width) newX = -100;
          if (newX < -100) newX = width;
          if (newY > height) newY = -50;
          if (newY < -50) newY = height;

          return {
            ...tech,
            x: newX,
            y: newY,
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)
            `,
            animation: 'gradientShift 8s ease-in-out infinite alternate',
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute animate-pulse rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}

      {/* Floating tech terms */}
      {floatingTech.map(tech => (
        <div
          key={tech.id}
          className="pointer-events-none absolute font-mono text-xs font-medium select-none"
          style={{
            left: `${tech.x}px`,
            top: `${tech.y}px`,
            opacity: tech.opacity,
            transform: `scale(${tech.scale}) rotate(${tech.x * 0.1}deg)`,
            color: colors[Math.floor(Math.random() * colors.length)],
            textShadow: '0 0 10px currentColor',
          }}
        >
          {tech.text}
        </div>
      ))}

      {/* Geometric shapes */}
      <div className="absolute inset-0">
        <div
          className="absolute h-64 w-64 animate-spin rounded-full border border-blue-400/20"
          style={{
            top: '10%',
            left: '10%',
            animationDuration: '20s',
            transformStyle: 'preserve-3d',
          }}
        />
        <div
          className="absolute h-48 w-48 rotate-45 animate-pulse border border-purple-400/20"
          style={{
            bottom: '20%',
            right: '15%',
            animationDuration: '4s',
          }}
        />
        <div
          className="absolute h-32 w-32 animate-bounce rounded-lg border border-pink-400/20"
          style={{
            top: '60%',
            left: '70%',
            animationDuration: '6s',
          }}
        />
      </div>

      {/* Neural network-style connections */}
      <svg className="absolute inset-0 h-full w-full opacity-20">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* Animated connection lines */}
        <line
          x1="10%"
          y1="20%"
          x2="90%"
          y2="80%"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <line
          x1="80%"
          y1="10%"
          x2="20%"
          y2="70%"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <line
          x1="50%"
          y1="90%"
          x2="10%"
          y2="30%"
          stroke="url(#connectionGradient)"
          strokeWidth="1"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </svg>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            transform: scale(1) rotate(0deg);
          }
          100% {
            transform: scale(1.1) rotate(180deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
}
