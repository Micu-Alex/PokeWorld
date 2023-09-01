import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

import CatchingPokemonSharpIcon from "@mui/icons-material/CatchingPokemonSharp";
import { Link } from "react-router-dom";

const NavBar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to={"/"} style={linkStyle}>
          <IconButton edge="start" color="inherit">
            <CatchingPokemonSharpIcon />
          </IconButton>
        </Link>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Pokémon World
        </Typography>
        {/* Add more navigation buttons or links as needed */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
