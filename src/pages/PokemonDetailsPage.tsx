import { CircularProgress, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../Utilities/stringUtils";
import AbilitiesDisplay from "../components/AbilitiesDisplay";
import PokemonDisplay from "../components/PokemonDisplay";
import StatsDisplay from "../components/StatsDisplay";
import useAbility from "../hooks/useAbility";
import AbilityData from "../entities/AbilityData";
import usePokemonDetails from "../hooks/usePokemonDetails";

const PokemonDetailsPage = () => {
  const { name } = useParams();
  const { data: pokemon, isLoading: isPokemonLoading } = usePokemonDetails(
    name!
  );
  const { abilitiesData, isLoading: isAbilitysLoading } = useAbility(
    pokemon?.abilities!
  );

  if (isPokemonLoading) return <CircularProgress />;

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
        <PokemonDisplay pokemon={pokemon!} />
      </Grid>
    </Grid>
  );
};

export default PokemonDetailsPage;
