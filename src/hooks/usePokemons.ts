import { useQuery } from "react-query";
import APIClient from "../services/api-client";


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


const apiClient= new APIClient<Pokemon>("/pokemon")

const usePokemons = () => 
  useQuery({
    queryKey: ["pokemons"],
    queryFn: apiClient.getAll
  })


export default usePokemons