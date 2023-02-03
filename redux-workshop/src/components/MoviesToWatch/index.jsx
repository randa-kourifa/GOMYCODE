import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import MovieCard from "../MovieCard"

// import required modules

export default function MoviesToWatch({ Movies, handleToggle }) {
	return (
		<>
			<h1>Your list</h1>
			<Swiper slidesPerView={3} className="mySwiper">
				{Movies.map((movie) =>
					movie.watched ? (
						<SwiperSlide key={movie.id}>
							<MovieCard {...movie} handleToggle={handleToggle} type="mylist" />
						</SwiperSlide>
					) : null,
				)}
			</Swiper>
		</>
	)
}
