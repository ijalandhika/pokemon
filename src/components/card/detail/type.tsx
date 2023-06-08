import { FC } from "react";
import type { Type } from "@/lib/types";

interface ICardDetailTypes {
  types: Type[];
}
const CardDetailTypes: FC<ICardDetailTypes> = ({ types }) => {
  return (
    <>
      {types?.map((type: Type) => (
        <button
          key={type.slot}
          className="bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        >
          {type.type.name}
        </button>
      ))}
    </>
  );
};

export default CardDetailTypes;
