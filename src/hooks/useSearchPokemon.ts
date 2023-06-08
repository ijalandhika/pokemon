import { useState } from "react";
import { useGetPokemonsQuery } from "@/redux/services/pokemonApi";

const useSearchPokemon = () => {
  const [offset, setOffet] = useState(0);

  const { isLoading, data } = useGetPokemonsQuery(offset);

  const onUpdateOffset = (link: string) => {
    const url = new URL(link);
    const nextOffset = url.searchParams.get("offset") || 0;
    setOffet(+nextOffset);
  };

  const onFetchNext = () => {
    if (data?.next) {
      onUpdateOffset(data?.next);
    }
  };

  const onFetchPrevious = () => {
    if (data?.previous) {
      onUpdateOffset(data?.previous);
    }
  };

  return {
    isLoading,
    data,
    next: !!data?.next,
    previous: !!data?.previous,
    onFetchNext,
    onFetchPrevious,
  };
};

export default useSearchPokemon;
