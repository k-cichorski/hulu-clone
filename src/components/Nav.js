import React from 'react';
import '../css/Nav.css';
import requests from "../requests";

function Nav({setSelectedCategory}) {
    return (
        <div className="nav">
            <h2 onClick={() => setSelectedCategory(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setSelectedCategory(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={() => setSelectedCategory(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={() => setSelectedCategory(requests.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={() => setSelectedCategory(requests.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={() => setSelectedCategory(requests.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={() => setSelectedCategory(requests.fetchMystery)}>Mystery</h2>
            <h2 onClick={() => setSelectedCategory(requests.fetchSciFi)}>Sci-fi</h2>
            <h2 onClick={() => setSelectedCategory(requests.fetchWestern)}>Western</h2>
            <h2 onClick={() => setSelectedCategory(requests.fetchAnimation)}>Animation</h2>
            <h2 onClick={() => setSelectedCategory(requests.fetchTV)}>TV</h2>
        </div>
    )
}

export default Nav;
