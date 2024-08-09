import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemSwipe from './components/ItemSwipe';
import CheckOut from './components/CheckOut';
import AddItems from './components/AddItems';
import Home from './components/Home';
//
import Login from './components/Login'; 
const App = () => {
  const [update, setUpdate] = useState(false);

  const handleUpdate = () => {
    setUpdate(!update);
  };

  return (
    <div className="app-container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/items" element={<ItemSwipe key={update} />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/additems" element={<AddItems onSave={handleUpdate} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;






















