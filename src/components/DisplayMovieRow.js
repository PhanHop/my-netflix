import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from "swiper";
import './maincontent.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function DisplayMovieRow({ movies, title, selectMovieHandle }) {
  return (
    <div style={{paddingTop: '20px'}}>
      {title && <p className='movie-title'>{title}</p>}
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        speed={500}
        breakpoints={{
          1378: {
            slidesPerView: 5,
            slidesPerGroup: 5
          },
          976:{
            slidesPerView: 4,
            slidesPerGroup: 4

          },
          625:{
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          0:{
            slidesPerView: 2,
            slidesPerGroup: 2

          }
        }}
        style={{paddingTop: '60px'}}
      >
        {movies && movies.map((movie, idx) => {
          let urlImg = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
          return (
            <SwiperSlide key={idx}>
              <img src={urlImg} className="swiper-img" onClick={()=>selectMovieHandle(movie)}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default DisplayMovieRow