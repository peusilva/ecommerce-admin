"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const SetupPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="p-4 flex gap-5 items-center">
      <UserButton />
      <p>Hello, {user.firstName} this is your Admin Dashboard</p>
    </div>
  );
};

export default SetupPage;
