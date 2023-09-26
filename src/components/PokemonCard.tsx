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
import { animated, useSpring } from "@react-spring/web";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  // Animation for the card
  const calc = (x: number, y: number) => [
    -(y - 160 / 2) / 50,
    (x - 131 / 2) / 50,
    1.1,
  ];

  const trans = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 3, tension: 250, friction: 30 },
  }));

  const handleOnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - cardRect.left; // X position within the card
    const y = e.clientY - cardRect.top; // Y position within the card
    set.start({ xys: calc(x, y) });
  };

  const handleOnMouseLeave = () => {
    set.start({ xys: [0, 0, 1] });
  };

  //custom style for links
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  //get color based on type
  const type = pokemon.types[0].type.name;
  const backgroundColor = getTypeColor(type);

  return (
    <animated.div
      onMouseMove={handleOnMouseMove}
      onMouseLeave={handleOnMouseLeave}
      style={{
        transform: props.xys.to(trans),
      }}
    >
      <Card
        sx={{
          borderRadius: 7,
          maxWidth: 300,
          backgroundColor: backgroundColor,
          boxShadow: `0px 4px 6px ${backgroundColor}`,
          transition: "transform 0.2s ease-in-out",
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
    </animated.div>
  );
};

export default PokemonCard;
