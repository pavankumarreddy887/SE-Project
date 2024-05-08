import React, { useState } from 'react';
import { useParams, useLocation  } from 'react-router-dom';
import TheaterList from './TheatreList';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MovieDetails = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { id } = useParams(); // This retrieves the :id param from the URL

  const location = useLocation();

  // let movie = {
  //   id: 0,
  //   title: 'soon to be revelaed',
  //   language: 'Telugu',
  // };

  // Check if location.state exists and if the movie object is present
  if (!location.state || !location.state.movie) {
    return <div>Loading...</div>; // Or handle the null state appropriately
  }

  const { movie } = location.state;
  // Here you would fetch movie and theater data based on the movie ID
  // For demonstration purposes, we're using static data
  // const movie = {
  //   id: 1,
  //   title: 'Godzilla x Kong: The New Empire (3D Telugu)',
  //   language: 'Telugu',
  // };

  return (
    <div className="movie-details">
      <h1>{movie.title} - {movie.language}</h1>
      <div className="date-picker-container">
        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
      </div>
      <TheaterList movie={movie} date={selectedDate} />
    </div>
  );
};

export default MovieDetails;
