import React from 'react';
import '../css/VideoCard.css';
import {ThumbUpSharp} from "@material-ui/icons";

const base_url = 'https://image.tmdb.org/t/p/original/';

function VideoCard({movie}) {
    console.log(movie);
    return (
        <div className="video__card">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster"/>
            <p>{movie.overview}</p>
            <h2>{movie.title || movie.original_title}</h2>
            <p className="movie__likes">
                {movie.media_type && `${movie.media_type} &#8226;`}
                {movie.release_date || movie.first_air_date} &#8226;
                <ThumbUpSharp/>
                {movie.vote_count}
            </p>
        </div>
    )
}

export default VideoCard;
