import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import APIClient, { fetchResponse } from '../services/api-client';
import { GameQuery } from '../App';

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }

  const apiClient = new APIClient<Game>('/games');
  
  const useGames = (gameQuery: GameQuery) => useInfiniteQuery<fetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) => apiClient.getAll({params: 
      { genres: gameQuery.genre?.id
        ,parent_platforms: gameQuery.platform?.id
        , ordering: gameQuery.sortOrder
        , search: gameQuery.searchText
        , page: pageParam
        }}),
    getNextPageParam: (lastPage, allPages) => {return (lastPage.next) ? allPages.length+1 : undefined},    
    staleTime: 24*60*60*1000, //this is 24 hrs 
})

export default useGames;