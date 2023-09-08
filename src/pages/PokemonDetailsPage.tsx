import { useParams } from "react-router-dom";
import usePokemonDetails from "../hooks/usePokemonDetails";
import { Box, CircularProgress, Grid, Paper, Typography } from "@mui/material";
import useAbility from "../hooks/useAbility";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../services/stringUtils";

const PokemonDetailsPage = () => {
  const { name } = useParams();
  const { data: pokemon, isLoading } = usePokemonDetails(name!);
  const ability = useAbility(pokemon?.abilities!);

  const [filteredStats, setFilteredStats] = useState<any[]>([]);

  useEffect(() => {
    if (pokemon) {
      const statsToDisplay = ["hp", "attack", "defense"];
      const filteredStats = pokemon!.stats.filter((stat) =>
        statsToDisplay.includes(stat.stat.name)
      );
      setFilteredStats(filteredStats);
    }
  }, [pokemon]);

  if (isLoading) return <CircularProgress />;
  // console.log(pokemon?.abilities);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3}>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 350 },
              maxWidth: { xs: 350, md: 500 },
              display: "block",
              margin: "auto",
            }}
            alt={pokemon?.name}
            src={pokemon?.sprites.other.dream_world.front_default}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          {capitalizeFirstLetter(pokemon?.name!)}
        </Typography>

        {filteredStats.map(({ stat, base_stat }) => (
          <Typography key={stat.name} variant="body2" color="text.secondary">
            {capitalizeFirstLetter(stat.name)}: {base_stat}
          </Typography>
        ))}
        <Typography variant="h6" gutterBottom>
          Abilities:
        </Typography>
        <ul>
          {pokemon?.abilities.map(({ ability }) => (
            <Typography key={ability.name} variant="body1">
              {capitalizeFirstLetter(ability.name)}
            </Typography>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default PokemonDetailsPage;
