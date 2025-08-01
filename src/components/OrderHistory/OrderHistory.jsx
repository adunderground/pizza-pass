import React, { useState, useEffect } from 'react';
import { getSortedOrders, getOrdersByPerson } from '../../utils/dataLoader';
import { processPizzaOrder } from '../../utils/pizzaUtils';
import './OrderHistory.scss';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('all');
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    const loadOrders = () => {
      const sortedOrders = getSortedOrders();
      const processedOrders = sortedOrders.map(processPizzaOrder);
      setOrders(processedOrders);
    };

    loadOrders();
  }, []);

  const getFilteredOrders = () => {
    if (filter === 'all') return orders;
    if (filter === 'archie') return getOrdersByPerson('Archie');
    if (filter === 'charles') return getOrdersByPerson('Charles');
    return orders;
  };

  const getAvatar = (person) => {
    return person === 'Archie' ? '🐢' : '🥷';
  };

  const formatLocation = (location) => {
    // Remove zip codes (5-digit numbers at the end of addresses)
    return location.replace(/\s+\d{5}(-\d{4})?$/, '');
  };

  const toggleExpanded = (orderNumber) => {
    setExpandedOrder(expandedOrder === orderNumber ? null : orderNumber);
  };

  const filteredOrders = getFilteredOrders();

  return (
    <div className="order-history">
      <div className="container">
        <div className="history-header">
          <h2 className="comic-header">Order History</h2>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              🍕 All Orders
            </button>
            <button 
              className={`filter-btn ${filter === 'archie' ? 'active' : ''}`}
              onClick={() => setFilter('archie')}
            >
              🐢 Archie
            </button>
            <button 
              className={`filter-btn ${filter === 'charles' ? 'active' : ''}`}
              onClick={() => setFilter('charles')}
            >
              🥷 Charles
            </button>
          </div>
        </div>

        {filteredOrders.length === 0 ? (
          <div className="no-orders">
            <div className="no-orders-content">
              <div className="no-orders-icon">🍕</div>
              <h3>No Orders Found</h3>
              <p>No pizza orders match the current filter.</p>
            </div>
          </div>
        ) : (
          <div className="orders-grid">
            {filteredOrders.map((order) => (
              <div 
                key={order.order_number} 
                className={`order-card hover-glow ${order.actualPerson?.toLowerCase()}`}
                onClick={() => toggleExpanded(order.order_number)}
              >
                <div className="order-header">
                  <div className="person-avatar">
                    <span className="avatar-emoji">{getAvatar(order.actualPerson)}</span>
                  </div>
                  <div className="order-info">
                    <h3 className="person-name">{order.actualPerson}</h3>
                    <p className="order-date">{order.order_date}</p>
                  </div>
                </div>
                
                <div className="pizza-info">
                  <h4 className="pizza-name">{order.pizza_name}</h4>
                  <p className="pizza-location">{formatLocation(order.location)}</p>
                </div>

                {expandedOrder === order.order_number && (
                  <div className="order-details">
                    <div className="ingredients-section">
                      <h5>Ingredients:</h5>
                      <ul className="ingredients-list">
                        {order.ingredients.split(', ').map((ingredient, index) => (
                          <li key={index}>{ingredient.trim()}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="meta-info">
                      <span>Order #: {order.order_number}</span>
                      <span>Day {order.passDay} of 30</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory; 