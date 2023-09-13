import { Paper, Box } from "@mui/material";
import Pokemon from "../entities/Pokemon";
import { getTypeColor } from "../Utilities/typeColors";

interface Props {
  pokemon: Pokemon;
}

const PokemonDisplay = ({ pokemon }: Props) => {
  const type = pokemon!.types[0].type.name;
  const backgroundColor = getTypeColor(type);
  let gradientColor = "#000";
  if (pokemon.types.length > 1) {
    const SecundaryType = pokemon!.types[1].type.name;
    gradientColor = getTypeColor(SecundaryType);
  }

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 16,
        background: `linear-gradient(45deg, ${backgroundColor}, ${gradientColor})`,
      }}
    >
      <Box
        component="img"
        sx={{
          height: "60%",
          width: "50%",
          maxHeight: { xs: 233, md: 350 },
          maxWidth: { xs: 350, md: 500 },
          display: "block",
          margin: "auto",
        }}
        alt={pokemon?.name}
        src={pokemon?.sprites.other.dream_world.front_default}
      />
    </Paper>
  );
};

export default PokemonDisplay;
