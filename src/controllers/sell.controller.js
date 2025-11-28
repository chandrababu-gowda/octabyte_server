import { db } from "../db.js";

function sellStockController(req, res) {
  const { symbol } = req.body;
  db.delete(symbol);
  res.status(201).json({ success: true, message: "Stock sold" });
}

export { sellStockController };
