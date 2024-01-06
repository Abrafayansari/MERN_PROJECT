import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const CheckoutForm = () => {
  const stripe = useStripe();
  const bookingstate=useSelector(state=>state.Booking)
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
const Swal=()=>{
  return  Swal.fire({
    title: 'Payment Successful!',
    text: 'Thank you for booking your tour with us.',
    icon: 'success',
  })
}
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,Swal,
      confirmParams: { return_url: 'http://localhost:5173/' },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      // Payment was successful
     
    
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h1 className='text-3xl font-bold mb-16 text-[#415161] ml-16 '>CheckOut</h1>{JSON.stringify(bookingstate)}
        <PaymentElement />
        <button disabled={!stripe} className='bg-[#ED1C24] px-4 p-2 rounded-md text-white mt-4 text-lg'>
          Pay
        </button>

        {errorMessage && <div>{errorMessage}</div>}
      </form>
      <div className='fixed bottom-0 left-0 '>
        <Footer />
      </div>
    </>
  );
};
}
export default CheckoutForm;
