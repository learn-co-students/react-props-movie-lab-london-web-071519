import React, {Component} from 'react';
import MovieCard from './card-components/MovieCard.js';
import movieData from './data.js';

export default class MovieShowcase extends Component {
	generateMovieCards = () =>
		// map over your movieData array and return the correct
		movieData.map((movie) => {
			return (
				<MovieCard
					title={movie.title}
					IMDBRating={movie.IMDBRating}
					genres={movie.genres}
					poster={movie.poster}
				/>
			);
		});
	render() {
		return <div id="movie-showcase">{this.generateMovieCards()}</div>;
	}
}

// Information to declare Keys is missing from the source data. Compliles with just one warning.
