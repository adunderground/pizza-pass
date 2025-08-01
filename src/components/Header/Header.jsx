import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🍕</span>
            <h1 className="logo-text">&PizzaPass</h1>
          </div>
          <div className="header-subtitle">
            <p>Archie & Charles • 30 Pizzas • 30 Days</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 