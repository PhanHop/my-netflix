import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import * as movieAction from '../store/action';
import {useEffect} from 'react';
import Header from './Header';
import DisplayMovieRow from './DisplayMovieRow';

function MainContent({selectMovieHandle}) {
    const { movieDetails } = useSelector((state) => state.movieDetails);
    const movieOriginal = useSelector((state)=>state.movieOriginals);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieAction.fetchMovieDetails('tv', '63351'));
        dispatch(movieAction.fetchMovieOriginals());
    }, [dispatch]);
    return (
        <div className="main-content">
            <Header movies={movieDetails} style={{width: '100%'}}/>
            <DisplayMovieRow movies={movieOriginal.data} title='Netflix Original' style={{marginTop: '30px'}} selectMovieHandle={selectMovieHandle}/>
        </div>
    )
}

export default MainContent