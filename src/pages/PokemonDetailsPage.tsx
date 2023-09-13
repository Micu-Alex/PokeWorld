import { useParams } from "react-router-dom";
import usePokemonDetails from "../hooks/usePokemonDetails";
import { Box, CircularProgress, Grid, Paper, Typography } from "@mui/material";
import useAbility, { AbilityData } from "../hooks/useAbility";
import { capitalizeFirstLetter } from "../Utilities/stringUtils";
import StatsDisplay from "../components/StatsDisplay";
import AbilitiesDisplay from "../components/AbilitiesDisplay";
import { getTypeColor } from "../Utilities/typeColors";

const PokemonDetailsPage = () => {
  const { name } = useParams();
  const { data: pokemon, isLoading: isPokemonLoading } = usePokemonDetails(
    name!
  );
  const { abilitiesData, isLoading: isAbilitysLoading } = useAbility(
    pokemon?.abilities!
  );

  if (isPokemonLoading) return <CircularProgress />;
  const type = pokemon!.types[0].type.name;
  const backgroundColor = getTypeColor(type);
  console.log(type);
  console.log(backgroundColor);

  const isAbilityLoading = isAbilitysLoading.some((isLoading) => isLoading);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          {capitalizeFirstLetter(pokemon?.name!)}
        </Typography>

        <StatsDisplay pokemon={pokemon!} />

        {isAbilityLoading ? (
          <CircularProgress />
        ) : (
          <AbilitiesDisplay abilityData={abilitiesData as AbilityData[]} />
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper
          elevation={3}
          sx={{
            borderRadius: 16,
            background: `linear-gradient(45deg, ${backgroundColor}, black)`,
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
      </Grid>
    </Grid>
  );
};

export default PokemonDetailsPage;
