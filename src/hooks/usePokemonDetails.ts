// usePokemonDetails.js
import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import { Pokemon } from "./usePokemon";


const usePokemonDetails = (name: string) => {
  const apiClient = new APIClient<Pokemon>("");

  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => apiClient.get(`/pokemon/${name}`)
  })
};

export default usePokemonDetails;