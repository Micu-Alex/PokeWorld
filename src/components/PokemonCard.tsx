import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";

import { Link } from "react-router-dom";
import Pokemon from "../entities/Pokemon";
import { capitalizeFirstLetter } from "../services/stringUtils";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  const typeColors: { [key: string]: string } = {
    normal: " #C2C2A1",
    flying: " #BAB0D5",
    ghost: " #735797",
    dark: " #333",
    steel: " #CCCCDE,",
    poison: " #7C538C",
    ground: " #B1736C",
    grass: " #48D0B0",
    fire: " #FB6C6C",
    electric: "#FFD86F;",
    fairy: "#f469a9;",
    bug: "#C3CE75;",
    fighting: " #d6b591",
    water: "#609FB5",
    psychic: "#9B7FA6",
    ice: "#7FCCEC",
    rock: " #a6aab6",
    dragon: "#F9BE00",
  };

  const backgroundColor = typeColors[pokemon.types[0].type.name];

  return (
    <Card
      sx={{
        borderRadius: 7,
        maxWidth: 300,
        backgroundColor: backgroundColor,
        boxShadow: `0px 4px 6px ${backgroundColor}`,
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
        height: 320,
      }}
    >
      <CardActionArea>
        <Link to={"/pokemon/" + pokemon.name} style={linkStyle}>
          <Box
            style={{
              width: "200px",
              height: "200px",
              overflow: "hidden",
              margin: "0 auto",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              image={pokemon?.sprites?.other?.dream_world?.front_default}
              alt={pokemon.name}
            />
          </Box>
          <CardContent sx={{ height: 120 }}>
            <Typography gutterBottom variant="h5" component="div">
              {capitalizeFirstLetter(pokemon.name)}
            </Typography>
            {pokemon.types.map(({ type }) => (
              <Typography
                key={type.name}
                variant="body2"
                color="text.secondary"
              >
                {capitalizeFirstLetter(type.name)}
              </Typography>
            ))}
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
