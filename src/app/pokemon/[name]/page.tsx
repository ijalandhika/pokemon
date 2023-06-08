"use client";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import { useGetPokemonByNameQuery } from "@/redux/services/pokemonApi";
import CardDetail from "@/components/card/detail";
import DetailLoading from "@/components/loading/detail";

import type { PokemonData } from "@/lib/types";

type IDetailPage = {
  params: {
    name: string;
  };
};

export default function DetailPage({ params }: IDetailPage) {
  const { name } = params;
  const { isLoading, data } = useGetPokemonByNameQuery(name);

  if (isLoading) return <DetailLoading />;

  return (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container px-5 py-6 mx-auto">
        <CardDetail data={data as PokemonData} />
      </div>
      <ToastContainer />
    </section>
  );
}
