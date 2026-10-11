import { Bar, SkeletonStyle } from "@/components/Skeleton";
import { ProductCardSkeleton } from "@/components/ProductCard";

function HeroSkeleton() {
  return (
    <section className="mx-auto mt-6 max-w-6xl px-4" aria-hidden="true">
      <div className="flex items-center justify-between gap-6 rounded-2xl border border-gray-200 bg-white px-6 py-10 sm:px-8 md:py-14">
        <div className="w-full max-w-xl">

          <Bar className="h-6 w-44 rounded-full" />


          <Bar className="mt-3 h-9 w-full max-w-md sm:h-10" />


          <div className="mt-3">
            <div className="flex h-[23px] items-center">
              <Bar className="h-3.5 w-full" />
            </div>
            <div className="flex h-[23px] items-center">
              <Bar className="h-3.5 w-3/4" />
            </div>
          </div>


          <Bar className="mt-6 h-10 w-32 rounded-lg" />
        </div>

        {/* image (md+ only, same as real Hero) */}
        <div className="hidden shrink-0 pr-4 md:block">
          <Bar className="h-52 w-[246px] rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

function SectionSkeleton({ count = 6 }) {
  return (
    <section className="space-y-4">

      <div className="flex items-center justify-between">
        <Bar className="h-7 w-40" />
        <Bar className="h-4 w-16" />
      </div>


      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}

export default function Loading() {
  return (
    <>
      <SkeletonStyle />

      <HeroSkeleton />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-6" aria-busy="true">

        <SectionSkeleton />

        <SectionSkeleton />

        <SectionSkeleton count={9} />
      </div>
    </>
  );
}