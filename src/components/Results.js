import React, {useState, useEffect} from 'react';
import '../css/Results.css';
import VideoCard from "./ViedoCard";
import axios from '../axios';
import requests from '../requests';

function Results() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            let response = await axios.get(requests.
                fetchActionMovies);
            setMovies(response.data.results);
            return response
        })();
    }, []);

    return (
        <div className="results">
            {movies.map((movie, index) => (
                <VideoCard key={index} movie={movie} />
            ))}
        </div>
    )
}

export default Results;
