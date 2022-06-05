import React from 'react'
import {FETCH_SEARCH_MOVIE, FETCH_SEARCH_MOVIE_FAIL, FETCH_SEARCH_MOVIE_SUCCESS} from '../action'
const initialState = {
    isLoading: false,
    searchMovie: []
}
export default function(state=initialState, action){
    switch (action.type) {
        case FETCH_SEARCH_MOVIE:
            return {...state, isLoading: true};
        case FETCH_SEARCH_MOVIE_FAIL:
            return {...state, isLoading: false};
        case FETCH_SEARCH_MOVIE_SUCCESS:
            const searchMovie = action.payload.data.results;
            return {...state, searchMovie, isLoading: true}
        default:
            return state;
    }
}