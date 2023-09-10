
import APIClient from "../services/api-client";
import { PokemonsList } from "./usePokemonList";
import Pokemon from "../entities/Pokemon";
import { useQueries } from "@tanstack/react-query";

const apiClient = new APIClient<Pokemon>("pokemon")

const usePokemon = (PokemonsList: PokemonsList[]) => {
  PokemonsList = PokemonsList || [];
  const queries = PokemonsList.map((pokemon) => {
    return {
      queryKey: ["pokemons", pokemon.name],
      queryFn: () => apiClient.get(pokemon.url),
    };
  });

  return useQueries({ queries }); 
};

export default usePokemon