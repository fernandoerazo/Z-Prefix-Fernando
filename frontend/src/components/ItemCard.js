import React from 'react';
import './ItemSwipe.css';

const ItemCard = ({ item, onSwipe }) => {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <div className="swipe-buttons">
        <button className="swipe-left" onClick={() => onSwipe('left')}>❌</button>
        <button className="swipe-right" onClick={() => onSwipe('right')}>✅</button>
      </div>
    </div>
  );
};

export default ItemCard;




