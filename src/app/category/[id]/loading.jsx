import { Bar, SkeletonStyle } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl space-y-4 px-4 py-6" aria-busy="true">
      <SkeletonStyle />

      <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5">
        <Bar className="h-12 w-12 shrink-0 rounded-xl" />
        <div className="space-y-2">
          <Bar className="h-7 w-40" />
          <Bar className="h-4 w-56 max-w-full" />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 rounded-2xl border border-gray-100 bg-white p-4">
        <Bar className="h-4 w-10" />
        <Bar className="h-[38px] w-40 rounded-lg" />
      </div>

      <Bar className="h-4 w-44" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-gray-100 bg-white p-4">
            <div className="flex items-center gap-3">
              <Bar className="h-12 w-12 shrink-0 rounded-xl" />
              <div className="flex-1 space-y-2">
                <Bar className="h-4 w-3/4" />
                <Bar className="h-3 w-1/2" />
              </div>
            </div>
            <Bar className="mt-4 h-7 w-24" />
          </div>
        ))}
      </div>
    </div>
  );
}