import { FC } from "react";
import Image from "next/image";
import type { PokemonData } from "@/lib/types";
import PokeType from "./type";
import PokeStat from "./stat";
import PokeAbility from "./ability";

interface ICardDetail {
  data: PokemonData;
}

const CardDetail: FC<ICardDetail> = ({ data }) => {
  const pokeIndex = ("000" + data?.id).slice(-3);

  return (
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200">
        <Image
          src={`${process.env.POKEMON_ASSET_BASE_URL}/${pokeIndex}.png`}
          alt={data.name}
          width={400}
          height={400}
        />
      </div>
      <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0 lg:px-3">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 uppercase">
          {data.name}
        </h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <PokeType types={data.types} />
          </span>
        </div>
        <div className="mb-4">
          <PokeStat stats={data.stats} />
        </div>
        <div className="mb-4">
          <PokeAbility abilities={data.abilities} />
        </div>
        {/* <p className="leading-relaxed">
          Abilities: swarm, sniper Some Moves: swords-dance, cut, headbutt,
          fury-attack, take-down
        </p> */}

        <div className="flex">
          <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
            Catch
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
