import React from 'react';
import '../css/MoreInfo.css';
import closeIcon from '../icons/close.svg';
import youtubeLogo from '../icons/youtube-logo.svg';
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
    const title = movie.title || movie.original_title || movie.name;
    const date = movie.release_date || movie.first_air_date;
    const trailerRedirect = `https://www.youtube.com/results?search_query=${title} ${date.slice(0, 4)} trailer`;

    return (
        <div className="more__info">
            <div className={"container"}>
                <img src={closeIcon} alt={"close icon"} className={"close__icon"} onClick={() => hideInfo()}/>
                <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster" className={"movie__poster"}/>
                <p>{movie.overview}</p>
                <h2>{title}</h2>
                <p className="movie__info">
                    {date} <span className="dot">&#8226;</span>
                    <ThumbUpSharp/>
                    {movie.vote_count} <span className="dot">&#8226;</span>
                    {movie.vote_average} / 10
                    <a href={trailerRedirect} target="_blank" rel="noopener noreferrer">
                        <img src={youtubeLogo} alt="YouTube logo"  className={"yt__logo"}/>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default MoreInfo;
