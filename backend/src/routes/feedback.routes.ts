import express from "express";
import { createFeedback } from "../controllers/feedback.controller";
import { verifyToken } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", verifyToken, createFeedback);

export default router;
