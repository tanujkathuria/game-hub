// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import {AxiosRequestConfig} from 'axios';


// export interface fetchResponse<T>{
//     count: number;
//     results: T[];
// }

// const useData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
//     const [data, setData] = useState<T[]>([]);
//     const [error, setError] = useState([]);
//     const [isLoading, setLoading] = useState(false);
  
//     useEffect(() => {
//       setLoading(true);
//       apiClient
//         .get<fetchResponse<T>>(endPoint, {...requestConfig})
//         .then((res) => {setData(res.data.results); setLoading(false);})
//         .catch((err) => {setError(err.message); setLoading(false);});
//     },deps ? [...deps] : []);

//     return {data, error, isLoading};
// }

// export default useData;