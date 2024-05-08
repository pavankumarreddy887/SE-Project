import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import Homepage from './Homepage';
import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';
import SeatSelection from './SeatSelection';
import PaymentPage from './payment';

function App() {
  return (
    <div className="App">
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    {/* Use 'element' prop to specify the component to render */}
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/movieslist" element={<MoviesList/>}/>
                    <Route path="/moviedetails/:id" element={<MovieDetails/>}/>
                    <Route path="/theater/:id/showtime/:showtimeId" element={<SeatSelection/>}/>
                    <Route path="/payment" element={<PaymentPage />} />
                </Routes>
                {/* Add other routes (e.g., movie listings) here */}
            </Router>

        </AuthProvider>  
    </div>
  );
}

export default App;
