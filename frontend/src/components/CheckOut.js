import React, { useState, useEffect } from 'react';
import './CheckOut.css';

const CheckOut = () => {
  const [checkedOutItems, setCheckedOutItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('checkedOutItems')) || [];
    setCheckedOutItems(storedItems);
  }, []);

  const handleReturn = (item) => {
    const storedItems = JSON.parse(localStorage.getItem('checkedOutItems')) || [];
    const updatedItems = storedItems.filter(i => i.name !== item.name);
    localStorage.setItem('checkedOutItems', JSON.stringify(updatedItems));
    setCheckedOutItems(updatedItems);

    
    const allItems = JSON.parse(localStorage.getItem('items')) || [];
    const itemIndex = allItems.findIndex(i => i.name === item.name);
    if (itemIndex !== -1) {
      allItems[itemIndex].quantity += item.quantity;
      localStorage.setItem('items', JSON.stringify(allItems));
    }
  };

  return (
    <div className="checkout">
      <h2>Checked Out Items</h2>
      {checkedOutItems.length > 0 ? (
        <ul>
          {checkedOutItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity}
              <button onClick={() => handleReturn(item)}>Return</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items added.</p>
      )}
    </div>
  );
};

export default CheckOut;



