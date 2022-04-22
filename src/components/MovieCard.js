import React from "react";

function MovieCard(props) {
    // console.log(props.movie);
    return (
        <div className="MovieCardContainer">
            <div className="MovieTitle">{props.title}</div>
            <div className="MoviePoster">{props.poster}</div>
            <div className="MoviePosterUrl">{props.poster}</div>
        </div>
    )
}
ReactDOM.render(<MovieCard />, document.getElementById('root'));