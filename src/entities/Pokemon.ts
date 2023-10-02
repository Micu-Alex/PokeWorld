export default interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: Stat[];
  types: PokemonType[];
  abilities: Ability[];
}

interface Stat {
  baseStat: number;
  stat: {
    name: string;
  };
}

interface PokemonType {
  type: {
    name: string;
  };
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
}