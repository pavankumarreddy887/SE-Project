import React from 'react';
import './Theater.css'; // Ensure this CSS file is correctly imported
import { useNavigate } from 'react-router-dom';

const Theater = ({ theater, movie }) => {
  const navigate = useNavigate();

  const handleShowtimeClick = (showtime) => {
    // Navigate to the seat selection page with theater, showtime, and movie details
    navigate(`/theater/${theater.theaterId}/showtime/${showtime.showtimeId}`, {
      state: { theater, showtime, movie }
    });
  };

  return (
    <div className="theater">
      <h2>{theater.name}</h2>
      <div className="showtimes">
        {theater.showtimes.map((showtime, index) => (
          <button key={index} className="showtime" onClick={() => handleShowtimeClick(showtime)}>
            {showtime.showtime}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Theater;
