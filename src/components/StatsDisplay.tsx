import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../Utilities/stringUtils";
import Pokemon from "../entities/Pokemon";

interface Props {
  pokemon: Pokemon;
}

const StatsDisplay = ({ pokemon }: Props) => {
  const [filteredStats, setFilteredStats] = useState<any[]>([]);

  useEffect(() => {
    if (pokemon) {
      const statsToDisplay = ["hp", "attack", "defense"];
      const filteredStats = pokemon!.stats.filter((stat) =>
        statsToDisplay.includes(stat.stat.name)
      );
      setFilteredStats(filteredStats);
    }
  }, [pokemon]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Stats:
      </Typography>
      {filteredStats.map(({ stat, base_stat }) => (
        <Typography key={stat.name} variant="body2" color="text.secondary">
          {capitalizeFirstLetter(stat.name)}: {base_stat}
        </Typography>
      ))}
    </>
  );
};

export default StatsDisplay;
