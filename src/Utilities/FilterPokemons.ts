import { UseQueryResult } from "@tanstack/react-query";
import Pokemon from "../entities/Pokemon";

interface Props {
 pokemons:   UseQueryResult<Pokemon, unknown>[]
 selectedType: string
}

export function filterPokemonsByType({pokemons, selectedType}: Props) {
    return selectedType === "All"
      ? pokemons
      : pokemons.filter((poke) => {
          if (!selectedType) {
            return true;
          }
          return poke.data?.types.some(
            (type) => type.type.name === selectedType
          );
        });
  }