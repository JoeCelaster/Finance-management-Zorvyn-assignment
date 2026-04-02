import express from "express";
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} from "../controllers/recordController.js";

import { auth } from "../middleware/auth.js";
import { allowRoles } from "../middleware/roleCheck.js";

const router = express.Router();

/* ===== RECORD ROUTES ===== */

// Admin → create/update/delete
router.post("/", auth, allowRoles("admin"), createRecord);
router.put("/:id", auth, allowRoles("admin"), updateRecord);
router.delete("/:id", auth, allowRoles("admin"), deleteRecord);

// Analyst + Admin → read
router.get("/", auth, allowRoles("analyst", "admin"), getRecords);

export default router;