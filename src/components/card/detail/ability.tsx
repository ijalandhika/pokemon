import { FC } from "react";
import type { Ability } from "@/lib/types";

interface ICardDetailAbility {
  abilities: Ability[];
}

const CardDetailAbility: FC<ICardDetailAbility> = ({ abilities }) => {
  return (
    <div className="leading-relaxed">
      <h3 className="font-bold">Abilities:</h3>
      {abilities?.map((ability: Ability) => (
        <button
          key={ability.slot}
          className="bg-green-400 text-white font-bold py-2 px-4 rounded-full mr-2"
        >
          {ability.ability.name}
        </button>
      ))}
    </div>
  );
};

export default CardDetailAbility;
