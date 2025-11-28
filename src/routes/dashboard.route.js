import { Router } from "express";
import {
  getDashboardController,
  updateDashboardData,
} from "../controllers/dashboard.controller.js";

const router = Router();

router.route("/").get(getDashboardController);
router.route("/update").get(updateDashboardData);

export default router;
