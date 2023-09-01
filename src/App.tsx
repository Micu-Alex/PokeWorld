import { CssBaseline, Grid } from "@mui/material";
import NavBar from "./components/NavBar";
import PokemonGrid from "./components/PokemonGrid";

function App() {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <PokemonGrid />
        </Grid>
        {/* Add more Grid items for different sections */}
      </Grid>
    </>
  );
}

export default App;