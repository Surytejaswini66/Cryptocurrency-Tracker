// Write your JS code here
import './index.css';

const CryptocurrencyItem = ({ crypto }) => (
  <li className="cryptocurrency-item">
    <img
      src={crypto.currency_logo}
      alt={crypto.currency_name}
      className="cryptocurrency-logo"
    />
    <p className="cryptocurrency-name">{crypto.currency_name}</p>
    <p className="cryptocurrency-usd-value">{crypto.usd_value} USD</p>
    <p className="cryptocurrency-euro-value">{crypto.euro_value} EUR</p>
  </li>
);

export default CryptocurrencyItem;
