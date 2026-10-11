
import { Suspense } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import SignInForm from "@/components/SignInForm";
import { AuthFormSkeleton } from "@/components/Skeleton";

async function SignInContent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) redirect("/");

  return <SignInForm />;
}

export default function SignInPage() {
  return (
    <Suspense fallback={<AuthFormSkeleton titleWidth="w-24" subtitleWidth="w-72" fields={2} />}>
      <SignInContent />
    </Suspense>
  );
}
