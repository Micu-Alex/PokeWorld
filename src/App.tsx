import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import APIClient, { FetchResponse } from "./services/api-client";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#fe7d0b", // primary color
    },
    secondary: {
      main: "#fffcb3", // secondary color
    },
    background: {
      default: "#fff0f0", // background color
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif", // primary font
  },
});

function App() {
  const [pokemonData, setPokemonData] = useState<any>(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          {/* Display the fetched data */}
          {pokemonData && (
            <div>
              <h2>{pokemonData.name}</h2>
              <img src={} alt={pokemonData.name} />
              <p>Height: {pokemonData.height}</p>
              <p>Weight: {pokemonData.weight}</p>
              {/* Add more information as needed */}
            </div>
          )}
        </Grid>
        {/* Add more Grid items for different sections */}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
