import { useParams } from "react-router-dom";
import usePokemonDetails from "../hooks/usePokemonDetails";
import { Box, CircularProgress, Typography } from "@mui/material";
import useAbility from "../hooks/useAbility";

const PokemonDetailsPage = () => {
  const { name } = useParams();
  const { data: pokemon, isLoading } = usePokemonDetails(name!);
  if (pokemon) {
    const ability = useAbility(pokemon.abilities);
    console.log(ability);
  }

  if (isLoading) return <CircularProgress />;
  // console.log(pokemon?.abilities);

  `need to add: 
    -abilities
    -height
    -weight
    -forms`;
  return (
    <>
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={pokemon?.sprites.other.dream_world.front_default}
      />
      <Typography>{pokemon?.name}</Typography>

      {pokemon?.abilities.map(({ ability }) => (
        <Typography key={ability.name}>{ability.name}</Typography>
      ))}
    </>
  );
};

export default PokemonDetailsPage;
