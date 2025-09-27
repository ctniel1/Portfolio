'use client';

import Image from 'next/image';
import { useState } from 'react';

interface CompanyLogoProps {
  src: string;
  alt: string;
  company: string;
}

export function CompanyLogo({ src, alt }: CompanyLogoProps) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    // Fallback to generic company icon if logo fails to load
    setImageSrc(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'/%3E%3Crect width='20' height='14' x='2' y='6' rx='2'/%3E%3C/svg%3E"
    );
  };

  return (
    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white/10">
      <Image
        src={imageSrc}
        alt={alt}
        width={48}
        height={48}
        className="rounded-lg"
        onError={handleError}
      />
    </div>
  );
}
