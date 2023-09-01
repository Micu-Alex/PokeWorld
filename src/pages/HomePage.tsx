import { CssBaseline, Grid } from "@mui/material";
import PokemonGrid from "../components/PokemonGrid";

const HomePage = () => {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PokemonGrid />
        </Grid>
        {/* Add more Grid items for different sections */}
      </Grid>
    </>
  );
};

export default HomePage;
