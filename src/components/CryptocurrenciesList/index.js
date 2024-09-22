// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem';
import './index.css';

const CryptocurrenciesList = ({ cryptocurrencies }) => (
  <ul className="cryptocurrencies-list">
    {cryptocurrencies.map(crypto => (
      <CryptocurrencyItem key={crypto.id} crypto={crypto} />
    ))}
  </ul>
);

export default CryptocurrenciesList;
