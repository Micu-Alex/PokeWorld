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
    stats: Array<{
      base_stat: number;
      stat: {
        name: string;
      };
    }>;
    types: Array<{
      type: {
        name: string
      }
    }>
  }