import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

export interface ICard {
  name: string;
  index: number;
}

const Card: FC<ICard> = ({ name, index }) => {
  const pokeIndex = ("000" + index).slice(-3);

  return (
    <Link href={`/pokemon/${name}`} className="group my-2">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-300 xl:aspect-h-8 xl:aspect-w-7">
        <div className="bg-slate-900 rounded p-5 flex flex-col justify-center items-center relative">
          <Image
            alt={name}
            width={150}
            height={150}
            src={`${process.env.POKEMON_ASSET_BASE_URL}/${pokeIndex}.png`}
          />
        </div>
        <div className="p-2 bg-blue-300 flex flex-col justify-center items-center relative">
          <p className="mt-1 uppercase text-lg tracking-wider font-semibold text-gray-900">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
