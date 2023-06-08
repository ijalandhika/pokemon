"use client";

import { useGetPokemonsQuery } from "@/redux/services/pokemonApi";
import { useState } from "react";

import Card from "@/components/card";

export default function Home() {
  const [offset, setOffset] = useState(0);

  const { isLoading, data } = useGetPokemonsQuery(0);
  return (
    <div className="mt-4">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {data?.results.map((e: any, i: number) => (
            <Card name={e.name} index={i} key={`keysnumber-${i.toString()}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
