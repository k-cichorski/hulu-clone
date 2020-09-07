import React, {forwardRef} from 'react';
import '../css/VideoCard.css';
import {ThumbUpSharp} from "@material-ui/icons";
import {SET_MOREINFO} from "../store/reducer";
import {useStateValue} from "../store/StateProvider";

const base_url = 'https://image.tmdb.org/t/p/original/';

const VideoCard = ({movie}) => {
    const [, dispatch] = useStateValue();
    const showInfo = movie => {
        let action = {
            type: SET_MOREINFO,
            payload: movie
        }
        dispatch(action);
    }
    return (
        <div className="video__card" onClick={() => showInfo(movie)}>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster"/>
            <p>{movie.overview}</p>
            <h2>{movie.title || movie.original_title || movie.name}</h2>
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
