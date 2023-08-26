import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Pokemon } from "../hooks/usePokemons";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
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
