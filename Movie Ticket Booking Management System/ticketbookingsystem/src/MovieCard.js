import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css'; // Create and style your MovieCard

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(movie)
    navigate(`/moviedetails/${movie.movieId}`, { state: { movie } });
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
        <div className="movie-rating">
          <span>{movie.rating}</span>
          <span>{movie.votes} Votes</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
