const axios = require("axios");

/**
 * Fetch live prices for multiple cryptocurrencies using CoinGecko API.
 * @param {Array<string>} cryptoIds - Array of cryptocurrency IDs (e.g., ['bitcoin', 'ethereum']).
 * @param {string} fiatCurrency - Fiat currency to convert to (default: 'usd').
 * @returns {Promise<object>} Object containing live prices for the requested cryptocurrencies.
 */
async function fetchLivePrices(cryptoIds = ["bitcoin", "ethereum"], fiatCurrency = "usd") {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoIds.join(",")}&vs_currencies=${fiatCurrency}`
  );
  return response.data;
}

module.exports = fetchLivePrices;
