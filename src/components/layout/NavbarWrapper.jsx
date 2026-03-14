"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import NavbarHome2 from "./NavbarHome2";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const isHome2 = pathname === "/home-2";
  const isHome3 = pathname === "/home-3";

  if (isHome2 || isHome3) {
    return <NavbarHome2 />;
  }

  return <NavbarHome2 />;
}
