import { CssBaseline, Grid, ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./components/NavBar";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#fe7d0b", // Your primary color
    },
    secondary: {
      main: "#fffcb3", // Your secondary color
    },
    background: {
      default: "#fff0f0", // Your background color
    },
    text: {
      primary: "#330002", // Your text color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        {/* Add more Grid items for different sections */}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
