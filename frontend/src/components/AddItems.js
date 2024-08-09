import React, { useState } from 'react';
import './AddItems.css';

const AddItems = ({ onSave }) => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const categories = ['Nurses Items', 'Medicines', 'Equipment', 'Food/Snacks'];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && name && image) {
      const newItem = { category, name, image: URL.createObjectURL(image) };
      fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      })
        .then((response) => response.json())
        .then((data) => {
          onSave();
          setCategory('');
          setName('');
          setImage(null);
        })
        .catch((error) => console.error('Error:', error));
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="add-items-container">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Item Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddItems;






