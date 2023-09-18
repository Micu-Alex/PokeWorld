import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <InputBase
      placeholder="Search..."
      fullWidth
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
