import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AddMenuItem = () => {
  const { token } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  console.log('AddMenuItem component loaded');
  console.log('Current token:', token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newItem = { name, price, description, imageUrl };
      console.log('Submitting new item:', newItem);

      const res = await axios.post('http://localhost:5000/api/menu', newItem, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('Frontend received response from backend:', res.data);
      alert('Item added successfully!');
      navigate('/menu');
    } catch (error) {
      console.error('Frontend error adding item:', error);
      alert('Failed to add menu item.');
    }
  };

  return (
    <div className="add-menu-item">
      <h2>Add New Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddMenuItem;
