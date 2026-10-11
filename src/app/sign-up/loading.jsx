import { AuthFormSkeleton } from "@/components/Skeleton";

export default function Loading() {
  return <AuthFormSkeleton titleWidth="w-52" subtitleWidth="w-64" fields={4} />;
}