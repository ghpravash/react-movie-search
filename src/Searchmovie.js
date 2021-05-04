import React, { useState } from 'react';
import './index.css';
import Moviecard from './Moviecard';

export default function Searchmovie() {
    //Two states one for input query and another for displaying movie
    //for input query
    const [query, setQuery] = useState('');
    //for movie 
    const [movies, setMovies] = useState([]);


    const Searchmovie = async (e) => {
        e.preventDefault();

        console.log("submitting");



        const url = `https://api.themoviedb.org/3/search/movie?api_key=64861e909c80f895381498f7db521436&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = res.json();
            console.log(data.results);
            setMovies(data.results);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
            <form className="form" onSubmit={Searchmovie}>
                <label className="label" htmlFor="query">Movie Name:</label>
                {/* value={query} connects input to useState */}
                <input className="input" type="text" name="query" placeholder="i.e. Ice Age" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.map(movie => {
                    return ( <Moviecard movie={movie} key={movie.id}/> ) 
                    })}
            </div>
        </>
        )
    }

    // .filter((movie) => movie.poster_path)


