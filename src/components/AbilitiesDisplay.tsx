import {
  Typography,
  List,
  Collapse,
  ListItem,
  ListItemText,
  IconButton,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { capitalizeFirstLetter } from "../Utilities/stringUtils";
import { AbilityData } from "../hooks/useAbility";
import { Fragment, useState } from "react";
import { getEnglishEffect } from "../Utilities/getEnVersion";

interface Props {
  abilityData: AbilityData[];
}

const AbilitiesDisplay = ({ abilityData }: Props) => {
  const [openAbility, setOpenAbility] = useState<string | null>(null);

  const handleAbilityClick = (abilityName: string) => {
    if (openAbility === abilityName) {
      setOpenAbility(null);
    } else {
      setOpenAbility(abilityName);
    }
  };

  return (
    <>
      <Typography variant="h6" marginTop={3}>
        Abilities:
      </Typography>
      <List>
        {abilityData.map((ability) => (
          <Fragment key={ability.name}>
            <ListItem
              onClick={() => handleAbilityClick(ability.name)}
              sx={{
                borderRadius: 7,
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.01)",
                  background: "rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <ListItemText primary={capitalizeFirstLetter(ability.name)} />
              <IconButton edge="end" aria-label="expand">
                <ExpandMoreIcon
                  style={{
                    transform:
                      openAbility === ability.name ? "rotate(180deg)" : "none",
                  }}
                />
              </IconButton>
            </ListItem>
            <Collapse in={openAbility === ability.name}>
              <ListItem>
                <ListItemText primary={getEnglishEffect(ability)} />
              </ListItem>
            </Collapse>
          </Fragment>
        ))}
      </List>
    </>
  );
};

export default AbilitiesDisplay;