import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import UserDropdowm from "./UserDropdowm";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.svg"
            width={50}
            height={32}
            className="h-8 w-auto cursor-pointer"
            alt="Logo"
          />
          <span className="text-xl font-bold text-foreground">FinTrack</span>
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdowm />
      </div>
    </header>
  );
};

export default Header;
