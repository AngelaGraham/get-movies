import React from "react";

const MovieDetails = ({movieData})=> {
  console.log(movieData)
    return(
        <div>
            {movieData.Title}
            <img src = {movieData.Poster}/>

        </div>
    )
};
export default MovieDetails;
// function details(props) {
//     return {props.details} 

//     <div className="Poster">
//         {props.posterUrl}
//       </div>

// const details = 
//     {details: posterUrl, 
//     details: title, 
//     details: rated,
//     details: runtime,
//     details: genre,
//     details: plot,
//     details: actors,
//     details: rating

// }
   
// }
// const root =createRoot (document.getElementById('root'));
// root.render(<MovieDetails/>);