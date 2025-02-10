import express from "express";
import authRoutes from './auth.route';
import employeeRoutes from "./employee.routes";
import evaluationRoutes from "./evaluation.routes";
import feedbackRoutes from "./feedback.routes";

const router = express.Router();

router.use('/auth', authRoutes)
router.use("/employees", employeeRoutes);
router.use("/evaluations", evaluationRoutes);
router.use("/feedback", feedbackRoutes);

export default router;
