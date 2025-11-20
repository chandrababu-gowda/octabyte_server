import { Router } from "express";
import {
  getStockController,
  purchaseController,
} from "../controllers/purchase.controller.js";

const router = Router();

router.route("/").get(getStockController).post(purchaseController);

export default router;
