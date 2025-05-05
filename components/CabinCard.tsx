import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Cabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description: string;
}

interface CabinCardProps {
  cabin: Cabin;
}

export default function CabinCard({ cabin }: CabinCardProps) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  const discountedPrice = regularPrice - discount;
  const hasDiscount = discount > 0;
  const discountPercentage = Math.round((discount / regularPrice) * 100);

  return (
    <Card className="overflow-hidden flex flex-col h-full group hover:shadow-lg transition-all duration-300">
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=240&width=400"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {hasDiscount && (
          <Badge
            variant="destructive"
            className="absolute top-3 right-3 font-semibold shadow-md px-2 py-1"
          >
            {discountPercentage}% OFF
          </Badge>
        )}
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription className="line-clamp-2 mt-1">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-0 pt-0 flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="flex items-center gap-1.5 py-1">
            <Users size={14} className="text-muted-foreground" />
            <span className="text-sm font-medium">
              Fits up to {maxCapacity}
            </span>
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="pt-2">
        <div className="w-full">
          <Separator className="mb-4" />
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              {hasDiscount ? (
                <>
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-xl">
                      ${discountedPrice}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${regularPrice}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    per night
                  </span>
                </>
              ) : (
                <>
                  <span className="font-bold text-xl">${regularPrice}</span>
                  <span className="text-sm text-muted-foreground">
                    per night
                  </span>
                </>
              )}
            </div>
            <Link href={`/cabins/${id}`}>
              <Button>Book now</Button>
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
