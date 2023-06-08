import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PokemonList, PokemonData } from "@/lib/types";

const LIMIT = 15;

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<PokemonData, string>({
      query: (name) => `/pokemon/${name}`,
    }),
    getPokemons: builder.query<PokemonList, number | void>({
      query: (offset = 0) => `/pokemon?limit=${LIMIT}&offset=${offset}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonsQuery } = pokemonApi;
export const { endpoints, reducerPath, reducer, middleware } = pokemonApi;
