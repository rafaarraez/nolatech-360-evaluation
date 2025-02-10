import express from "express";
import { getEmployees, createEmployee, getEmployeeStats } from "../controllers/employee.controller";
import { verifyToken } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/role.middleware";

const router = express.Router();

router.get("/", verifyToken, authorizeRoles(["Admin", "Manager"]), getEmployees);
router.post("/", verifyToken, authorizeRoles(["Admin"]), createEmployee);
router.get("/:id/stats", verifyToken, authorizeRoles(["Admin", "Manager"]), getEmployeeStats);

export default router;
