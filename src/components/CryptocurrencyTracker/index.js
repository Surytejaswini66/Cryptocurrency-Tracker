// Write your code here
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import CryptocurrenciesList from '../CryptocurrenciesList';
import './index.css';

const CryptocurrencyTracker = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      const response = await fetch('https://apis.ccbp.in/crypto-currency-converter');
      const data = await response.json();
      setCryptocurrencies(data);
      setIsLoading(false);
    };
    fetchCryptocurrencies();
  }, []);

  return (
    <div className="cryptocurrency-tracker-container">
      <h1 className="title">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="cryptocurrency-image"
      />
      {isLoading ? (
        <div data-testid="loader">
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        </div>
      ) : (
        <CryptocurrenciesList cryptocurrencies={cryptocurrencies} />
      )}
    </div>
  );
};

export default CryptocurrencyTracker;
