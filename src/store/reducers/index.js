import { combineReducers } from 'redux';

import MovieDetailReducer from './reducerMovieDetail';
import MovieOriginals from './reducerMovieOriginals'
import MovieSearchReducer from './reducerSearchMovie'
const rootReducer = combineReducers({
    movieDetails: MovieDetailReducer,
    movieOriginals: MovieOriginals,
    movieSearch: MovieSearchReducer
})
export default rootReducer;