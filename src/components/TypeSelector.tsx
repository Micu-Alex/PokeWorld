import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { pokemonTypes } from "../data/types";
import { capitalizeFirstLetter } from "../Utilities/stringUtils";

interface Props {
  setType: (type: string) => void;
}

const TypeSelector = ({ setType }: Props) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Type</InputLabel>
      <Select
        value={""}
        label="Type"
        onChange={(e) => setType(e.target.value as string)}
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
