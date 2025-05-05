import React from "react";
import Navbar from "./Navbar";
import Logo from "./ui/Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 z-10 backdrop-blur-lg border-b shadow-sm">
      <Logo />
      <Navbar />
    </header>
  );
}
