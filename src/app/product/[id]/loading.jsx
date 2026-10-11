import { Bar, SkeletonStyle } from "@/components/Skeleton";

export default function Loading() {
  return (
    <main>
      <div className="mx-auto w-full max-w-6xl space-y-5 px-4 py-6" aria-busy="true">
        <SkeletonStyle />

        <div className="flex items-center gap-2">
          <Bar className="h-4 w-8" />
          <Bar className="h-4 w-2" />
          <Bar className="h-4 w-12" />
          <Bar className="h-4 w-2" />
          <Bar className="h-4 w-24" />
        </div>

        <section className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Bar className="h-20 w-20 shrink-0 rounded-2xl" />
            <div>
              <Bar className="h-8 w-44" />
              <Bar className="mt-1 h-4 w-28" />
              <Bar className="mt-1 h-4 w-60 max-w-full" />
            </div>
          </div>
          <Bar className="h-[120px] w-full rounded-xl sm:w-[150px]" />
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <Bar className="mb-4 h-5 w-28" />
          <div className="grid gap-3 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-4">
                <Bar className="h-4 w-20" />
                <Bar className="h-8 w-24" />
                <Bar className="mt-1 h-4 w-36" />
              </div>
            ))}
          </div>

          <Bar className="mb-3 mt-8 h-5 w-40" />
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <div className="grid grid-cols-5 gap-4 bg-gray-50 px-4 py-3">
              <Bar className="h-4 w-10" />
              <Bar className="h-4 w-10" />
              <Bar className="ml-auto h-4 w-14" />
              <Bar className="ml-auto h-4 w-14" />
              <Bar className="ml-auto h-4 w-8" />
            </div>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`grid grid-cols-5 items-center gap-4 border-t border-gray-200 px-4 py-3 ${
                  i % 2 ? "bg-gray-50/60" : "bg-white"
                }`}
              >
                <Bar className="h-5 w-28" />
                <Bar className="h-5 w-16" />
                <Bar className="ml-auto h-5 w-16" />
                <Bar className="ml-auto h-5 w-16" />
                <Bar className="ml-auto h-5 w-20" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}