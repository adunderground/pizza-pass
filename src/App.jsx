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
          <div className="footer-content">
            <p>
              Cowabunga'd with 🍕 by{' '}
              <a 
                href="https://github.com/adunderground" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                ad_underground
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
