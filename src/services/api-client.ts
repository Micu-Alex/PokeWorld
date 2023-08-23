import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2"})

class APIClient<T> {
    endpoint:  string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    get =  (id: number | string)  => {
        return  axiosInstance
            .get<T>(this.endpoint + "/" + id)
            .then(res=> res.data)
    }
}

export default APIClient