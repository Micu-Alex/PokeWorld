import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import usePokemonsList from "./hooks/usePokemonList";
import PokemonGrid from "./components/PokemonGrid";

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
  const { data } = usePokemonsList();

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
