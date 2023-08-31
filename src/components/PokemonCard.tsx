import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { Pokemon } from "../hooks/usePokemon";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Box
        style={{
          width: "200px", // Set your desired width
          height: "200px", // Set your desired height
          overflow: "hidden", // Hide any content that overflows this wrapper
          margin: "0 auto", // Center the wrapper horizontally
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "100%", // Set your desired width
            height: "auto", // Set your desired height
            display: "block",
          }}
          image={pokemon?.sprites?.other?.dream_world?.front_default || "  "}
          alt={pokemon.name}
        />
      </Box>
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
