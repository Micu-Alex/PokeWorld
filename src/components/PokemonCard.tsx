import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { Pokemon } from "../hooks/usePokemon";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const statsToDisplay = ["hp", "attack", "defense"];
  const filteredStats = pokemon.stats.filter((stat) =>
    statsToDisplay.includes(stat.stat.name)
  );

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
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Typography>

        {filteredStats.map(({ stat, base_stat }) => (
          <Typography key={stat.name} variant="body2" color="text.secondary">
            {[stat.name.charAt(0).toUpperCase() + stat.name.slice(1)]}:{" "}
            {base_stat}
          </Typography>
        ))}
        {pokemon.types.map(({ type }) => (
          <Typography key={type.name} variant="body2" color="text.secondary">
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
