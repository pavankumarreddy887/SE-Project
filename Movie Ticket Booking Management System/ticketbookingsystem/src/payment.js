import React, { useState } from 'react';
import './payment.css'; // Make sure to create and import this CSS file with styles from your template

const PaymentPage = () => {
    const [cardInfo, setCardInfo] = useState({
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
    });
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCardInfo({ ...cardInfo, [name]: value });
      // Reset errors for a particular field
      if (errors[name]) {
        setErrors({ ...errors, [name]: '' });
      }
    };
  
    const validateForm = () => {
      let tempErrors = {};
      if (!cardInfo.cardNumber.match(/^\d{16}$/)) {
        tempErrors.cardNumber = 'Card number should be 16 digits';
      }
      if (!cardInfo.cardName) {
        tempErrors.cardName = 'Name on card is required';
      }
      if (!cardInfo.expiryDate.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)) {
        tempErrors.expiryDate = 'Invalid expiry date';
      }
      if (!cardInfo.cvv.match(/^\d{3}$/)) {
        tempErrors.cvv = 'CVV should be 3 digits';
      }
      return tempErrors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formErrors = validateForm();
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
      } else {
        // API call to process payment goes here
        alert('Tickets are booked successfully!');
      }
    };
  
    return (
      <div className="payment-container">
        <h2>Payment Information</h2>
        <form onSubmit={handleSubmit} className="payment-form">
          {/* Card Number Input */}
          <div className="form-field">
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={cardInfo.cardNumber}
              onChange={handleChange}
              required
            />
            {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
          </div>
          <div className="form-field">
          <label>Name on Card</label>
          <input
            type="text"
            name="cardName"
            value={cardInfo.cardName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Expiry Date</label>
          <input
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            value={cardInfo.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label>CVV</label>
          <input
            type="text"
            name="cvv"
            maxLength="3"
            value={cardInfo.cvv}
            onChange={handleChange}
            required
          />
        </div>
          {/* ... Other fields ... */}
          <button type="submit" className="submit-btn">Submit Payment</button>
        </form>
      </div>
    );
  };
  
  export default PaymentPage;