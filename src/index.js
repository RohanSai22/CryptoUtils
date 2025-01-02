const basic = require("./basic");
const fetchLivePrices = require("./livePrices");
const fetchFiatExchangeRate = require("./fiatExchange");
const analyzePortfolio = require("./portfolio");
const fetchHistoricalPrice = require("./historical");
const generatePieChart = require("./visualization");

module.exports = {
  ...basic,
  fetchLivePrices,
  fetchFiatExchangeRate,
  analyzePortfolio,
  fetchHistoricalPrice,
  generatePieChart,
};
