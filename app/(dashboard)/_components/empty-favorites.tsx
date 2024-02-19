import Image from "next/image";
import React from "react";

export default function EmptyFavorites() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Image
        src="/empty-favorites.svg"
        alt="Empty search"
        height={140}
        width={140}
      />
      <h2 className="text-2xl font-semibold mt-6">No favorite boards!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favoriting a board!
      </p>
    </div>
  );
}
