import { useParams } from "react-router-dom";
import usePokemonDetails from "../hooks/usePokemonDetails";
import { Box, Typography } from "@mui/material";

const PokemonDetailsPage = () => {
  const { name } = useParams();
  const { data: pokemon } = usePokemonDetails(name!);

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
      <Typography>HELLO FROM DETAILS</Typography>
    </>
  );
};

export default PokemonDetailsPage;
