import React, { useState, useEffect } from 'react';
import { getPassDay, getTodayLocal } from '../../utils/pizzaUtils';
import './Header.scss';

const Header = () => {
  const [passDay, setPassDay] = useState(null);

  useEffect(() => {
    const updatePassDay = () => {
      setPassDay(getPassDay(getTodayLocal()));
    };

    updatePassDay();
    // Update every minute to handle date changes
    const interval = setInterval(updatePassDay, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🍕</span>
            <h1 className="hero-text">&PizzaPass</h1>
          </div>
          <div className="day-counter">
            <span className="day-text">Day {passDay} of 30</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 