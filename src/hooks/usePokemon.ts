
import APIClient  from "../services/api-client";
import Pokemon from "../entities/Pokemon";
import { useQueries } from "@tanstack/react-query";
import { ListedPokemons } from "./usePokemonList";


const apiClient = new APIClient<Pokemon>("pokemon")


const usePokemon = (PokemonsList:  ListedPokemons[]) => {
  
  const queries = PokemonsList.map((pokemons) => {
    return ({
      queryKey: ["pokemons", pokemons.name],
      queryFn: () => apiClient.get(pokemons.url),
    })
  });

  return useQueries({ queries }); 
};

export default usePokemon