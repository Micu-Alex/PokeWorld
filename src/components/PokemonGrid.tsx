import { CircularProgress, Grid } from "@mui/material";
import usePokemonsList from "../hooks/usePokemonList";
import PokemonCard from "./PokemonCard";
import usePokemon from "../hooks/usePokemon";
import { useState, useContext } from "react";
import TypeSelector from "./TypeSelector";
import SearchContext from "../contexts/SearchContext";

const PokemonGrid = () => {
  const { data: pokemonList, error } = usePokemonsList();
  const pokemons = usePokemon(pokemonList!);
  const [selectedType, setSelectedType] = useState<string>("");

  const { searchText } = useContext(SearchContext);

  const isLoading = pokemons.some((pokemon) => pokemon.isLoading);

  if (error) return null;

  if (isLoading) return <CircularProgress />;

  //fliter pokemons by typeSelector
  const filteredPokemons =
    selectedType === "All"
      ? pokemons
      : pokemons.filter((poke) => {
          if (!selectedType) {
            return true;
          }
          return poke.data?.types.some(
            (type) => type.type.name === selectedType
          );
        });

  //search pokemon
  const searchPokemon = searchText
    ? filteredPokemons.filter((poke) =>
        poke.data?.name.includes(searchText.toLowerCase())
      )
    : filteredPokemons;

  return (
    <Grid container justifyContent="end">
      <Grid item xs={12} sm={6} md={4} lg={2} marginRight={3}>
        <TypeSelector setType={setSelectedType} type={selectedType} />
      </Grid>
      <Grid container spacing={5} padding={3}>
        {searchPokemon?.map((pokemon) => (
          <Grid key={pokemon.data?.id} item xs={12} sm={6} md={4} lg={2}>
            <PokemonCard pokemon={pokemon.data!}></PokemonCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default PokemonGrid;
