import { useQuery } from '@tanstack/react-query';
import APIClient, { fetchResponse } from '../services/api-client';
// import useData from './useData';

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}


// const useGenres = () => useData<Genre>('/genres');
const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24*60*60*1000, //this is 24 hrs 
    
})

export default useGenres;