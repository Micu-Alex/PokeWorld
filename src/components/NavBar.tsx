import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";

import CatchingPokemonSharpIcon from "@mui/icons-material/CatchingPokemonSharp";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <CatchingPokemonSharpIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Pokémon World
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Pokémon</Button>
        {/* Add more navigation buttons or links as needed */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
