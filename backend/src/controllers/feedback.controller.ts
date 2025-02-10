import { Request, Response } from "express";
import * as FeedbackService from "../services/feedback.service";

export const createFeedback = async (req: Request, res: Response) => {
    try {
        const feedback = await FeedbackService.createFeedback(req.body);
        res.status(201).json(feedback);
    } catch (error) {
        res.status(400).json({ message: "Error al enviar feedback" });
    }
};
