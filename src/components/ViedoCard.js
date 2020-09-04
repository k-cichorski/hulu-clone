import React, {forwardRef} from 'react';
import '../css/VideoCard.css';
import {ThumbUpSharp} from "@material-ui/icons";

const base_url = 'https://image.tmdb.org/t/p/original/';

const VideoCard = ({movie}) => {
    return (
        <div className="video__card">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster"/>
            <p>{movie.overview}</p>
            <h2>{movie.title || movie.original_title}</h2>
            <p className="movie__likes">
                {movie.release_date || movie.first_air_date} <span className="dot">&#8226;</span>
                <ThumbUpSharp/>
                {movie.vote_count} <span className="dot">&#8226;</span>
                {movie.vote_average} / 10
            </p>
        </div>
    )
};

export default VideoCard;
