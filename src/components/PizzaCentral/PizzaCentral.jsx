import React, { useState, useEffect } from 'react';
import { getCurrentTurn, getPassDay, getTodayLocal } from '../../utils/pizzaUtils';
import StatsPanel from '../StatsPanel/StatsPanel';
import './PizzaCentral.scss';

const PizzaCentral = () => {
  const [currentTurn, setCurrentTurn] = useState(null);
  const [passDay, setPassDay] = useState(null);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const updateTurnInfo = () => {
      const turn = getCurrentTurn();
      const day = getPassDay(getTodayLocal());
      const progress = (day / 30) * 100;
      
      setCurrentTurn(turn);
      setPassDay(day);
      setProgressPercentage(progress);
    };

    updateTurnInfo();
    // Update every minute to handle date changes
    const interval = setInterval(updateTurnInfo, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pizza-central-layout">
      <div className="left-circle">
        <div className={`person-circle archie ${currentTurn === 'Archie' ? 'active' : ''}`}>
          <span className="avatar-emoji">🐢</span>
          <span className="person-name">Archie</span>
        </div>
      </div>
      
      <div className="center-section">
        <div className="pizza-slice-container">
          <div className="pizza-slice">
            <span className="pizza-emoji">🍕</span>
            <div className="progress-overlay">
              <div 
                className="progress-fill"
                style={{ height: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="stats-group">
          <StatsPanel />
        </div>
      </div>
      
      <div className="right-circle">
        <div className={`person-circle charles ${currentTurn === 'Charles' ? 'active' : ''}`}>
          <span className="avatar-emoji">🥷</span>
          <span className="person-name">Charles</span>
        </div>
      </div>
    </div>
  );
};

export default PizzaCentral; 