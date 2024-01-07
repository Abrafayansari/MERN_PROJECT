import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
import { useSelector } from 'react-redux';

const initStripe = async () => {

    const res = await axios.get("http://localhost:5003/publishable-key");
    const publishableKey = await res.data.publishable_key;

    return loadStripe(publishableKey);
  };
const Checkout = () => {
    const stripePromise = initStripe();
const bookingstate=useSelector(state=>state.Booking)
    const [clientSecretSettings, setClientSecretSettings] = useState({
        clientSecret: "",
        loading: true,
      });
      useEffect(() => {
        async function createPaymentIntent() {
           await axios.post("http://localhost:5003/create-payment-intent", {price:bookingstate.currentbooking.price,email:bookingstate.currentbooking.email,name:bookingstate.currentbooking.name})
          .then((res)=>{console.log(res.data);setClientSecretSettings({
            clientSecret: res.data.client_secret,
            loading: false,
          });});


        }
        createPaymentIntent();
      }, []);
    return (
      <div>
      <div>
      {clientSecretSettings.loading ? (
        <h1>Loading ...</h1>
      ) : (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret: clientSecretSettings.clientSecret,
            appearance: { theme: "stripe" },
          }}
        >
          <CheckoutForm />
        </Elements>
      )}
    </div>
      </div>
    );
  };

  export default Checkout;