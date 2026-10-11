import { Suspense } from "react";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import ProfileCard from "@/components/ProfileCard";

async function ProfileContent() {
  const session = await getSession();

  if (!session?.user) redirect("/sign-in");

  const { id, name, email, image } = session.user;

  return (
    <main className="min-h-[70vh] px-4 py-10">
      <ProfileCard user={{ id, name, email, image: image || null }} />
    </main>
  );
}

export default function ProfilePage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-[70vh] px-4 py-10">
          <p className="text-gray-500">Loading profile...</p>
        </main>
      }
    >
      <ProfileContent />
    </Suspense>
  );
}