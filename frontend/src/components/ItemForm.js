import React, { useState } from 'react';

function ItemForm({ item }) {
  const [name, setName] = useState(item ? item.name : '');
  const [description, setDescription] = useState(item ? item.description : '');
  const [quantity, setQuantity] = useState(item ? item.quantity : 0);

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{item ? 'Edit Item' : 'Create Item'}</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Quantity" 
        value={quantity} 
        onChange={(e) => setQuantity(parseInt(e.target.value))} 
      />
      <button type="submit">{item ? 'Update Item' : 'Create Item'}</button>
    </form>
  );
}

export default ItemForm;
