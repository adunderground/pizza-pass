import React from 'react';
import Header from './components/Header/Header';
import TurnIndicator from './components/TurnIndicator/TurnIndicator';
import StatsPanel from './components/StatsPanel/StatsPanel';
import OrderHistory from './components/OrderHistory/OrderHistory';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <TurnIndicator />
        <StatsPanel />
        <OrderHistory />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 &PizzaPass • Built with ❤️ and 🍕</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
