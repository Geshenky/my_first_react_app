import {useState, useEffect} from 'react';

import MovieCard from './MovieCard'
import './App.css';
import SearchIcon from './search.svg';
//627e7ddd

const API_URL = 'http://www.omdbapi.com?apikey=627e7ddd';

const movie1 = {
    "Title": "The Rock Takes the Which Disney Princess Are You? Quiz with the Cast of Moana",
    "Year": "2016",
    "imdbID": "tt8240056",
    "Type": "movie",
    "Poster": "N/A"
}
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm ] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
     searchMovies(`Superman`);
    }, []);
    return(
       <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm (e.target.value)}
            />
            <img
            src= {SearchIcon}
            alt="search"
            onClick={() => searchMovies}
            />
        </div>
        {
            movies?.length > 0 
            ? (
                <div className="container">
            {movies.map((movie) =>(
                <MovieCard movie={movie} />
            ) )}
        </div>
            ) : (
            <div className="empty">
              <h2>No movies found</h2>  
                 
            </div>
            )
        }
        
       </div>
    );
}

export default App;