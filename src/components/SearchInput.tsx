import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import SearchContext from "../contexts/SearchContext";

const SearchInput = () => {
  const { setSearchText } = useContext(SearchContext);

  return (
    <InputBase
      placeholder="Search..."
      fullWidth
      onChange={(e) => setSearchText(e.target.value)}
      startAdornment={
        <IconButton>
          <SearchIcon sx={{ color: "#211001" }} />
        </IconButton>
      }
      sx={{
        fontWeight: "bold",
        border: "2px solid #211001",
        borderRadius: 7,
        height: 50,
      }}
    />
  );
};

export default SearchInput;
