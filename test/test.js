const basic = require("../src/basic");
const fetchLivePrices = require("../src/livePrices");
const fetchFiatExchangeRate = require("../src/fiatExchange");
const analyzePortfolio = require("../src/portfolio");

describe("CryptoUtils Library Tests", () => {
  // Test basic calculations
  test("Convert cryptocurrency to fiat", () => {
    expect(basic.convertToFiat(2, 50000)).toBe(100000);
  });

  test("Calculate percentage change", () => {
    expect(basic.calculatePercentageChange(1000, 1500)).toBe(50);
  });

  // Test live prices fetching
  test("Fetch live prices for cryptocurrencies", async () => {
    const prices = await fetchLivePrices(["bitcoin", "ethereum"], "usd");
    expect(prices).toHaveProperty("bitcoin");
    expect(prices).toHaveProperty("ethereum");
    expect(prices.bitcoin).toHaveProperty("usd");
  });

  // Test fiat exchange rates
  test("Fetch fiat exchange rate", async () => {
    const rate = await fetchFiatExchangeRate("USD", "EUR");
    expect(typeof rate).toBe("number");
    expect(rate).toBeGreaterThan(0);
  });

  // Test portfolio analysis
  test("Analyze portfolio value", async () => {
    const portfolio = [
      { id: "bitcoin", amount: 0.5 },
      { id: "ethereum", amount: 1 },
    ];
    const totalValue = await analyzePortfolio(portfolio, "usd");
    expect(typeof totalValue).toBe("number");
    expect(totalValue).toBeGreaterThan(0);
  });
});
const basic = require("../src/basic");
const fetchLivePrices = require("../src/livePrices");
const fetchFiatExchangeRate = require("../src/fiatExchange");
const analyzePortfolio = require("../src/portfolio");

describe("CryptoUtils Library Tests", () => {
  // Test basic calculations
  test("Convert cryptocurrency to fiat", () => {
    expect(basic.convertToFiat(2, 50000)).toBe(100000);
  });

  test("Calculate percentage change", () => {
    expect(basic.calculatePercentageChange(1000, 1500)).toBe(50);
  });

  // Test live prices fetching
  test("Fetch live prices for cryptocurrencies", async () => {
    const prices = await fetchLivePrices(["bitcoin", "ethereum"], "usd");
    expect(prices).toHaveProperty("bitcoin");
    expect(prices).toHaveProperty("ethereum");
    expect(prices.bitcoin).toHaveProperty("usd");
  });

  // Test fiat exchange rates
  test("Fetch fiat exchange rate", async () => {
    const rate = await fetchFiatExchangeRate("USD", "EUR");
    expect(typeof rate).toBe("number");
    expect(rate).toBeGreaterThan(0);
  });

  // Test portfolio analysis
  test("Analyze portfolio value", async () => {
    const portfolio = [
      { id: "bitcoin", amount: 0.5 },
      { id: "ethereum", amount: 1 },
    ];
    const totalValue = await analyzePortfolio(portfolio, "usd");
    expect(typeof totalValue).toBe("number");
    expect(totalValue).toBeGreaterThan(0);
  });
});
