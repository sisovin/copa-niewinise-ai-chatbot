import React, { useState } from 'react';

const BillingSettings = () => {
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    subscriptionPlan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Billing Info Submitted:', billingInfo);
  };

  return (
    <div>
      <h2>Billing Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={billingInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={billingInfo.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={billingInfo.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={billingInfo.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type="text"
            name="expiryDate"
            value={billingInfo.expiryDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={billingInfo.cvv}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Subscription Plan:</label>
          <select
            name="subscriptionPlan"
            value={billingInfo.subscriptionPlan}
            onChange={handleChange}
          >
            <option value="">Select a plan</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default BillingSettings;
