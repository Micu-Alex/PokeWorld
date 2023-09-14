import APIClient from "../services/api-client";
import Pokemon from "../entities/Pokemon";
import { useQuery } from "@tanstack/react-query";


const usePokemonDetails = (name: string) => {
  const apiClient = new APIClient<Pokemon>("");

  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => apiClient.get(`/pokemon/${name}`)
  })
};


export default usePokemonDetails;