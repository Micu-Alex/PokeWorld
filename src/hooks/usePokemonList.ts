
import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";


export interface Pokemons {
  name: string;
  url: string;
}

export interface PokemonsList {

  results: Pokemons[];
  next: string | null;
}

const apiClient= new APIClient<PokemonsList>("/pokemon")

  const usePokemonsList = () => 
  useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({pageParam}) => {return apiClient.getAll(pageParam); 
    },
    getNextPageParam: (lastPage) => {return lastPage.next
    } 
    },
  )

  export default usePokemonsList