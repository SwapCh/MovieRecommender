import React from 'react';
import {useState, useEffect} from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL= "http://www.omdbapi.com?apikey=756d0c46"

const movie1={
    "Poster":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Title":"The Godfather",
    "Type":"movie",
    "Year":"1972",
    "imdbID":"tt0068646",
}

const App = () => {
    const [movies, setMovies]= useState([]);
    const [searchTerm, setSearchTerm]= useState("");
    
    const searchMovies= async (title)=>{
        const response = await fetch (`${API_URL}&s=${title}`);
        const data= await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies("Godfather")}, []);

    return(
        <div className='app'>
            <h1>CineWorld</h1>

            <div className='search'>
                <input 
                placeholder='Search Your Fav movies'
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}/>

                <img src={SearchIcon} alt="search"
                 onClick={()=>searchMovies(searchTerm)}/>
            </div>

            {
                movies?.length>0
                    ?
                    (<div className="container">
                        {movies.map((movie) =>(
                            <MovieCard movie={movie}/>
                        ))}
                </div>):(
                    <div className='empty'>
                        <h2>No movies</h2>
                    </div>
                )
            }

            
        </div>

    )
    
        
}

export default App;
