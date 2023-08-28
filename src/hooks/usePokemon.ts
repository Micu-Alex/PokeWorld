import { useQueries } from "react-query";
import APIClient from "../services/api-client";
import { PokemonsList } from "./usePokemonList";



export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}


const apiClient = new APIClient<Pokemon>("pokemon")

const usePokemon = (PokemonsList: PokemonsList[]) => {
  PokemonsList = PokemonsList || [];
   return useQueries(
     PokemonsList.map((pokemon) => {
      return {
        queryKey: ["pokemons", pokemon.name],
        queryFn: () => apiClient.get(pokemon.url),
      };
    }),
  );
};

export default usePokemon