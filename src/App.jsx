import React, { useState, useEffect } from 'react';
import { Header, OrderHistory } from './components';
import PizzaCentral from './components/PizzaCentral/PizzaCentral';
import './styles/main.scss';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="pizza-app-layout">
      <div className="app-container">
        {!isMobile && <Header />}
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
