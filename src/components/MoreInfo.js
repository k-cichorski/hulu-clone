import React from 'react';
import '../css/MoreInfo.css';
import closeIcon from '../icons/close.svg';
import {useStateValue} from "../store/StateProvider";
import {CLEAR_MOREINFO} from '../store/reducer';
import {ThumbUpSharp} from "@material-ui/icons";

const base_url = 'https://image.tmdb.org/t/p/original/';

function MoreInfo({movie}) {
    const [, dispatch] = useStateValue();
    const hideInfo = () => {
        let action = {
            type: CLEAR_MOREINFO
        }
        dispatch(action);
    }

    return (
        <div className="more__info">
            <div className={"container"}>
                <img src={closeIcon} alt={"close icon"} className={"close__icon"} onClick={() => hideInfo()}/>
                <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster" className={"movie__poster"}/>
                <p>{movie.overview}</p>
                <h2>{movie.title || movie.original_title || movie.name}</h2>
                <p className="">
                    {movie.release_date || movie.first_air_date} <span className="dot">&#8226;</span>
                    <ThumbUpSharp/>
                    {movie.vote_count} <span className="dot">&#8226;</span>
                    {movie.vote_average} / 10
                </p>
            </div>
        </div>
    )
}

export default MoreInfo;
