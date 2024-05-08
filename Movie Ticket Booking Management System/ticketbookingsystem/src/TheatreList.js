import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Theater from './Theater';
import './TheaterList.css';

const TheaterList = ({ movie, date }) => {
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    const fetchTheaters = async () => {
      try {
        console.log(movie.movieId)
        // Make an API call to fetch theaters based on movie ID and selected date
        const response = await axios.get(`http://localhost:8090/movie/getTheatersWithShowtimes/${movie.movieId}`);
        setTheaters(response.data);
      } catch (error) {
        console.error('Error fetching theaters:', error);
        // Handle error states here, e.g., set an empty array or display an error message
        setTheaters([]);
      }
    };

    fetchTheaters();
  }, [movie.id]);

  return (
    <div className="theater-list">
      {theaters.length === 0 ? (
        <p>No theaters available for the selected movie and date.</p>
      ) : (
        theaters.map((theater) => (
          <Theater key={theater.id} theater={theater} movie={movie}/>
        ))
      )}
    </div>
  );
};

export default TheaterList;
