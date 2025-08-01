import React, { useState, useEffect } from 'react';
import { getCurrentTurn, getPassDay, getDaysRemaining, isPassActive, getTodayLocal } from '../../utils/pizzaUtils';
import './TurnIndicator.scss';

const TurnIndicator = () => {
  const [currentTurn, setCurrentTurn] = useState(null);
  const [passDay, setPassDay] = useState(null);
  const [daysRemaining, setDaysRemaining] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const updateTurnInfo = () => {
      setCurrentTurn(getCurrentTurn());
      setPassDay(getPassDay(getTodayLocal()));
      setDaysRemaining(getDaysRemaining());
      setIsActive(isPassActive());
    };

    updateTurnInfo();
    // Update every minute to handle date changes
    const interval = setInterval(updateTurnInfo, 60000);
    
    return () => clearInterval(interval);
  }, []);

  if (!isActive) {
    return (
      <div className="turn-indicator inactive">
        <div className="container">
          <div className="turn-content">
            <h2>🍕 Pizza Pass Expired</h2>
            <p>The &Pizza Pass period has ended. Thanks for tracking with us!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="turn-indicator">
      <div className="container">
        <div className="turn-content">
          <div className="turn-header">
            <h2>Today's Turn</h2>
            <div className="pass-info">
              <span className="day-counter">Day {passDay} of 30</span>
              <span className="days-remaining">{daysRemaining} days left</span>
            </div>
          </div>
          
          <div className={`turn-display ${currentTurn?.toLowerCase()}`}>
            <div className="turn-avatar">
              {currentTurn === 'Archie' ? '👨‍💻' : '👨‍💼'}
            </div>
            <div className="turn-details">
              <h3 className="turn-name">{currentTurn}</h3>
              <p className="turn-location">
                {currentTurn === 'Archie' ? 'Brookland, DC' : 'Reston, VA'}
              </p>
            </div>
            <div className="turn-status">
              <span className="status-badge">ACTIVE</span>
            </div>
          </div>
          
          <div className="turn-message">
            <p>
              {currentTurn === 'Archie' 
                ? "It's Archie's turn to order from &Pizza today!"
                : "It's Charles's turn to order from &Pizza today!"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnIndicator; 