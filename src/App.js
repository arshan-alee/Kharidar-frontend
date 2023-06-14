import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Retrieve the totalAmount parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  let amount = urlParams.get('amount');

  // Set a default price if amount is not received
  if (!amount) {
    amount = '100'; // Default price value
  }

  // Display the totalAmount on the webpage
  useEffect(() => {
    document.getElementById('totalAmount').textContent = amount + " $";
  }, [amount]);

  const handlePayment = async () => {
    const payment = await axios.post(
      'https://cautious-sundress-hen.cyclic.app/stripe-checkout',
      {
        amount,
      }
    );

    const paymentUrl = payment.data.url;

    // Open the payment URL on the same page
    window.location.href = paymentUrl;
  };

  return (
    <div className="container">
      <div id="totalAmountContainer">
        <img src="./Khariidar-Logo.png" alt="Total Amount Image" id="totalAmountImage" />
      </div>
      <h1 className="title">Total Order Amount:</h1>
      <p id="totalAmount"></p>
      <h3 id="greetings">Thank you for Shopping!</h3>
      <button id="submitButton" onClick={handlePayment}>
        Place Order
      </button>
    </div>
  );
}

export default App;
