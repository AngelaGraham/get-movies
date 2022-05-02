// import logo from './logo.svg';
import React from 'react';
import './App.css'; 
import MovieDetails from './components/MovieDetails';
import { movieData } from './data';
import MovieForm from './components/MovieForm';
import {useState, useEffect} from 'react';
import MovieList from './components/MovieList';
import Modal from './components/Modal';



const API_KEY = process.env.REACT_APP_OMDB_API_KEY
function App() {

  const [searchTerm, setSearchTerm] = useState ("Batman");
  const [isLoading, setIsLoading]= useState(false);
  const [movies, setMovies] = useState([]);
  const [error,setError] = useState(null);
  // const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  useEffect(() =>{
    async function fetchData() {
    setIsLoading(true);
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`;
    const response =await fetch(url);
    const data= await response.json();
    
      setMovies(data.Search)
      setIsLoading (false);
  };

  // async function getMoviesByName(name) {
  //   const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${name}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   return data 
  // }
  
  // getMoviesByName("Avengers");

    fetchData ();
},    [searchTerm]);

// console.log(movies);
return (
  <div className="App">
    {/* <MovieForm/>     */}Hello World
    <MovieList movies={movies}/>
    {/* {showModal && !isLoading && <Modal show ={movies[2].Title} setShowModal = {setShowModal}/>} */}
    {/* <button onClick = {( )=>setShowModal(true)}>Open Modal</button> */}

    <button onClick={() => setIsModalOpen(true}>Open the modal!</button>
    <ReactModal isOpen={isModalOpen}>
    <button onClick={() => setIsModalOpen(false)}>
          Close the modal!
    </button>
    </ReactModal>

  </div>
  );

 }

 export default App;
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await MyAPI.getData(someId);
  //     // ...
  //   }
  //   fetchData();
  // }, [someId]); // Or [] if effect doesn't need props or state

  
 

// const searchTerm =()=>{

//   const [searchTerm, setSearchTerm] = useState ("Batman");
//   const [isLoading, setIsLoading]= useState(false);
// // }

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a>
          
        
          Learn React
        </a>
      </header> */

      // const ThatThing = ()=> {
      //   return ( 
      //     <div>
      //        <ThatThing/>
      //     </div>
      //   )
      // }
      // export default ThatThing