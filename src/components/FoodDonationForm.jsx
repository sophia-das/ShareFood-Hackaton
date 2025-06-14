import React, { useState } from 'react';

const FoodDonationForm = () => {
  const [foodImage, setFoodImage] = useState(null);
  const [foodName, setFoodName] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoodImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ foodName, weight, price, foodImage });
    alert('Food donation submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-4">
      <h2 className="text-xl font-bold text-green-700">Add a Food Donation</h2>

      <div>
        <label className="block text-sm font-medium">Food Name</label>
        <input
          type="text"
          value={foodName}
          onChange={e => setFoodName(e.target.value)}
          required
          className="mt-1 p-2 border w-full rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={e => setWeight(e.target.value)}
          required
          className="mt-1 p-2 border w-full rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Price (optional)</label>
        <input
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="mt-1 p-2 border w-full rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 w-full text-sm"
        />
        {foodImage && (
          <img
            src={foodImage}
            alt="Preview"
            className="mt-2 rounded w-full h-40 object-cover"
          />
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Submit
      </button>
    </form>
  );
};

export default FoodDonationForm;
