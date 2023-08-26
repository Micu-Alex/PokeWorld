import { Grid } from "@mui/material";
import usePokemons from "../hooks/usePokemons";
import PokemonCard from "./PokemonCard";

const PokemonGrid = () => {
  const { data, error } = usePokemons();

  if (error) return null;
  console.log(data);

  return (
    <Grid container spacing={3}>
      <Grid item>
        {data?.map((pokemon) => (
          <PokemonCard pokemon={pokemon}></PokemonCard>
        ))}
      </Grid>
    </Grid>
  );
};

export default PokemonGrid;
