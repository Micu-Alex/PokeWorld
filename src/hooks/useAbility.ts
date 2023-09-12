import { useQueries } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface AbilityData {
    name: string;
   effect_entries: Array<{
    language: {
        name: string; 
    };
    short_effect: string
   }>
}

interface AbilityList {
    ability: {
        name: string
        url:string
    }
}

const apiClient= new APIClient<AbilityData>("ability")

const useAbility = (AbilityList: AbilityList[]) => {
    AbilityList = AbilityList || []
    const queries = AbilityList.map(ability => {
        return {
            queryKey: ["ability", ability.ability.name],
            queryFn: () => apiClient.get(ability.ability.url)
        }
    })
  
  const results = useQueries({queries});
  
  const isLoading = results.map((result) => result.isLoading);
  const abilitiesData = results.map((result) => result.data);

    return { abilitiesData, isLoading };
}
export default useAbility
