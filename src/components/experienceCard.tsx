'use client';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  highlights: string[];
  isCurrentRole?: boolean;
}

export function ExperienceCard({
  title,
  company,
  duration,
  location,
  highlights,
  isCurrentRole = false,
}: ExperienceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10">
      {isCurrentRole && (
        <div className="absolute top-4 right-4">
          <span className="rounded-full border border-green-400/20 bg-green-500/20 px-3 py-1 text-xs font-medium text-green-300">
            Current
          </span>
        </div>
      )}

      <div className="mb-4">
        <h3 className="mb-1 text-xl font-semibold text-white">{title}</h3>
        <p className="mb-1 text-lg font-medium text-blue-300">{company}</p>
        <p className="text-sm text-gray-400">
          {duration} · {location}
        </p>
      </div>

      <ul className="space-y-2">
        {highlights.slice(0, 3).map((highlight, index) => (
          <li key={index} className="flex items-start space-x-2 text-gray-300">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"></span>
            <span className="text-sm leading-relaxed">{highlight}</span>
          </li>
        ))}
        {highlights.length > 3 && (
          <li className="text-sm text-gray-400 italic">
            +{highlights.length - 3} more achievements
          </li>
        )}
      </ul>
    </div>
  );
}
