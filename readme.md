
# CryptoUtils

CryptoUtils is a comprehensive JavaScript library for cryptocurrency calculations, live prices, fiat exchange rates, portfolio management, and visualization tools.

## Features

- Fetch live cryptocurrency prices for all major cryptocurrencies.
- Convert cryptocurrency values to any fiat currency.
- Fetch real-time fiat exchange rates.
- Analyze and track crypto portfolios with live updates.
- Generate interactive charts for portfolio distribution.
- Fetch historical price data for cryptocurrencies.
- Estimate gas fees for Ethereum transactions.

## Installation

Install CryptoUtils via npm:

```
npm install cryptoutils
```

## Usage

### Importing the Library

```
const CryptoUtils = require("cryptoutils");
```

### Fetch Live Prices

```
CryptoUtils.fetchLivePrices(["bitcoin", "ethereum"], "usd").then(console.log);
```

### Convert Cryptocurrency to Fiat

```
console.log(CryptoUtils.convertToFiat(0.5, 20000)); // Output: $10,000
```

### Analyze Portfolio

```
const portfolio = [
  { id: "bitcoin", amount: 0.5 },
  { id: "ethereum", amount: 1 },
];
CryptoUtils.analyzePortfolio(portfolio).then(console.log); // Output: Total value in USD
```

### Generate a Pie Chart

```
const labels = ["Bitcoin", "Ethereum"];
const data = [10000, 1500];
CryptoUtils.generatePieChart(labels, data).then((buffer) => {
  require("fs").writeFileSync("portfolio-chart.png", buffer);
});
```

## Testing

Run tests using Jest:

```
npm test
```


