"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, useAuth } from "@clerk/nextjs";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Footer from "./components/Footer";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const { isLoaded, userId } = useAuth(); // Use Clerk to get user information

  const words = [
    { text: "Find", className: "text-white" },
    { text: "Opensource", className: "text-white" },
    { text: "projects", className: "text-white" },
    { text: "with", className: "text-white" },
    { text: "Reposight.", className: "text-blue-500 dark:text-blue-500" },
  ];

  useEffect(() => {
    // Redirect to /language if user is signed in
    if (isLoaded && userId) {
      router.push("/language");
    }
  }, [isLoaded, userId, router]);

  return (
    <div className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <TypewriterEffectSmooth words={words} />

      <SignedOut>
        <SignInButton>
          <button className="relative inline-flex md:h-12 h-9 md:w-44 w-32 z-40 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 md:text-xl text-sm font-medium text-white backdrop-blur-3xl">
              Get Started
            </span>
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        {/* This button will only be displayed to signed-in users */}
        <Link href="/language">
          <button className="relative inline-flex md:h-12 h-9 md:w-44 w-32 z-40 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 md:text-xl text-sm font-medium text-white backdrop-blur-3xl">
              Redirecting
            </span>
          </button>
        </Link>
      </SignedIn>

      <div className="z-40">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
