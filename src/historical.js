const axios = require("axios");

/**
 * Fetch historical prices for a cryptocurrency from CoinGecko API on a specific date.
 * @param {string} cryptoId - Cryptocurrency ID (e.g., 'bitcoin').
 * @param {string} date - Date in 'DD-MM-YYYY' format.
 */
async function fetchHistoricalPrice(cryptoId, date) {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${cryptoId}/history?date=${date}`
  );
  
  return response.data.market_data.current_price.usd;
}

module.exports = fetchHistoricalPrice;
