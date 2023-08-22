import { Grid, ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./components/NavBar";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff", // Customize with your desired color
    },
    secondary: {
      main: "#ce93d8",
      light: "#f3e5f5",
      dark: "#ab47bc",
      contrastText: "#fff", // Customize with your desired color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
