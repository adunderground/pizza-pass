import pizzaData from '../data/pizza-data.json';
import { processPizzaOrder } from './pizzaUtils';

/**
 * Load and process all pizza orders
 */
export const loadPizzaOrders = () => {
  try {
    return pizzaData.orders.map(processPizzaOrder);
  } catch (error) {
    console.error('Error loading pizza orders:', error);
    return [];
  }
};

/**
 * Get orders sorted by date (newest first)
 */
export const getSortedOrders = () => {
  const orders = loadPizzaOrders();
  return orders.sort((a, b) => {
    if (!a.parsedDate || !b.parsedDate) return 0;
    return b.parsedDate - a.parsedDate;
  });
};

/**
 * Get orders by person
 */
export const getOrdersByPerson = (person) => {
  const orders = loadPizzaOrders();
  return orders.filter(order => order.actualPerson === person);
};

/**
 * Get total pizzas ordered
 */
export const getTotalPizzasOrdered = () => {
  const orders = loadPizzaOrders();
  return orders.length;
};

/**
 * Get orders for a specific date
 */
export const getOrdersForDate = (date) => {
  const orders = loadPizzaOrders();
  const targetDate = new Date(date);
  
  return orders.filter(order => {
    if (!order.parsedDate) return false;
    return order.parsedDate.toDateString() === targetDate.toDateString();
  });
};

/**
 * Get pass statistics
 */
export const getPassStats = () => {
  const orders = loadPizzaOrders();
  const totalPizzas = orders.length;
  const archieOrders = orders.filter(order => order.actualPerson === 'Archie').length;
  const charlesOrders = orders.filter(order => order.actualPerson === 'Charles').length;
  
  return {
    totalPizzas,
    archieOrders,
    charlesOrders,
    orders
  };
}; 