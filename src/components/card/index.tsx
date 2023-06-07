import { FC } from "react";

export interface ICard {
  image: string;
  name: string;
  type: string;
}

const Card: FC<ICard> = ({ image, name, type }) => {
  return (
    <a href="#" className="group my-2">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-300 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        <div className="p-2 bg-blue-300">
          <h3 className="mt-4 text-sm text-gray-700 truncate block">{type}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">{name}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
