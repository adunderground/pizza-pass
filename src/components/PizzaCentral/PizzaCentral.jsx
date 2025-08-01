import React, { useState, useEffect } from 'react';
import { getCurrentTurn, getPassDay, getTodayLocal } from '../../utils/pizzaUtils';
import StatsPanel from '../StatsPanel/StatsPanel';
import './PizzaCentral.scss';

const PizzaCentral = () => {
  const [currentTurn, setCurrentTurn] = useState(null);
  const [passDay, setPassDay] = useState(null);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [pizzaStage, setPizzaStage] = useState(1);

  useEffect(() => {
    const updateTurnInfo = () => {
      const turn = getCurrentTurn();
      const day = getPassDay(getTodayLocal());
      const progress = (day / 30) * 100;
      
      // Determine pizza stage based on progress
      let stage = 1;
      if (progress > 80) stage = 5;
      else if (progress > 60) stage = 4;
      else if (progress > 40) stage = 3;
      else if (progress > 20) stage = 2;
      
      setCurrentTurn(turn);
      setPassDay(day);
      setProgressPercentage(progress);
      setPizzaStage(stage);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateTurnInfo();
    checkMobile();
    
    // Update every minute to handle date changes
    const interval = setInterval(updateTurnInfo, 60000);
    
    // Listen for window resize
    window.addEventListener('resize', checkMobile);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="pizza-central-mobile">
        <div className="mobile-turn-indicator">
          <span className="turn-text">{currentTurn}'s Turn</span>
        </div>
        
        <div className="center-section">
          <div className="pizza-slice-container">
            <div className="pizza-slice">
              <img 
                src={`/sprites/pizza-slice-stage-${pizzaStage}.png`}
                alt={`Pizza slice stage ${pizzaStage}`}
                className="pizza-sprite"
              />
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
      </div>
    );
  }

  return (
    <div className="pizza-central-layout">
      <div className="left-circle">
        <div className={`person-circle archie ${currentTurn === 'Archie' ? 'active' : ''}`}>
          <span className="avatar-emoji">🐢</span>
          <span className="person-name">Archie</span>
          {currentTurn === 'Archie' && (
            <>
              <img src="/sprites/ninja-star-decoration.png" alt="Ninja Star" className="ninja-star" />
              <span className="turn-indicator">Your turn to get FREE PIZZA!</span>
            </>
          )}
        </div>
      </div>
      
      <div className="center-section">
        <div className="pizza-slice-container">
          <div className="pizza-slice">
            <img 
              src={`/sprites/pizza-slice-stage-${pizzaStage}.png`}
              alt={`Pizza slice stage ${pizzaStage}`}
              className="pizza-sprite"
            />
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
          {currentTurn === 'Charles' && (
            <>
              <img src="/sprites/ninja-star-decoration.png" alt="Ninja Star" className="ninja-star" />
              <span className="turn-indicator">Your turn to get FREE PIZZA!</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PizzaCentral; 