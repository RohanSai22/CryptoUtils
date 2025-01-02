/**
 * Convert cryptocurrency amount to fiat currency.
 * @param {number} cryptoAmount - The amount of cryptocurrency.
 * @param {number} pricePerUnit - The price of one unit of the cryptocurrency in fiat.
 * @returns {number} Equivalent fiat value.
 */
function convertToFiat(cryptoAmount, pricePerUnit) {
    return cryptoAmount * pricePerUnit;
  }
  
  /**
   * Calculate percentage change between two prices.
   * @param {number} oldPrice - The initial price.
   * @param {number} newPrice - The current price.
   * @returns {number} Percentage change.
   */
  function calculatePercentageChange(oldPrice, newPrice) {
    return ((newPrice - oldPrice) / oldPrice) * 100;
  }
  
  module.exports = {
    convertToFiat,
    calculatePercentageChange,
  };
  