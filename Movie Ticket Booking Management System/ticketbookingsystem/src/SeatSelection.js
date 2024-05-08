import React, { useState } from 'react';
import './SeatSelection.css';
import { useNavigate } from 'react-router-dom';

// Generate seat rows with IDs like A1, A2, ..., H16
const generateSeatRows = () => {
  const rows = 'ABCDEFGH'.split('');
  const seatsPerRow = 16;
  return rows.map(row => ({
    row,
    seats: Array.from({ length: seatsPerRow }, (_, index) => ({
      id: `${row}${index + 1}`,
      isAvailable: true // Replace with actual availability
    }))
  }));
};

const SeatSelection = () => {
  const [seatRows, setSeatRows] = useState(generateSeatRows());
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const ticketPrice = 10; // Price per seat

  const navigate = useNavigate();

  const toggleSeatSelection = (seatId) => {
    setSelectedSeats((prevSelectedSeats) => {
      const newSelectedSeats = new Set(prevSelectedSeats);
      if (newSelectedSeats.has(seatId)) {
        newSelectedSeats.delete(seatId);
      } else {
        newSelectedSeats.add(seatId);
      }
      return newSelectedSeats;
    });
  };

  const book = () => {
    navigate('/payment')
  }

  return (
    <div className="screen-view">
      <div className="screen">Screen</div>
      <div className="screen-container">
        {seatRows.map((seatRow) => (
          <div key={seatRow.row} className="seat-row">
            {seatRow.seats.map((seat) => (
              <button
                key={seat.id}
                className={`seat ${selectedSeats.has(seat.id) ? 'selected' : ''}`}
                onClick={() => toggleSeatSelection(seat.id)}
                disabled={!seat.isAvailable}
              >
                {seat.id}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="auditorium">Auditorium 8</div>
      <div className="total">Tickets ${selectedSeats.size * ticketPrice}</div>
      <button className="add-to-cart" onClick={book}>Book</button>
    </div>
  );
};

export default SeatSelection;
