import { useQueries } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface AbilityData {
    name: string;
   effect_entries: Array<{
    short_effect: string
   }>
}

const apiClient= new APIClient<AbilityData>("ability")

const useAbility = (AbilityList: any[]) => {
    AbilityList = AbilityList || []
    const queries = AbilityList.map(ability => {
        return {
            queryKey: ["ability", ability.name],
            queryFn: () => apiClient.get(ability.url)
        }
    })
    return useQueries({queries})
}
export default useAbility
