import Image from "next/image";
import React from "react";

export default function EmptySearch() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Image
        src="/empty-search.svg"
        alt="Empty search"
        height={140}
        width={140}
      />
      <h2 className="text-2xl font-semibold mt-6">No results found!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try searching for something else!
      </p>
    </div>
  );
}
