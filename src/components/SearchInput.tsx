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
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderWidth: "2px",
          borderColor: "black",
          borderRadius: 5,
        },
        "& .MuiInputLabel-root": {
          fontWeight: "bold",
          borderWidth: "2px",
          borderColor: "black",
          borderRadius: 5,
        },
      }}
    />
  );
};

export default SearchInput;
