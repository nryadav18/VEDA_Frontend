import React, { useCallback, useState } from "react";
import useRazorpay from "react-razorpay";
import axios from "axios";
export default function Payment() {
  const [Razorpay] = useRazorpay();
  const [order , setorder] = useState({})
  const handlePayment = useCallback(async () => {

    axios.get("http://localhost:3002/add-payment")
    .then(res => {
        console.log(res.data)
        setorder(res.data)
    })
    .catch(err=>{
        console.log(err)
    })

    const options = {
      key: process.env.RAZORPAY_KEY_ID, 
      amount: order.amount,
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo", 
      order_id: order.order_id, 
      handler: (response) => {
        console.log(response);
      },
      prefill: {
        name: "Piyush Garg", 
        email: "youremail@example.com",
        contact: "8309958747", 
      },
      notes: {
        address: "Razorpay Corporate Office", 
      },
      theme: {
        color: "#3399cc", 
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="App">
      <button onClick={handlePayment}>Click</button>
    </div>
  );
}

// Define createOrder function for creating an order on the server
async function createOrder(params) {
  // Implement your backend API call logic to create an order here
  // For example, using fetch or axios to send a request to your server
  // Here, we'll use a mock implementation:

  // Mock response assuming successful order creation
  return {
    id: "order_123456", // Replace with the actual order ID from your server response
    amount: 3000, // Amount in paise
    currency: "INR",
  };
}
