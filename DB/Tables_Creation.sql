-- Create Movies Table
CREATE TABLE Movies (
  movie_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  duration INT NOT NULL,
  genre VARCHAR(50),
  language VARCHAR(50),
  rating VARCHAR(10),
  release_date DATE
);

-- Create Theaters Table
CREATE TABLE Theaters (
  theater_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location TEXT,
  total_seats INT NOT NULL
);

-- Create Showtimes Table
CREATE TABLE Showtimes (
  showtime_id INT AUTO_INCREMENT PRIMARY KEY,
  theater_id INT NOT NULL,
  movie_id INT NOT NULL,
  showtime TIME NOT NULL,
  date DATE NOT NULL,
  FOREIGN KEY (theater_id) REFERENCES Theaters(theater_id),
  FOREIGN KEY (movie_id) REFERENCES Movies(movie_id)
);

-- Create Seats Table
CREATE TABLE Seats (
  seat_id INT AUTO_INCREMENT PRIMARY KEY,
  theater_id INT NOT NULL,
  seat_number VARCHAR(10) NOT NULL,
  -- row CHAR(1),
  is_handicapped_accessible BOOLEAN,
  FOREIGN KEY (theater_id) REFERENCES Theaters(theater_id)
);

-- Create Bookings Table
CREATE TABLE Bookings (
  booking_id INT AUTO_INCREMENT PRIMARY KEY,
  showtime_id INT NOT NULL,
  user_id INT, -- This can be nullable if not enforcing user accounts
  booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total_price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (showtime_id) REFERENCES Showtimes(showtime_id)
);

-- Create BookedSeats Table
CREATE TABLE BookedSeats (
  booked_seat_id INT AUTO_INCREMENT PRIMARY KEY,
  booking_id INT NOT NULL,
  seat_id INT NOT NULL,
  is_booked BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id),
  FOREIGN KEY (seat_id) REFERENCES Seats(seat_id)
);

-- Create Users Table (if you have user accounts)
CREATE TABLE Users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL
);
