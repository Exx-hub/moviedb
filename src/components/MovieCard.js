import React from "react";

function MovieCard(props) {
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div className="movie-info">
        <p>{props.movie.title}</p>
        <p className="overview">{props.movie.overview}</p>
        <div className="movie-buttons">
          <button className="btn play-btn">Play</button>
          <button className="btn view-btn">View</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;