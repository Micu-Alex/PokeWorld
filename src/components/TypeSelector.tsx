import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { pokemonTypes } from "../data/types";
import { capitalizeFirstLetter } from "../Utilities/stringUtils";

interface Props {
  setType: (type: string) => void;
  type: string;
}

const TypeSelector = ({ setType, type }: Props) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Type</InputLabel>
      <Select
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value as string)}
        sx={{ borderRadius: 5 }}
      >
        {pokemonTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {capitalizeFirstLetter(type)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TypeSelector;
