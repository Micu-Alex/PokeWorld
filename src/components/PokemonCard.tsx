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

  return (
    <Card
      sx={{
        maxWidth: 300,
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
        height: 380,
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
                height: "auto",
                display: "block",
              }}
              image={pokemon?.sprites?.other?.dream_world?.front_default}
              alt={pokemon.name}
            />
          </Box>
          <CardContent>
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
