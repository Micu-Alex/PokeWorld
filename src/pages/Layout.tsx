import NavBar from "../components/NavBar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SearchContext from "../contexts/SearchContext";
import { useState } from "react";

const Layout = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </SearchContext.Provider>
  );
};

export default Layout;
