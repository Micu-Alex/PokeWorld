
import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";


interface ListedPokemons {
  name: string;
  url: string;
}

interface PokemonsList {
  results: ListedPokemons[];
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