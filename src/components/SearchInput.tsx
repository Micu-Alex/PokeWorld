import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#211001" }} />
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderWidth: "2px",
          borderRadius: 5,
          borderColor: "#211001",
        },
        "& .MuiInputLabel-root": {
          fontWeight: "bold",
          borderWidth: "2px",
          borderRadius: 5,
          borderColor: "#211001",
        },
      }}
    />
  );
};

export default SearchInput;
