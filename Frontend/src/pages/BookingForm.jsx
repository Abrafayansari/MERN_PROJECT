import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    place:"",
    email:"",
    phone: '',
    price: '',
    checkin: '',
    checkout: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
        <div className="mb-4">
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
           <div className="mb-4">
          <label htmlFor="place" className="block text-sm font-medium text-gray-600">
            Place
          </label>
          <input
            type="number"
            id="place"
            disabled
            name="place"
            placeholder=''
            value={formData.place}
            onChange={handleChange}
            className="mt-1 p-2 cursor-not-allowed w-full border rounded-md"
            
          />
        </div>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
            Price
          </label>
          <input
            type="number"
            id="price"
            disabled
            name="price"
            placeholder=''
            value={formData.price}
            onChange={handleChange}
            className="mt-1 p-2 cursor-not-allowed w-full border rounded-md"
            
          />
        </div>
        <div className="mb-4">
          <label htmlFor="checkin" className="block text-sm font-medium text-gray-600">
            Check-in
          </label>
          <input
            type="datetime-local"
            id="checkin"
            name="checkin"
            value={formData.checkin}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="checkout" className="block text-sm font-medium text-gray-600">
            Check-out
          </label>
          <input
            type="datetime-local"
            id="checkout"
            name="checkout"
            value={formData.checkout}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
