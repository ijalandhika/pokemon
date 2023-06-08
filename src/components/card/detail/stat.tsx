import { FC } from "react";
import type { Stat } from "@/lib/types";

interface ICardDetailStat {
  stats: Stat[];
}

const CardDetailStat: FC<ICardDetailStat> = ({ stats }) => {
  return (
    <>
      <h3 className="font-bold">Stats:</h3>
      {stats.map((stat: Stat, index: number) => (
        <div key={index} className="rounded border bg-red-900">
          <div className="rounded px-2 text-white">
            {stat.stat.name}: {stat.base_stat}%
          </div>
        </div>
      ))}
    </>
  );
};

export default CardDetailStat;
