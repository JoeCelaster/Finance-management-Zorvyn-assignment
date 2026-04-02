import express from "express";
import { getSummary } from "../controllers/dashboardController.js";
import { auth } from "../middleware/auth.js";
import { allowRoles } from "../middleware/roleCheck.js";

const router = express.Router();

/* ===== DASHBOARD ===== */

// Viewer + Analyst + Admin → all can view dashboard
router.get("/", auth, allowRoles("viewer", "analyst", "admin"), getSummary);

export default router;