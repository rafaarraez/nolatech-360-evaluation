import express from "express";
import { getEmployees, createEmployee } from "../controllers/employee.controller";
import { verifyToken } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/role.middleware";

const router = express.Router();

router.get("/", verifyToken, authorizeRoles(["Admin", "Manager"]), getEmployees);
router.post("/", verifyToken, authorizeRoles(["Admin"]), createEmployee);

export default router;
