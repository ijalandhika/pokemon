"use client";

import useSearchPokemon from "@/hooks/useSearchPokemon";
import Card from "@/components/card";
import CategoryLoading from "@/components/loading/category";

export default function Home() {
  const { isLoading, data, next, previous, onFetchNext, onFetchPrevious } =
    useSearchPokemon();

  if (isLoading) return <CategoryLoading total={15} />;

  return (
    <div className="mt-4">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {data?.results.map((e: any, i: number) => (
            <Card
              name={e.name}
              index={i + 1}
              key={`keysnumber-${i.toString()}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center gap-5">
        <button
          disabled={!previous}
          className="disabled:bg-gray-300 px-3 py-1 bg-blue-300"
          onClick={() => onFetchPrevious()}
        >
          prev
        </button>
        <button
          disabled={!next}
          className="disabled:bg-gray-300 px-3 py-1 bg-blue-300"
          onClick={() => onFetchNext()}
        >
          next
        </button>
      </div>
    </div>
  );
}
