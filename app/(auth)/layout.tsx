import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const QUOTES = [
  {
    text: "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
    author: "Philip Fisher",
    designation: "Author of Common Stocks and Uncommon Profits",
  },
  {
    text: "In investing, what is comfortable is rarely profitable.",
    author: "Robert Arnott",
    designation: "Founder of Research Affiliates",
  },
  {
    text: "The four most dangerous words in investing are: 'This time it's different.'",
    author: "Sir John Templeton",
    designation: "Investor & Philanthropist",
  },
  {
    text: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett",
    designation: "CEO of Berkshire Hathaway",
  },
  {
    text: "Know what you own, and know why you own it.",
    author: "Peter Lynch",
    designation: "Former Manager of Magellan Fund",
  },
  {
    text: "Wide diversification is only required when investors do not understand what they are doing.",
    author: "Warren Buffett",
    designation: "CEO of Berkshire Hathaway",
  },
];

const getRandomQuote = () => {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
};

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.user) redirect("/");
  const quote = getRandomQuote();
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href="/" className="auth-logo flex items-center gap-2">
          <Image
            src="/assets/logo.svg"
            width={140}
            height={32}
            className="h-8 w-auto"
            alt="Logo"
          />
          <span className="text-xl font-bold text-foreground">FinTrack</span>
        </Link>
        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>

      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-2">
          <blockquote
            className="mb-2 px-6 py-6 rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 shadow-lg border border-gray-700"
            style={{
              fontSize: "1.25rem",
              fontWeight: 500,
              color: "#e5e7eb",
              letterSpacing: "0.01em",
              lineHeight: "1.6",
              position: "relative",
            }}
          >
            <span className="block mb-4 text-emerald-400">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="inline-block w-7 h-7 mr-2 align-middle opacity-80"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 7h.01M15 7h.01M7 11h10M7 15h10M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg> */}
              {quote.text}
            </span>
            <span className="block mt-6 text-sm text-gray-400 font-medium">
              <span className="font-semibold text-gray-200">
                {quote.author}
              </span>
              <span className="ml-2 text-gray-500">{quote.designation}</span>
            </span>
          </blockquote>
        </div>

        <div className="flex-1 relative">
          <Image
            src="/assets/images/dashboard.png"
            alt="Preview"
            width={1440}
            height={1150}
            className="auth-dashboard-preview absolute top-0"
          />
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
