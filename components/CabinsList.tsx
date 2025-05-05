import React from "react";
import CabinCard from "@/components/CabinCard";
import { getCabins } from "@/lib/supabase/data-service";

export default async function CabinsList() {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  return (
    <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
