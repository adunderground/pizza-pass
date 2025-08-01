import { parse, differenceInDays, format, startOfDay } from 'date-fns';

// Constants
export const PIZZA_PASS_START_DATE = new Date('2025-07-21');
export const PIZZA_PASS_END_DATE = new Date('2025-08-21');
export const TOTAL_PASS_COST = 39.99;
export const REGULAR_PIZZA_COST = 12.00;
export const TOTAL_PIZZAS_IN_PASS = 30;

// Location mappings
export const LOCATIONS = {
  ARCHIE: 'Brookland, 666 Monroe Street NE, Washington, DC 20017',
  CHARLES: 'Reston, 1826 Library Street, Reston, VA 20190'
};

/**
 * Parse date string like "July 31, 2025" to Date object
 */
export const parseOrderDate = (dateString) => {
  try {
    return parse(dateString, 'MMMM d, yyyy', new Date());
  } catch (error) {
    console.error('Error parsing date:', dateString, error);
    return null;
  }
};

/**
 * Get today's date in local timezone (start of day)
 */
export const getTodayLocal = () => {
  const now = new Date();
  return startOfDay(now);
};

/**
 * Calculate which day of the pass a given date is (1-30)
 */
export const getPassDay = (date) => {
  const daysSinceStart = differenceInDays(date, PIZZA_PASS_START_DATE) + 1;
  return Math.max(1, Math.min(daysSinceStart, TOTAL_PIZZAS_IN_PASS));
};

/**
 * Determine whose turn it is on a given date
 * @param {Date} date - The date to check
 * @returns {'Archie' | 'Charles'} - Whose turn it is
 */
export const getWhoseTurn = (date) => {
  const passDay = getPassDay(date);
  return passDay % 2 === 1 ? 'Archie' : 'Charles';
};

/**
 * Get whose turn it is today (using local date)
 */
export const getCurrentTurn = () => {
  const todayLocal = getTodayLocal();
  return getWhoseTurn(todayLocal);
};

/**
 * Identify person by location
 */
export const getPersonByLocation = (location) => {
  if (location.includes('Brookland')) {
    return 'Archie';
  } else if (location.includes('Reston')) {
    return 'Charles';
  }
  return null;
};

/**
 * Calculate cost per pizza based on number of pizzas ordered
 */
export const calculateCostPerPizza = (pizzasOrdered) => {
  if (pizzasOrdered === 0) return TOTAL_PASS_COST;
  return TOTAL_PASS_COST / pizzasOrdered;
};

/**
 * Calculate total savings vs regular pricing
 */
export const calculateTotalSavings = (pizzasOrdered) => {
  const regularCost = pizzasOrdered * REGULAR_PIZZA_COST;
  return regularCost - TOTAL_PASS_COST;
};

/**
 * Calculate days remaining in the pass
 */
export const getDaysRemaining = () => {
  const todayLocal = getTodayLocal();
  const daysSinceStart = differenceInDays(todayLocal, PIZZA_PASS_START_DATE) + 1;
  return Math.max(0, TOTAL_PIZZAS_IN_PASS - daysSinceStart);
};

/**
 * Check if the pass is still active
 */
export const isPassActive = () => {
  const todayLocal = getTodayLocal();
  return todayLocal >= PIZZA_PASS_START_DATE && todayLocal <= PIZZA_PASS_END_DATE;
};

/**
 * Format currency
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

/**
 * Format date for display
 */
export const formatDate = (date) => {
  return format(date, 'MMM d, yyyy');
};

/**
 * Process pizza order data and add derived fields
 */
export const processPizzaOrder = (order) => {
  const parsedDate = parseOrderDate(order.order_date);
  const passDay = parsedDate ? getPassDay(parsedDate) : null;
  const expectedPerson = parsedDate ? getWhoseTurn(parsedDate) : null;
  const actualPerson = getPersonByLocation(order.location);
  
  return {
    ...order,
    parsedDate,
    passDay,
    expectedPerson,
    actualPerson,
    isCorrectTurn: expectedPerson === actualPerson
  };
};

/**
 * Get pass progress percentage
 */
export const getPassProgress = () => {
  const todayLocal = getTodayLocal();
  const daysSinceStart = differenceInDays(todayLocal, PIZZA_PASS_START_DATE) + 1;
  return Math.min(100, Math.max(0, (daysSinceStart / TOTAL_PIZZAS_IN_PASS) * 100));
};

/**
 * Get total number of pizzas ordered from an array of orders
 */
export const getTotalPizzasOrdered = (orders = []) => {
  return orders.length;
}; 