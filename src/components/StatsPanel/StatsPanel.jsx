import React, { useState, useEffect } from 'react';
import { 
  calculateCostPerPizza, 
  calculateTotalSavings, 
  formatCurrency, 
  getPassProgress,
  TOTAL_PASS_COST,
  REGULAR_PIZZA_COST
} from '../../utils/pizzaUtils';
import { getTotalPizzasOrdered } from '../../utils/dataLoader';
import './StatsPanel.scss';

const StatsPanel = () => {
  const [pizzasOrdered, setPizzasOrdered] = useState(0);
  const [costPerPizza, setCostPerPizza] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [progress, setProgress] = useState(0);
  const [animatedPizzas, setAnimatedPizzas] = useState(0);
  const [animatedSavings, setAnimatedSavings] = useState(0);

  useEffect(() => {
    const totalPizzas = getTotalPizzasOrdered();
    const costPer = calculateCostPerPizza(totalPizzas);
    const savings = calculateTotalSavings(totalPizzas);
    const passProgress = getPassProgress();

    setPizzasOrdered(totalPizzas);
    setCostPerPizza(costPer);
    setTotalSavings(savings);
    setProgress(passProgress);

    // Animate counters
    const animateCounters = () => {
      let currentPizzas = 0;
      let currentSavings = 0;
      const targetPizzas = totalPizzas;
      const targetSavings = savings;
      const duration = 1000; // 1 second
      const interval = 16; // 60fps
      const steps = duration / interval;
      const pizzasStep = targetPizzas / steps;
      const savingsStep = targetSavings / steps;

      const timer = setInterval(() => {
        currentPizzas = Math.min(currentPizzas + pizzasStep, targetPizzas);
        currentSavings = Math.min(currentSavings + savingsStep, targetSavings);
        
        setAnimatedPizzas(Math.round(currentPizzas));
        setAnimatedSavings(Math.round(currentSavings * 100) / 100);
        
        if (currentPizzas >= targetPizzas && currentSavings >= targetSavings) {
          clearInterval(timer);
        }
      }, interval);
    };

    animateCounters();
  }, []);

  return (
    <div className="stats-panel">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card pizzas-ordered">
            <div className="stat-icon">🍕</div>
            <div className="stat-content">
              <h3 className="stat-value">{animatedPizzas}</h3>
              <p className="stat-label">Pizzas Ordered</p>
              <p className="stat-subtitle">of 30 total</p>
            </div>
          </div>

          <div className="stat-card cost-per-pizza">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <h3 className="stat-value">{formatCurrency(costPerPizza)}</h3>
              <p className="stat-label">Cost Per Pizza</p>
              <p className="stat-subtitle">vs {formatCurrency(REGULAR_PIZZA_COST)} regular</p>
            </div>
          </div>

          <div className="stat-card total-savings">
            <div className="stat-icon">💸</div>
            <div className="stat-content">
              <h3 className="stat-value">{formatCurrency(animatedSavings)}</h3>
              <p className="stat-label">Total Savings</p>
              <p className="stat-subtitle">vs regular pricing</p>
            </div>
          </div>

          <div className="stat-card pass-progress">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3 className="stat-value">{Math.round(progress)}%</h3>
              <p className="stat-label">Pass Progress</p>
              <p className="stat-subtitle">through 30-day period</p>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-header">
            <h3>Pass Progress</h3>
            <span className="progress-text">{Math.round(progress)}% Complete</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-details">
            <span>Total Cost: {formatCurrency(TOTAL_PASS_COST)}</span>
            <span>Regular Cost: {formatCurrency(REGULAR_PIZZA_COST * 30)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel; 