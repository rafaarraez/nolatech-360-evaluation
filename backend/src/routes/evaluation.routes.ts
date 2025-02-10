import express from "express";
import { createEvaluation, getEvaluation, updateEvaluation, getEvaluationsByEmployee } from "../controllers/evaluation.controller";
import { verifyToken } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/role.middleware";

const router = express.Router();

router.post("/", verifyToken, authorizeRoles(["Admin", "Manager"]), createEvaluation);
router.get("/:id", verifyToken, getEvaluation);
router.put("/:id", verifyToken, authorizeRoles(["Admin", "Manager"]), updateEvaluation);
router.get("/employee/:id", verifyToken, getEvaluationsByEmployee);

export default router;
