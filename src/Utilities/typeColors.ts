const typeColors: { [key: string]: string } = {
    normal: " #C2C2A1",
    flying: " #BAB0D5",
    ghost: " #735797",
    dark: " #333",
    steel: " #CCCCDE",
    poison: " #7C538C",
    ground: " #B1736C",
    grass: " #48D0B0",
    fire: " #FB6C6C",
    electric: "#FFD86F",
    fairy: "#f469a9",
    bug: "#C3CE75",
    fighting: " #d6b591",
    water: "#609FB5",
    psychic: "#9B7FA6",
    ice: "#7FCCEC",
    rock: " #a6aab6",
    dragon: "#F9BE00",
  };

  

  export const getTypeColor = (type: string) => {
    return  typeColors[type];
} 