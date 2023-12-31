import axios from "axios";

interface FetchResponse<T> {
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


      getAll = (url: string = this.endpoint) => {
       return axiosInstance
            .get<FetchResponse<T>>(url)
            .then((res) => res.data);
    }

    get = (url: string ) => {
        return axiosInstance
          .get<T>(url)
          .then((res) => res.data);
      }


}

export default APIClient