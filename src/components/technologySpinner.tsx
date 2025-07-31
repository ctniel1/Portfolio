import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

const techIcons = [
  'react',
  'typescript',
  'javascript',
  'html',
  'css',
  'nextjs',
  'angular',
  'vue',
  'redux',
  'nodejs',
  'mysql',
  'java',
  'kotlin',
  'php',
  'git',
  'figma',
  'jira',
  'jest',
  'drupal',
  'wordpress',
  'unity',
  'csharp',
  'graphql',
  'cpp',
  'python',
  'docker',
  'aws',
];

const paths = [
  { from: 'topleft', to: 'bottomright' },
  { from: 'topright', to: 'bottomleft' },
  { from: 'middleleft', to: 'middleright' },
  { from: 'bottomleft', to: 'topright' },
  { from: 'bottomright', to: 'topleft' },
  { from: 'middleright', to: 'middleleft' },
];

interface AnimatedIcon {
  id: number;
  tech: string;
  pathIndex: number;
}

export default function TechnologySpinner() {
  const [icons, setIcons] = useState<AnimatedIcon[]>([]);
  const pathTimers = useRef<number[]>(Array(paths.length).fill(0));
  const duration = 9000; // 9 seconds for each icon to complete the path

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();

      for (let i = 0; i < paths.length; i++) {
        if (now > pathTimers.current[i]) {
          const tech = techIcons[Math.floor(Math.random() * techIcons.length)];
          setIcons(prevIcons => [...prevIcons, { id: now + i, tech, pathIndex: i }]);
          pathTimers.current[i] = now + duration;
          break;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleAnimationEnd = (id: number) => {
    setIcons(prevIcons => prevIcons.filter(icon => icon.id !== id));
  };

  return (
    <>
      <div>
        <Image
          src="/assets/devBackground.png"
          alt="png image from pngtree.com"
          width={2000}
          height={2000}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        {icons.map(icon => {
          const { from, to } = paths[icon.pathIndex];
          const animationName = `${from}To${to}`;
          return (
            <Image
              key={icon.id}
              src={`/assets/icons/${icon.tech}.png`}
              alt={icon.tech}
              width={80}
              height={80}
              className={`absolute ${animationName}`}
              style={{
                animation: `${animationName} ${duration}ms linear forwards`,
                top: '0%',
                left: '0%',
                borderRadius: '20px',
                border: '2px solid #000',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              }}
              onAnimationEnd={() => handleAnimationEnd(icon.id)}
            />
          );
        })}
      </div>

      <style jsx>{`
        @keyframes topleftTobottomright {
          0% {
            top: 0%;
            left: 0%;
            transform: scale(0);
            opacity: 0;
          }
          10% {
            transform: scale(1);
            opacity: 1;
          }
          90% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            top: 100%;
            left: 100%;
            transform: scale(0);
            opacity: 0;
          }
        }

        @keyframes toprightTobottomleft {
          0% {
            top: 0%;
            left: 100%;
            transform: scale(0);
            opacity: 0;
          }
          10% {
            transform: scale(1);
            opacity: 1;
          }
          90% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            top: 100%;
            left: 0%;
            transform: scale(0);
            opacity: 0;
          }
        }

        @keyframes middleleftTomiddleright {
          0% {
            top: 50%;
            left: 0%;
            transform: translateY(-50%) scale(0);
            opacity: 0;
          }
          10% {
            transform: translateY(-50%) scale(1);
            opacity: 1;
          }
          90% {
            transform: translateY(-50%) scale(1);
            opacity: 1;
          }
          100% {
            top: 50%;
            left: 100%;
            transform: translateY(-50%) scale(0);
            opacity: 0;
          }
        }

        @keyframes bottomleftTotopright {
          0% {
            top: 100%;
            left: 0%;
            transform: scale(0);
            opacity: 0;
          }
          10% {
            transform: scale(1);
            opacity: 1;
          }
          90% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            top: 0%;
            left: 100%;
            transform: scale(0);
            opacity: 0;
          }
        }

        @keyframes bottomrightTotopleft {
          0% {
            top: 100%;
            left: 100%;
            transform: scale(0);
            opacity: 0;
          }
          10% {
            transform: scale(1);
            opacity: 1;
          }
          90% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            top: 0%;
            left: 0%;
            transform: scale(0);
            opacity: 0;
          }
        }

        @keyframes middlerightTomiddleleft {
          0% {
            top: 50%;
            left: 100%;
            transform: translateY(-50%) scale(0);
            opacity: 0;
          }
          10% {
            transform: translateY(-50%) scale(1);
            opacity: 1;
          }
          90% {
            transform: translateY(-50%) scale(1);
            opacity: 1;
          }
          100% {
            top: 50%;
            left: 0%;
            transform: translateY(-50%) scale(0);
            opacity: 0;
          }
        }

        .topleftTobottomright {
          animation-name: topleftTobottomright;
        }
        .toprightTobottomleft {
          animation-name: toprightTobottomleft;
        }
        .middleleftTomiddleright {
          animation-name: middleleftTomiddleright;
        }
        .bottomleftTotopright {
          animation-name: bottomleftTotopright;
        }
        .bottomrightTotopleft {
          animation-name: bottomrightTotopleft;
        }
        .middlerightTomiddleleft {
          animation-name: middlerightTomiddleleft;
        }
      `}</style>
    </>
  );
}
