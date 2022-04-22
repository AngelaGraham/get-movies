import logo from './logo.svg';
import React from 'react';
import './App.css'; 
import MovieDetails from './components/MovieDetails';
import { movieData } from './data';
import MovieForm from './components/MovieForm';
import {useState} from 'react';
// import { useState } from "react";

function App() {

  const [searchTerm, setSearchTerm] = useState ("Batman");
  const [isLoading, setIsLoading]= useState(false);
  const [movies, setMovies] = useState([]);
  const [error,setError] = useState();

  return (
    // <div className="App">
    <div>
      <MovieForm props  ={movieData}></MovieForm>
      {/* <HeaderFooter>
        <Home />
      </HeaderFooter>
      <MovieForm/> */}
      <MovieDetails movieData = {movieData}></MovieDetails>
    </div>
  );
}

// const searchTerm =()=>{

//   const [searchTerm, setSearchTerm] = useState ("Batman");
//   const [isLoading, setIsLoading]= useState(false);
// // }

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}