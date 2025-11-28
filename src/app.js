import express from "express";
import cors from "cors";
import purchaseRouter from "./routes/purchase.route.js";
import dashboardRouter from "./routes/dashboard.route.js";
import sellRouter from "./routes/sell.route.js";

const app = express();

const corsOption = {
  origin: "*",
};

// CORS middleware
app.use(cors());
app.use(express.json({ limit: "16kb" }));

try {
  app.listen(4000);
  console.log(`SUCCESS: Server started on http://localhost:4000`);
} catch (error) {
  console.log(`FAILURE: Unable to start the server`);
  console.log(error);
}

app.use("/api/dashboard", dashboardRouter);
app.use("/api/purchase", purchaseRouter);
app.use("/api/sell", sellRouter);
