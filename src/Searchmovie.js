import React, { useState } from 'react';
import './index.css';
import Moviecard from './Moviecard';
import "./App.css";
// import ReactPaginate from 'react-paginate';

export default function Searchmovie() {
    //Two states one for input query and another for displaying movie
    //for input query
    const [query, setQuery] = useState('startups');
    //for movie 
    const [movies, setMovies] = useState([]);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=64861e909c80f895381498f7db521436&language=en-US&query=${query}`


    const searchMovie = (e) => {

        e.preventDefault();

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results);
            })
            .catch(error => console.error('Error', error));
    };

    return (
        <>
            <form className="form">
                <label className="label" htmlFor="query">Movie Name:</label>
                {/* value={query} connects input to useState */}
                <input className="input" type="text" name="query" placeholder="i.e. ice age" onChange={(e) => setQuery(e.target.value)} />
                <button className="button" type="submit" onClick={searchMovie}>Search</button>
            </form>

            <div className="card-list">
                {
                    movies.filter((movie) => movie.poster_path).map((movie) => {
                        return (
                            <Moviecard movie={movie} key={movie.id} />
                        );
                    })
                }
            </div>

        </>
    );

}



