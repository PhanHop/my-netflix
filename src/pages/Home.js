import React, { useState } from 'react'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Modal from '../components/Modal';
import ModalDetail from '../components/ModalDetail';

function Home() {
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
      <MainContent selectMovieHandle={selectMovieHandle} />
      <Modal
        toggleModal={toggleModal}
        closeModal={closeModal}
      >
        <ModalDetail movie={movieDetails} backGroundImage={backGroundImage} />
      </Modal>
    </div>
  )
}

export default Home