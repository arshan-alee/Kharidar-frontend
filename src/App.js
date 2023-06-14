import "./App.css";
import axios from "axios";
function App() {

  // Retrieve the totalAmount parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const amount = urlParams.get('amount');

  // Display the totalAmount on the webpage
  document.getElementById("totalAmount").textContent = amount;

  const handlePayment = async () => {
    const payment = await axios.post("https://cautious-sundress-hen.cyclic.app/stripe-checkout", {
      amount,
    });

    const paymentUrl = payment.data.url;

    // Open the payment URL on the same page
    window.location.href = paymentUrl;
  };
  return (
    <div class="container">
      <div id="totalAmountContainer">
        <img src="./Khariidar-Logo.png" alt="Total Amount Image" id="totalAmountImage" />
      </div>
      <h1 class="title">Total Order Amount:</h1>
      <p id="totalAmount"></p>
      <h3 id="greetings">Thank you for Shopping!</h3>
      <button id="submitButton" onclick={handlePayment}>Place Order</button>
    </div>
  );
}

export default App;
