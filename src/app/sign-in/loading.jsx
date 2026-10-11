import { AuthFormSkeleton } from "@/components/Skeleton";

export default function Loading() {
  return <AuthFormSkeleton titleWidth="w-24" subtitleWidth="w-72" fields={2} />;
}