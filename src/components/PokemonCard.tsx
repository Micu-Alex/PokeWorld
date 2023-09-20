import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActionArea,
  Paper,
} from "@mui/material";

import { Link } from "react-router-dom";
import Pokemon from "../entities/Pokemon";
import { capitalizeFirstLetter } from "../Utilities/stringUtils";
import { getTypeColor } from "../Utilities/typeColors";
import { useState } from "react";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  const type = pokemon.types[0].type.name;
  const backgroundColor = getTypeColor(type);

  // State to track mouse position
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Function to update rotation based on mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = 131;
    const halfHeight = 160;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const rotationY = ((x - halfWidth) / halfWidth) * 20;
    const rotationX = ((y - halfHeight) / halfHeight) * 20;

    setRotation({ x: rotationX, y: rotationY });
  };

  return (
    <Card
      onMouseMove={(e) => handleMouseMove(e)}
      sx={{
        borderRadius: 7,
        maxWidth: 300,
        backgroundColor: backgroundColor,
        boxShadow: `0px 4px 6px ${backgroundColor}`,
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: `scale(1.05) rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`, // Apply the 3D rotation on hover
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
            <Paper
              style={{
                opacity: 0.8,
                borderRadius: "16px",
                padding: "8px",
              }}
            >
              {pokemon.types.map(({ type }) => (
                <Typography
                  key={type.name}
                  variant="body2"
                  color="text.secondary.dark"
                >
                  {capitalizeFirstLetter(type.name)}
                </Typography>
              ))}
            </Paper>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
