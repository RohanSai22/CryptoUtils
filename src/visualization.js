const ChartJSNodeCanvas = require("chartjs-node-canvas");

/**
 * Generate a pie chart for portfolio distribution using Chart.js.
 * @param {Array<string>} labels - Labels for the chart (e.g., crypto names).
 * @param {Array<number>} data - Data points for the chart (e.g., portfolio values).
 */
async function generatePieChart(labels, data) {
  const chartJSNodeCanvas = new ChartJSNodeCanvas({ width: 800, height: 600 });

  const configuration = {
    type: "pie",
    data: {
      labels,
      datasets: [
        {
          label: "Portfolio Distribution",
          data,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  return await chartJSNodeCanvas.renderToBuffer(configuration);
}

module.exports = generatePieChart;
