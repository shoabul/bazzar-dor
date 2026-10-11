export function Bar({ className = "" }) {
  return <div className={`sk ${className.includes("rounded") ? "" : "rounded-md"} ${className}`} />;
}

export function SkeletonStyle() {
  return (
    <style>{`
      .sk{background:linear-gradient(90deg,#e6ebe7 25%,#f3f6f3 50%,#e6ebe7 75%);background-size:200% 100%;animation:sk-shimmer 1.4s ease-in-out infinite}
      @keyframes sk-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
    `}</style>
  );
}

export function AuthFormSkeleton({ titleWidth = "w-24", subtitleWidth = "w-72", fields = 2 }) {
  return (
    <div className="mx-auto mt-12 w-full max-w-md px-4 pb-16" aria-busy="true">
      <SkeletonStyle />


      <div className="flex h-8 items-center justify-center">
        <Bar className={`h-6 ${titleWidth}`} />
      </div>

      <div className="mt-1 flex h-4 items-center justify-center">
        <Bar className={`h-3 max-w-full ${subtitleWidth}`} />
      </div>

      <div className="mt-6 space-y-4 rounded-2xl border border-gray-200 bg-white p-6">
        {Array.from({ length: fields }).map((_, i) => (
          <div key={i}>
            <div className="flex h-4 items-center">
              <Bar className="h-3 w-14" />
            </div>
            <Bar className="mt-1 h-[38px] w-full rounded-lg" />
          </div>
        ))}


        <Bar className="h-10 w-full rounded-lg" />


        <div className="flex h-4 items-center gap-3">
          <span className="h-px flex-1 bg-gray-200" />
          <Bar className="h-3 w-8" />
          <span className="h-px flex-1 bg-gray-200" />
        </div>


        <div className="space-y-2">
          <Bar className="h-10 w-full rounded-lg" />
          <Bar className="h-10 w-full rounded-lg" />
        </div>


        <div className="flex h-4 items-center justify-center">
          <Bar className="h-3 w-44" />
        </div>
      </div>


      <div className="mt-6 flex h-4 items-center justify-center">
        <Bar className="h-3 w-32" />
      </div>
    </div>
  );
}