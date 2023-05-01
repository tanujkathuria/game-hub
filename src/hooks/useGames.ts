import useData from './useData';
import { Genre } from './UseGenres';

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
  
const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null, sortOrder: string | null, searchText: string | null) => useData<Game>('/games', 
                {params: 
                    { genres: selectedGenre?.id
                      ,platforms: selectedPlatform?.id
                      , ordering: sortOrder
                      , search: searchText}}
                      , [selectedGenre?.id, selectedPlatform?.id, sortOrder, searchText]);

export default useGames;