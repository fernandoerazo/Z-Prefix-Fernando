import React from 'react';

const SwipeItem = ({ item, onSwipeRight, onSwipeLeft }) => {
  return (
    <div className="swipe-item">
      <img src={item.image} alt={item.name} />
      <div className="item-info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <div className="swipe-buttons">
        <button onClick={onSwipeLeft}>X</button>
        <button onClick={onSwipeRight}>✓</button>
      </div>
    </div>
  );
};

export default SwipeItem;
