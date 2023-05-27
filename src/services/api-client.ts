import axios, { AxiosRequestConfig } from 'axios';

export interface fetchResponse<T>{
    count: number;
    results: T[];
    next: string | null;
}

const axiosInstance =  axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'dee926416b8a40f98b691ac612cd8368'
    }
})

class APIClient <T>{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<fetchResponse<T>>(this.endpoint, config)
                 .then(res => res.data);
    }
}

export default APIClient;