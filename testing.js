// Import the CryptoUtils package
const CryptoUtils = require("cryptoutils");

// Test live cryptocurrency prices
async function testLivePrices() {
  console.log("Fetching live prices...");
  const prices = await CryptoUtils.fetchLivePrices(["bitcoin", "ethereum"], "usd");
  console.log("Live Prices:", prices);
}

// Test fiat exchange rates
async function testFiatExchangeRates() {
  console.log("Fetching fiat exchange rates...");
  const rate = await CryptoUtils.fetchFiatExchangeRate("USD", "EUR");
  console.log(`Exchange Rate (USD to EUR): ${rate}`);
}

// Test portfolio analysis
async function testPortfolioAnalysis() {
  console.log("Analyzing portfolio...");
  const portfolio = [
    { id: "bitcoin", amount: 0.5 },
    { id: "ethereum", amount: 1 },
  ];
  const totalValue = await CryptoUtils.analyzePortfolio(portfolio, "usd");
  console.log("Total Portfolio Value (USD):", totalValue);
}

// Test historical price fetching
async function testHistoricalPrices() {
  console.log("Fetching historical price...");
  const price = await CryptoUtils.fetchHistoricalPrice("bitcoin", "01-01-2022");
  console.log("Historical Price (Bitcoin on 01-01-2022):", price);
}

// Run all tests
async function runTests() {
  try {
    await testLivePrices();
    await testFiatExchangeRates();
    await testPortfolioAnalysis();
    await testHistoricalPrices();
    console.log("All tests completed successfully!");
  } catch (error) {
    console.error("An error occurred during testing:", error.message);
  }
}

runTests();
