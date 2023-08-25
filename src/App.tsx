import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import usePokemons from "./hooks/usePokemons";

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
  const { data } = usePokemons();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <div>
            <h1>Pokémon List</h1>
            <ul>
              {data?.map((pokemon) => (
                <li key={pokemon.name}>{pokemon.name}</li>
              ))}
            </ul>
          </div>
        </Grid>
        {/* Add more Grid items for different sections */}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
