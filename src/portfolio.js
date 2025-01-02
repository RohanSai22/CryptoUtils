const fetchLivePrices = require("./livePrices");

/**
 * Analyze a crypto portfolio and calculate total value in a specified fiat currency.
 * @param {Array<object>} portfolio - Array of assets with their amounts and IDs (e.g., [{ id: 'bitcoin', amount: 0.5 }]).
 * @param {string} fiatCurrency - Fiat currency to calculate the total value in (default: 'usd').
 * @returns {Promise<number>} Total portfolio value in the specified fiat currency.
 */
async function analyzePortfolio(portfolio, fiatCurrency = "usd") {
  const cryptoIds = portfolio.map((asset) => asset.id);
  const prices = await fetchLivePrices(cryptoIds, fiatCurrency);

  return portfolio.reduce((total, asset) => {
    const pricePerUnit = prices[asset.id][fiatCurrency];
    return total + asset.amount * pricePerUnit;
  }, 0);
}

module.exports = analyzePortfolio;
