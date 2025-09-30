import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import UserDropdowm from "./UserDropdowm";

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            width={50}
            height={32}
            className="h-8 w-auto cursor-pointer"
            alt="Logo"
          />
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
