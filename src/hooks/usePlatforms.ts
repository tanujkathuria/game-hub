import { useQuery } from '@tanstack/react-query';
import APIClient, { fetchResponse } from '../services/api-client';
import { Platform } from './useGames';



// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');


// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24*60*60*1000, //this is 24 hrs 
    
})

export default usePlatforms;