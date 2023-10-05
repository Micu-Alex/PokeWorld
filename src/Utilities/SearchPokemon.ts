import { UseQueryResult } from "@tanstack/react-query";
import Pokemon from "../entities/Pokemon";

interface Props {
  filteredPokemons: UseQueryResult<Pokemon, unknown>[];
  searchText: string;
}

export function SearchPokemon({ filteredPokemons, searchText }: Props) {
    return searchText
    ? filteredPokemons.filter((poke) =>
        poke.data?.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : filteredPokemons;
}