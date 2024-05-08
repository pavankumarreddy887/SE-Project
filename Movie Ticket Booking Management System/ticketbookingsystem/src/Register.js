import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Make sure to create a RegistrationForm.css file in the same directory

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState(null); // State for success or error message

  const { email, firstName, lastName, phoneNumber, gender, password, confirmPassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Client-side validation
    if (!validateForm()) {
      return;
    }

    console.log("validation performed")

    try {
      // Make an API call to register the user
      console.log(formData);
      const response = await axios.post('http://localhost:8090/movie/register', formData).then(res => {
        console.log(res.data);
        // Handle success response
      setMessage('Account created successfully!');
      },(error) => {
        //   toast.error(<div>&nbsp;<VscError />&nbsp;{"Invalid credentials!!"}</div>, {
        //     position: "top-center",
        //     hideProgressBar: true,
        //     pauseOnHover: false,
        //   });
        // 

        setMessage('Account not created successfully!');
      }
      )

    
      // Clear the form after successful registration
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        gender: '',
        password: '',
        confirmPassword: '',
      });

    } catch (error) {
      // Handle error response
      setMessage('An error occurred. Please try again.');
      console.error('Registration failed:', error);
    }
  };

  const validateForm = () => {
    if (!email || !firstName || !lastName || !phoneNumber || !gender || !password || !confirmPassword) {
      setMessage('All fields are required.');
      return false;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return false;
    }

    // Additional validation for email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage('Invalid email format.');
      return false;
    }

    // Clear any existing validation message if all checks passed
    setMessage(null);
    return true;
  };

  return (
    <div className="registration-form-container">
      <div className="registration-form-box">
        <h1>Registration Form</h1>
        {message && <p className="error-message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="User ID (example@email.com)"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Contact number"
            value={phoneNumber}
            onChange={handleChange}
            required
          />
          <div className="gender-options">
            Gender:
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={handleChange}
                required
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={gender === 'other'}
                onChange={handleChange}
                required
              />
              Other
            </label>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
