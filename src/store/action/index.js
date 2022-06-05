import axios from "../../axios-movies"
import { API_Key } from "../../axios-movies"
export const FETCH_TRENDING = 'FETCH_TRENDING'
export const FETCH_NETFLIX_ORIGINALS = 'FETCH_NETFLIX_ORIGINALS'
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED'
export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES'
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES'
export const FETCH_HORROR_MOVIES = 'FETCH_HORROR_MOVIES'
export const FETCH_ROMANCE_MOVIES = 'FETCH_ROMANCE_MOVIES'
export const FETCH_DOCUMENTARIES = 'FETCH_DOCUMENTARIES'
// movie details
export const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS'
export const FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS'
export const FETCH_MOVIE_DETAILS_FAIL = 'FETCH_MOVIE_DETAILS_FAIL'
// search
export const FETCH_SEARCH_MOVIE = 'FETCH_SEARCH_MOVIE'
export const FETCH_SEARCH_MOVIE_FAIL = 'FETCH_SEARCH_MOVIE_FAIL'
export const FETCH_SEARCH_MOVIE_SUCCESS = 'FETCH_SEARCH_MOVIE_SUCCESS'

const media_type = {
  tv: 'tv',
  movie: 'movie',
}
export const fetchMovieDetails = (mediaType, mediaId)=>{

    return async(dispatch)=>{
        try{
            dispatch({type: FETCH_MOVIE_DETAILS});
            let urlPath ;
            if(mediaType === media_type.tv){
                urlPath = `/tv/${mediaId}?api_key=${API_Key}`;
            }
            if(mediaType === media_type.movie){
                urlPath = `/movie/${mediaId}?api_key=${API_Key}`;
            }
            const request = await axios.get(urlPath);
            dispatch({type:FETCH_MOVIE_DETAILS_SUCCESS, payload:request})
        }
        catch(error){
            console.log('error:', error);
            dispatch({type: FETCH_MOVIE_DETAILS_FAIL});
        }
    }
}
export const fetchMovieOriginals=()=>{
    return async(dispatch)=>{
        try {
            let urlPath = `/discover/tv?api_key=${API_Key}&with_networks=213`
            const request = await axios.get(urlPath);
            dispatch({type: FETCH_NETFLIX_ORIGINALS, payload: request})
        } catch (error) {
            console.log('error: ',error);
        }
    }
}
export const fetchSearchMovie=(searchItem)=>{
    return async(dispatch)=>{
        try {
            dispatch({type: FETCH_SEARCH_MOVIE});
            const urlPath = `/search/multi?api_key=${API_Key}&language=en-US&include_adult=false&query=${searchItem}`;
            const request =await axios.get(urlPath);
            dispatch({type: FETCH_SEARCH_MOVIE_SUCCESS, payload: request})
        } catch (error) {
            dispatch({type: FETCH_SEARCH_MOVIE_FAIL});
            console.log('error: ', error);
        }
    }
}