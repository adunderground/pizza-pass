import React, { useState, useEffect } from 'react';
import { getSortedOrders } from '../../utils/dataLoader';
import { formatDate } from '../../utils/pizzaUtils';
import './OrderHistory.scss';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('all'); // all, archie, charles

  useEffect(() => {
    const sortedOrders = getSortedOrders();
    setOrders(sortedOrders);
  }, []);

  const filteredOrders = orders.filter(order => {
    if (filter === 'all') return true;
    return order.actualPerson === filter;
  });

  const getPersonIcon = (person) => {
    return person === 'Archie' ? '👨‍💻' : '👨‍💼';
  };

  const getPersonColor = (person) => {
    return person === 'Archie' ? 'archie' : 'charles';
  };

  const getTurnStatus = (order) => {
    if (!order.expectedPerson || !order.actualPerson) return 'unknown';
    return order.isCorrectTurn ? 'correct' : 'incorrect';
  };

  return (
    <div className="order-history">
      <div className="container">
        <div className="history-header">
          <h2>Order History</h2>
          <div className="filter-controls">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Orders
            </button>
            <button 
              className={`filter-btn ${filter === 'Archie' ? 'active' : ''}`}
              onClick={() => setFilter('Archie')}
            >
              Archie's Orders
            </button>
            <button 
              className={`filter-btn ${filter === 'Charles' ? 'active' : ''}`}
              onClick={() => setFilter('Charles')}
            >
              Charles's Orders
            </button>
          </div>
        </div>

        <div className="orders-timeline">
          {filteredOrders.length === 0 ? (
            <div className="no-orders">
              <p>No orders found for the selected filter.</p>
            </div>
          ) : (
            filteredOrders.map((order, index) => (
              <div 
                key={`${order.order_number}-${index}`} 
                className={`order-card ${getPersonColor(order.actualPerson)} ${getTurnStatus(order)}`}
              >
                <div className="order-header">
                  <div className="order-person">
                    <span className="person-icon">{getPersonIcon(order.actualPerson)}</span>
                    <div className="person-info">
                      <h4 className="person-name">{order.actualPerson}</h4>
                      <p className="order-date">{formatDate(order.parsedDate)}</p>
                    </div>
                  </div>
                  <div className="order-status">
                    <span className={`status-badge ${getTurnStatus(order)}`}>
                      {getTurnStatus(order) === 'correct' ? '✓ Correct Turn' : 
                       getTurnStatus(order) === 'incorrect' ? '⚠ Wrong Turn' : '? Unknown'}
                    </span>
                  </div>
                </div>

                <div className="order-details">
                  <div className="pizza-info">
                    <h5 className="pizza-name">{order.pizza_name}</h5>
                    <p className="pizza-ingredients">{order.ingredients}</p>
                  </div>
                  
                  <div className="order-meta">
                    <div className="meta-item">
                      <span className="meta-label">Order #:</span>
                      <span className="meta-value">{order.order_number}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Location:</span>
                      <span className="meta-value">
                        {order.location.includes('Brookland') ? 'Brookland, DC' : 'Reston, VA'}
                      </span>
                    </div>
                    {order.passDay && (
                      <div className="meta-item">
                        <span className="meta-label">Pass Day:</span>
                        <span className="meta-value">Day {order.passDay}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="history-summary">
          <div className="summary-stats">
            <div className="summary-item">
              <span className="summary-label">Total Orders:</span>
              <span className="summary-value">{orders.length}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Archie's Orders:</span>
              <span className="summary-value">{orders.filter(o => o.actualPerson === 'Archie').length}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Charles's Orders:</span>
              <span className="summary-value">{orders.filter(o => o.actualPerson === 'Charles').length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory; 