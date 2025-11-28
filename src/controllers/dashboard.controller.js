import { db } from "../db.js";
import YahooFinance from "yahoo-finance2";

const yF = new YahooFinance();

// Send all the details in the db
async function getDashboardController(req, res) {
  const stocks = [];
  for (const [symbol, data] of db) {
    const yFData = await yF.quoteSummary(symbol);

    const stock = {
      symbol,
      name: data.name,
      purchasePrice: data.price,
      quantity: data.quantity,
      exchangeName: data.exchangeName,
      currentMarketPrice: yFData.price.regularMarketPrice,
      peRatio: yFData.summaryDetail.trailingPE,
      latestEarning:
        yFData.price.regularMarketPrice / yFData.summaryDetail.trailingPE,
    };

    stocks.push(stock);
  }

  res.status(200).json({ success: true, data: stocks });
}

// Update the current market price
async function updateDashboardData(req, res) {
  const stocks = [];
  for (const [symbol, _] of db) {
    const yFData = await yF.quoteSummary(symbol);

    const stock = {
      symbol,
      currentMarketPrice: yFData.price.regularMarketPrice,
    };

    stocks.push(stock);
  }

  res.status(200).json({ success: true, data: stocks });
}

export { getDashboardController, updateDashboardData };
