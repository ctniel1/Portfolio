export function LoadingSkeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-white/10 ${className}`} />;
}

export function ProjectCardSkeleton() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <LoadingSkeleton className="mb-4 h-40" />
      <LoadingSkeleton className="mb-2 h-6 w-3/4" />
      <LoadingSkeleton className="mb-2 h-4 w-full" />
      <LoadingSkeleton className="mb-4 h-4 w-2/3" />
      <div className="mb-4 flex gap-2">
        <LoadingSkeleton className="h-6 w-16" />
        <LoadingSkeleton className="h-6 w-20" />
        <LoadingSkeleton className="h-6 w-14" />
      </div>
      <div className="flex gap-2">
        <LoadingSkeleton className="h-9 w-24" />
        <LoadingSkeleton className="h-9 w-20" />
      </div>
    </div>
  );
}
