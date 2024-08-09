import React, { useState } from 'react';
import ItemCard from './ItemCard';
import itemsData from './itemsData';
import './ItemSwipe.css';
import './CategoryDropdown.css';
import './Home.css'; // Add this line if you have custom styles for Home component

const Home = () => {
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = Object.keys(itemsData);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSearchTerm(''); // Reset search term when category changes
    setCurrentIndex(0);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setCurrentIndex(0);
  };

  const handleSwipe = (direction) => {
    if (direction === 'right') {
      // Add to checkout logic
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
  };

  const filteredItems = category
    ? itemsData[category].filter(item =>
        item.name.toLowerCase().includes(searchTerm)
      )
    : [];

  return (
    <div className="item-swipe-container">
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <select onChange={handleCategoryChange} value={category} className="category-dropdown">
        <option value="">Select a category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      {category && filteredItems.length > 0 ? (
        <ItemCard
          item={filteredItems[currentIndex]}
          onSwipe={handleSwipe}
        />
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default Home;








