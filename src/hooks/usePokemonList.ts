import { useQuery } from "react-query";
import APIClient from "../services/api-client";



 export interface  PokemonsList {
    name: string
    url: string
  }


const apiClient= new APIClient<PokemonsList>("/pokemon")


  const usePokemonsList = () => 
  useQuery({
    queryKey: ["pokemons"],
    queryFn: apiClient.getAll
  })

  export default usePokemonsList