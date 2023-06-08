"use client";

import { useAppSelector } from "@/redux/hooks";
import Card from "@/components/card";

export default function PoketPage() {
  const pokemons = useAppSelector((state) => state.poketMonsterReducer.value);

  return (
    <div className="mt-4">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {pokemons?.map((e: any, i: number) => (
            <Card
              name={e.name}
              index={e.index}
              key={`keysnumber-${i.toString()}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
