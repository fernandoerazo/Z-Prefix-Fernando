import React, { useState } from 'react';
import './ItemSwipe.css';
import itemsData from './itemsData';
import ItemCard from './ItemCard';

const ItemSwipe = () => {
  const [category, setCategory] = useState('Nurses Items');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = Object.keys(itemsData);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCurrentIndex(0);
  };

  const handleSwipe = (direction) => {
    if (direction === 'right') {
      
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsData[category].length);
  };

  return (
    <div className="item-swipe-container">
      <div className="category-dropdown">
        <select onChange={handleCategoryChange} value={category}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      {category && (
        <ItemCard
          item={itemsData[category][currentIndex]}
          onSwipe={handleSwipe}
        />
      )}
    </div>
  );
};

export default ItemSwipe;











