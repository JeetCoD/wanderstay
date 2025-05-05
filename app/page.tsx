import Image from "next/image";
import hero from "@/public/hero.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Wander stay hotel - best hotel at cheap rates in USA"
          fill
          placeholder="blur" //blur when loading
          priority
          quality={80}
          className="object-cover content-evenly"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="z-10 text-center px-4 mx-auto h-[80vh]  flex items-center justify-center flex-col gap-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 md:mb-10 tracking-tight font-medium">
          Welcome to paradise.
        </h1>
        <Link href="/cabins">
          <Button size="lg">Explore Luxury Rooms</Button>
        </Link>
      </div>
    </main>
  );
}
