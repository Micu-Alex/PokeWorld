
import APIClient  from "../services/api-client";

import Pokemon from "../entities/Pokemon";
import { useQueries } from "@tanstack/react-query";


const apiClient = new APIClient<Pokemon>("pokemon")


const usePokemon = (PokemonsList:  any[]) => {
  PokemonsList = PokemonsList || [];

  
  const queries = PokemonsList.flatMap((pokemons) => {
    return ({
      queryKey: ["pokemons", pokemons.name],
      queryFn: () => apiClient.get(pokemons.url),
    })
  });

  return useQueries({ queries }); 
};

export default usePokemon