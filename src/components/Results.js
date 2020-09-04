import React, {useState, useEffect} from 'react';
import '../css/Results.css';
import VideoCard from "./ViedoCard";
import axios from '../axios';

function Results({selectedCategory}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            let response = await axios.get(selectedCategory);
            setMovies(response.data.results);
            return response
        })();
    }, [selectedCategory]);

    return (
        <div className="results">
            {movies.map(movie => (
                <VideoCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default Results;
