import React, {useState, useEffect} from 'react';
import '../css/Results.css';
import VideoCard from "./ViedoCard";
import axios from '../axios';
import MoreInfo from "./MoreInfo";
import {useStateValue} from "../store/StateProvider";

function Results({selectedCategory}) {
    const [movies, setMovies] = useState([]);
    const [{moreInfo}, dispatch] = useStateValue();

    useEffect(() => {
        (async () => {
            let response = await axios.get(selectedCategory);
            setMovies(response.data.results);
            return response
        })();
    }, [selectedCategory]);

    return (
        <div className="results">
            {moreInfo && <MoreInfo movie={moreInfo}/>}
            {movies.map(movie => (
                <VideoCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default Results;
