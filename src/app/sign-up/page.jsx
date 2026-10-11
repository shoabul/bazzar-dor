
import { Suspense } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import SignUpForm from "@/components/SignUpForm";
import { AuthFormSkeleton } from "@/components/Skeleton";

async function SignUpContent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) redirect("/");

  return <SignUpForm />;
}

export default function SignUpPage() {
  return (
    <Suspense fallback={<AuthFormSkeleton titleWidth="w-52" subtitleWidth="w-64" fields={4} />}>
      <SignUpContent />
    </Suspense>
  );
}
