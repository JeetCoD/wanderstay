import Image from "next/image";
import Link from "next/link";
import logo from "@/public/wanderstay.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        alt="wanderStay - cheap stays in USA"
        src={logo}
        quality={100}
        className="object-cover w-16 h-16 md:block hidden"
      />

      <p className="text-2xl font-bold uppercase tracking-tight">WanderStay</p>
    </Link>
  );
}
