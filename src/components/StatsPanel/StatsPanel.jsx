import React, { useState, useEffect } from 'react';
import { getPassProgress, calculateCostPerPizza, calculateTotalSavings, getTotalPizzasOrdered } from '../../utils/pizzaUtils';
import { getSortedOrders } from '../../utils/dataLoader';
import './StatsPanel.scss';

const StatsPanel = () => {
  const [pizzasOrdered, setPizzasOrdered] = useState(0);
  const [costPerPizza, setCostPerPizza] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [passProgress, setPassProgress] = useState(0);

  useEffect(() => {
    const updateStats = () => {
      const orders = getSortedOrders();
      const totalPizzas = getTotalPizzasOrdered(orders);
      const costPer = calculateCostPerPizza(totalPizzas);
      const savings = calculateTotalSavings(totalPizzas);
      const progress = getPassProgress();

      setPizzasOrdered(totalPizzas);
      setCostPerPizza(costPer);
      setTotalSavings(savings);
      setPassProgress(progress);
    };

    updateStats();
  }, []);

  return (
    <div className="stats-panel">
      <div className="container">
        <div className="stats-header">
          <h2 className="comic-header">Pizza Stats</h2>
        </div>
        
        <div className="stats-grid grid grid-cols-2">
          <div className="stat-card hover-glow">
            <div className="stat-icon">🍕</div>
            <div className="stat-content">
              <div className="stat-value retro-number">{pizzasOrdered}</div>
              <div className="stat-label">Pizzas Ordered</div>
            </div>
          </div>
          
          <div className="stat-card hover-glow">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <div className="stat-value retro-number">${costPerPizza.toFixed(2)}</div>
              <div className="stat-label">Cost Per Pizza</div>
            </div>
          </div>
          
          <div className="stat-card hover-glow">
            <div className="stat-icon">💸</div>
            <div className="stat-content">
              <div className="stat-value retro-number">${totalSavings.toFixed(2)}</div>
              <div className="stat-label">Total Savings</div>
            </div>
          </div>
          
          <div className="stat-card hover-glow">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <div className="stat-value retro-number">{Math.round(passProgress)}%</div>
              <div className="stat-label">Pass Progress</div>
            </div>
          </div>
        </div>
        
        <div className="progress-section">
          <div className="progress-header">
            <h3 className="comic-header">Pass Progress</h3>
            <span className="progress-text">{pizzasOrdered} of 30 pizzas</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${passProgress}%` }}
            ></div>
          </div>
          <div className="progress-details">
            <span>Day {Math.ceil(passProgress * 0.3)} of 30</span>
            <span>{30 - Math.ceil(passProgress * 0.3)} days remaining</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel; 