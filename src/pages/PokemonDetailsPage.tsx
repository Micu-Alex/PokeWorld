import { useParams } from "react-router-dom";
import usePokemonDetails from "../hooks/usePokemonDetails";
import { Typography } from "@mui/material";

const PokemonDetailsPage = () => {
  const { name } = useParams();
  const { data: pokemon } = usePokemonDetails(name!);

  return (
    <>
      <Typography>{pokemon?.name}</Typography>
      <Typography>HELLO FROM DETAILS</Typography>
    </>
  );
};

export default PokemonDetailsPage;
