import express from "express";
import cors from "cors";
import purchaseRouter from "./routes/purchase.route.js";
import dashboardRouter from "./routes/dashboard.route.js";

const app = express();

const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};

// CORS middleware
app.use(cors(corsOption));
app.use(express.json({ limit: "16kb" }));

try {
  app.listen(3000);
  console.log(`SUCCESS: Server started on http://localhost:3000`);
} catch (error) {
  console.log(`FAILURE: Unable to start the server`);
  console.log(error);
}

// app.use("/api/dashboard", dashboardRouter);
app.use("/api/purchase", purchaseRouter);
