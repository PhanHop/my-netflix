import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import * as movieAction from '../store/action'
import Modal from '../components/Modal';
import ModalDetail from '../components/ModalDetail';
import '../components/maincontent.css'
function Search() {
    const dispatch = useDispatch();
    const [searchItem] = useSearchParams();
    const searchItemKey = searchItem.get('k');
    const { searchMovie, isLoading } = useSelector((state) => state.movieSearch);
    useEffect(() => {
        if (searchItemKey) {
            dispatch(movieAction.fetchSearchMovie(searchItemKey));
        }
    }, [searchItemKey]);
    // console.log(searchMovie)
    const [movieDetails, setMovieDetails] = useState([]);
    const [toggleModal, setToggleModal] = useState(false);
    const selectMovieHandle = async (movie) => {
        setMovieDetails(movie);
        setToggleModal(true);
    }
    const closeModal = () => {
        setToggleModal(false);
    }
    const backgroundUrl = movieDetails.backdrop_path;
  const backGroundImage = `https://image.tmdb.org/t/p/original${backgroundUrl}`
    return (
        <div>
            <div className='search-movies'>
                {
                    searchMovie && searchMovie.map((movie, keyId) => {
                        let movieBackdrop = movie.backdrop_path;
                        let background = movieBackdrop ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : '';
                        return (
                            background &&
                            <div key={keyId} className="search-item" onClick={()=>{selectMovieHandle(movie)}}>
                                <img src={background} alt="" style={{ width: '100%', borderRadius: '6px' }} />
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <Modal
                    toggleModal={toggleModal}
                    closeModal={closeModal}
                >
                    <ModalDetail movie={movieDetails} backGroundImage={backGroundImage} />
                </Modal>
            </div>
        </div>
    )
}

export default Search