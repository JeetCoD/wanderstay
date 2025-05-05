import Link from "next/link";
import React from "react";

type NavItem = {
  name: string;
  href: string;
};

const NAVBAR: NavItem[] = [
  {
    name: "Rooms",
    href: "/cabins",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Account",
    href: "/account",
  },
];
function Navbar() {
  return (
    <div className="flex">
      <ul className="flex gap-4 font-medium  ">
        {NAVBAR.map((el) => (
          <li key={el.name}>
            <Link
              href={el.href}
              className="hover:bg-stone-100 p-2 rounded-md transition-all ease-in"
            >
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
