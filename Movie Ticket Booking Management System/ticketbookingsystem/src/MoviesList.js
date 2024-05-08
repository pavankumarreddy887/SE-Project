import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard'; // Import the MovieCard component
import './MoviesList.css'; // Ensure this CSS file is created
import axios from 'axios'; // Import Axios

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Make API call using Axios to get the list of movies
        const response = await axios.get('http://localhost:8090/movie/getAllMovies');
        setMovies(response.data); // Assuming response.data is an array of movie objects
      } catch (error) {
        // Handle API call error
        console.error('Error fetching movies:', error);
        setError('Failed to fetch movies. Please try again.');
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movies-list">
      {error && <p className="error-message">{error}</p>}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
