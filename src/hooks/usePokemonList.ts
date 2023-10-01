
import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";


export interface ListedPokemons {
  name: string;
  url: string;
}

const apiClient= new APIClient<ListedPokemons>("/pokemon")

  const usePokemonsList = () => 
  useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({pageParam}) => {return apiClient.getAll(pageParam); 
    },
    getNextPageParam: (lastPage) => {return lastPage.next
    } ,
    keepPreviousData: true
    },
  )

  export default usePokemonsList