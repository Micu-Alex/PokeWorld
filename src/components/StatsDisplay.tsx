import { LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../Utilities/stringUtils";
import Pokemon from "../entities/Pokemon";

interface Props {
  pokemon: Pokemon;
}

interface Stats {
  base_stat: number;
  stat: {
    name: string;
  };
}

const StatsDisplay = ({ pokemon }: Props) => {
  const [filteredStats, setFilteredStats] = useState<Stats[]>([]);

  useEffect(() => {
    if (pokemon) {
      const statsToDisplay = ["hp", "attack", "defense", "speed"];
      const filteredStats = pokemon!.stats.filter((stat) =>
        statsToDisplay.includes(stat.stat.name)
      );
      setFilteredStats(filteredStats);
    }
  }, [pokemon]);

  const statColors = {
    hp: "success",
    attack: "error",
    defense: "info",
    speed: "primary",
  };

  // Function to normalise the values (MIN / MAX could be integrated)
  const MIN = 0;
  const MAX = 255;
  const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Stats:
      </Typography>
      {filteredStats.map(({ stat, base_stat }) => (
        <Typography key={stat.name} variant="body2" color="text.secondary">
          {capitalizeFirstLetter(stat.name)}: {base_stat}
          <LinearProgress
            sx={{ height: 10, borderRadius: 5 }}
            variant="determinate"
            value={normalise(base_stat)}
            color={statColors[stat.name as keyof typeof statColors] as any}
          />
        </Typography>
      ))}
    </>
  );
};

export default StatsDisplay;
