import React from 'react';
import '../css/VideoCard.css';

function VideoCard({movie}) {
    return (
        <div className="video__card">
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt=""/>
            <p>Movie about movie</p>
            <h2>Movie Title</h2>
            <p>No of likes..</p>
        </div>
    )
}

export default VideoCard;
