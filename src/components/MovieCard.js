import React from "react";

function MovieCard(props) {
     console.log(props.movie);
    return (
        <div className="MovieCardContainer">
            <div className="MovieTitle">{props.movie.Title}</div>
            <div className="MoviePoster">{props.movie.Poster}</div>
            <div className="MoviePosterUrl">{props.movie.PosterUrl}</div>
        </div>
    )
}

// ReactDOM.render(<MovieCard />, document.getElementById('root'));
export default MovieCard;