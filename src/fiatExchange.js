const axios = require("axios");

/**
 * Fetch real-time exchange rates between two fiat currencies using ExchangeRate-API.
 * @param {string} baseCurrency - The base currency (e.g., 'USD').
 * @param {string} targetCurrency - The target currency (e.g., 'EUR').
 * @returns {Promise<number>} Exchange rate from baseCurrency to targetCurrency.
 */
async function fetchFiatExchangeRate(baseCurrency = "USD", targetCurrency = "EUR") {
  const response = await axios.get(
    `https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${baseCurrency}`
  );
  return response.data.conversion_rates[targetCurrency];
}

module.exports = fetchFiatExchangeRate;
