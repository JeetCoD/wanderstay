import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import SignOutButton from "./SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-stone-700" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-stone-700" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-stone-700" />,
  },
];

function SideNavigation() {
  return (
    <nav className="border-r border-stone-200">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-stone-100 hover:text-stone-950 transition-colors flex items-center gap-4 font-semibold text-stone-700`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
