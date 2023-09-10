import { Grid } from "@mui/material";
import PokemonGrid from "../components/PokemonGrid";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PokemonGrid />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
