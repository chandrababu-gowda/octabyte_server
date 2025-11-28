import { Router } from "express";
import { sellStockController } from "../controllers/sell.controller.js";

const router = Router();

router.route("/").post(sellStockController);

export default router;
