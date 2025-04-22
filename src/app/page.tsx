import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </main>
  );
};

export default HomePage;
