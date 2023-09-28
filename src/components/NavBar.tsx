import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import CatchingPokemonSharpIcon from "@mui/icons-material/CatchingPokemonSharp";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to={"/"} style={linkStyle}>
          <Box display={"flex"} alignItems={"center"}>
            <Box display={"flex"} marginRight={0.5}>
              <CatchingPokemonSharpIcon />
            </Box>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
              Pokémon World
            </Typography>
          </Box>
        </Link>
        <Box sx={{ marginLeft: "auto", width: 500 }}>
          <SearchInput />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
