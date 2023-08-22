import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
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
