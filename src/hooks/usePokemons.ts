import APIClient from "../services/api-client";


interface Pokemon {
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
  }


const apiClient= new APIClient<Pokemon>("/pokemon")

const useGames = () => {

}