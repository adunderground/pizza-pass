import React from 'react';
import { Header, OrderHistory } from './components';
import PizzaCentral from './components/PizzaCentral/PizzaCentral';
import './styles/main.scss';

function App() {
  return (
    <div className="pizza-app-layout">
      <div className="app-container">
        <Header />
        <main className="main-content">
          <PizzaCentral />
          <OrderHistory />
        </main>
        <footer className="footer">
          <p>&PizzaPass 🍕</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
