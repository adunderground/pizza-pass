import React, { useState, useEffect } from 'react';
import { getCurrentTurn, getPassDay, getTodayLocal } from '../../utils/pizzaUtils';
import StatsPanel from '../StatsPanel/StatsPanel';
import './PizzaCentral.scss';

const PizzaCentral = () => {
  const [currentTurn, setCurrentTurn] = useState(null);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [pizzaStage, setPizzaStage] = useState(1);
  const [passDay, setPassDay] = useState(null);

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
      setProgressPercentage(progress);
      setPizzaStage(stage);
      setPassDay(day);
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
      <div className={`pizza-central-mobile stage-${pizzaStage}`}>
        {/* Title */}
        <div className="mobile-title">
          <h1 className="hero-text">&Pizza Pass</h1>
        </div>
        
        {/* Day */}
        <div className="mobile-day">
          <span className="day-text">Day {passDay} of 30</span>
        </div>

        {/* Current avatar between day and turn + divider pizza slice */}
        <div className="mobile-current">
          <div className={`mobile-current-avatar ${currentTurn?.toLowerCase()}`}>
            <div className="avatar-frame">
              {currentTurn === 'Archie' ? (
                <img src="/archie_c.jpg" alt="Archie" className="avatar-image" loading="eager" width="80" height="80" />
              ) : (
                <img src="/charles_c.jpg" alt="Charles" className="avatar-image" loading="eager" width="80" height="80" />
              )}
            </div>
            <span className="person-name">{currentTurn}</span>
          </div>
        </div>

        {/* Turn Indicator */}
        <div className="mobile-turn-indicator">
          <span className="turn-text">{currentTurn}'s Turn</span>
        </div>
        
        {/* Pizza Stats */}
        <div className="mobile-stats">
          <StatsPanel />
        </div>
        
        {/* Small Avatars */}
        <div className="mobile-avatars">
          <div className={`mobile-avatar archie ${currentTurn === 'Archie' ? 'active' : ''}`}>
            <div className="avatar-frame">
              <img src="/archie_c.jpg" alt="Archie" className="avatar-image" loading="lazy" width="80" height="80" />
            </div>
            <span className="person-name">Archie</span>
            {currentTurn === 'Archie' && (
              <img src="/sprites/ninja-star-decoration.png" alt="Ninja Star" className="ninja-star" />
            )}
          </div>
          
          <div className={`mobile-avatar charles ${currentTurn === 'Charles' ? 'active' : ''}`}>
            <div className="avatar-frame">
              <img src="/charles_c.jpg" alt="Charles" className="avatar-image" loading="lazy" width="80" height="80" />
            </div>
            <span className="person-name">Charles</span>
            {currentTurn === 'Charles' && (
              <img src="/sprites/ninja-star-decoration.png" alt="Ninja Star" className="ninja-star" />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pizza-central-layout">
      <div className="left-circle">
        <div className={`person-circle archie ${currentTurn === 'Archie' ? 'active' : ''}`}>
          <div className="avatar-frame">
            <img src="/archie_c.jpg" alt="Archie" className="avatar-image" loading="eager" width="200" height="200" />
          </div>
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
        <div className="stats-group">
          <StatsPanel />
        </div>
      </div>
      
      <div className="right-circle">
        <div className={`person-circle charles ${currentTurn === 'Charles' ? 'active' : ''}`}>
          <div className="avatar-frame">
            <img src="/charles_c.jpg" alt="Charles" className="avatar-image" loading="eager" width="200" height="200" />
          </div>
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