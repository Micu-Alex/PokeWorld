import { useQueries } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface AbilityData {
    name: string;
   effect_entries: Array<{
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
    return useQueries({queries})
}
export default useAbility
