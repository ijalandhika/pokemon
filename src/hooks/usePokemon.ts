import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { saveMonster, releaseMonster } from "@/redux/features/savePokemon";
import type { PokemonData } from "@/lib/types";

const usePokemon = (data: PokemonData) => {
  const dispatch = useAppDispatch();

  const { id, name } = data;
  const pokeIndex = ("000" + id).slice(-3);
  const pokemons = useAppSelector((state) => state.poketMonsterReducer.value);

  const isOwned = pokemons.find((e) => e.name === name);

  const onSaveMonster = () => {
    dispatch(saveMonster({ name, index: pokeIndex }));
  };

  const onReleaseMonster = () => {
    dispatch(releaseMonster(name));
  };

  return {
    onSaveMonster,
    pokeIndex,
    isOwned,
    onReleaseMonster,
  };
};

export default usePokemon;
