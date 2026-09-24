"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });

const NavbarWrapper = () => {
  return <Navbar />;
};

export default NavbarWrapper;