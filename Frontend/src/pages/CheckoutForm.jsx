import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CheckoutForm = () => {
  const stripe = useStripe();
  const navigate=useNavigate()
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
     
      confirmParams: Swal.fire({
          title: 'Payment Successful!',
          text: 'Thank you for booking your tour with us.',
          icon: 'success',
        }).then(()=> {navigate("/account")})
        
        
        // return_url: 'http://localhost:5173/',
      ,
    })

    if (error) {
      setErrorMessage(error.message);
    } else {
      // Display SweetAlert2 on success
     
    }
  };

  return (<>
    <Navbar/>
    <form onSubmit={handleSubmit}>
      <h1 className='text-3xl font-bold mb-16 text-[#415161] ml-16 '>CheckOut</h1>
      <PaymentElement />
      <button disabled={!stripe} className='bg-[#ED1C24] px-4 p-2 rounded-md text-white mt-4 text-lg'>
        pay
      </button>

      {errorMessage && <div>{errorMessage}</div>}
    </form>
    <div className='fixed bottom-0 left-0 '>
    <Footer/></div>

    </> );
};

export default CheckoutForm;
