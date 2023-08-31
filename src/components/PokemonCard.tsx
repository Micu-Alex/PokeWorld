import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Pokemon } from "../hooks/usePokemon";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        sx={{
          width: "200px", // Set your desired width
          height: "200px", // Set your desired height
          objectFit: "cover", // This property ensures the image maintains aspect ratio while fitting the container
        }}
        image={pokemon?.sprites?.other?.dream_world?.front_default || "  "}
        alt={pokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Height: {pokemon.height}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Weight: {pokemon.weight}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
