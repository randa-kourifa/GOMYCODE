import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import MovieCard from "../MovieCard"

// import required modules

export default function MovieList({ Movies, handleToggle }) {
	return (
		<>
			<h1>Movies</h1>
			<Swiper slidesPerView={3} className="mySwiper">
				{Movies.map((movie) =>
					!movie.watched ? (
						<SwiperSlide key={movie.id}>
							<MovieCard handleToggle={handleToggle} {...movie} />
						</SwiperSlide>
					) : null,
				)}
			</Swiper>
		</>
	)
}
