import logo from './logo.svg';
import React from 'react';
import './App.css'; 
import MovieDetails from './components/MovieDetails';
import { movieData } from './data';
import MovieForm from './components/MovieForm';
import {useState, useEffect} from 'react';
import MovieList from './components/MovieList';


const API_KEY = process.env.REACT_APP_OMDB_API_KEY
function App() {

  const [searchTerm, setSearchTerm] = useState ("Batman");
  const [isLoading, setIsLoading]= useState(false);
  const [movies, setMovies] = useState([]);
  const [error,setError] = useState(null);


  useEffect(() =>{
    async function fetchData() {
    setIsLoading(true);
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`;
    const response =await fetch(url);
    const data= await  response.json();
    
      setMovies(data.Search)
      setIsLoading (false);
      
  };
    fetchData ();
},    [searchTerm]);
  

  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await MyAPI.getData(someId);
  //     // ...
  //   }
  //   fetchData();
  // }, [someId]); // Or [] if effect doesn't need props or state

  return (
   <div className="App">
     {/* <MovieForm/>     */}Hello World
     <MovieList movies={movies}/>
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