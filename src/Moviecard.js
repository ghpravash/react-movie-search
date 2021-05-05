import React from 'react';
import './index.css';

const Moviecard = ({ movie }) => {
    return (
        <div className="container">
            <div className="card">
                <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + ' poster'} />
                <div className="card--content">
                    <h3 className="card--title">{movie.title}</h3>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Rating: {movie.vote_average}</p>
                    <p className="card--desc">{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default Moviecard;
