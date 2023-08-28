import { CircularProgress, Grid } from "@mui/material";
import usePokemonsList from "../hooks/usePokemonList";
import PokemonCard from "./PokemonCard";
import usePokemon from "../hooks/usePokemon";

const PokemonGrid = () => {
  const { data: pokemonList, error } = usePokemonsList();
  const pokemons = usePokemon(pokemonList!);

  const isLoading = pokemons.some((pokemon) => pokemon.isLoading);

  if (error) return null;

  if (isLoading) return <CircularProgress />;

  return (
    <Grid container spacing={3}>
      <Grid item>
        {pokemons?.map((pokemon) => (
          <PokemonCard
            key={pokemon.data?.id}
            pokemon={pokemon.data!}
          ></PokemonCard>
        ))}
      </Grid>
    </Grid>
  );
};

export default PokemonGrid;
