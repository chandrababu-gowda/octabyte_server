import { db } from "../db.js";
import YahooFinance from "yahoo-finance2";

const yF = new YahooFinance();

// Get the stock.
async function getStockController(req, res) {
  const { stock } = req.body;
  const result = await yF.quoteSummary(stock);

  const data = {
    currentMarketPrice: result.price.regularMarketPrice,
    symbol: result.price.symbol,
    name: result.price.longName,
    exchangeName: result.price.exchangeName,
  };

  res.status(200).json({ success: true, data });
}

// Purchase the stock.
function purchaseController(req, res) {
  const { symbol, name, price, quantity, exchangeName } = req.body;
  const data = { name, price, quantity, exchangeName };
  db.set(symbol, data);
  res.status(201).json({ success: true, message: "Stock purchased" });
}

export { getStockController, purchaseController };
