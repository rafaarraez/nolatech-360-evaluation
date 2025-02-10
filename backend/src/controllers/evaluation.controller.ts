import { Request, Response } from "express";
import * as EvaluationService from "../services/evaluation.service";

export const createEvaluation = async (req: Request, res: Response) => {
    try {
        const evaluation = await EvaluationService.createEvaluation(req.body);
        res.status(201).json(evaluation);
    } catch (error) {
        res.status(400).json({ message: "Error al crear evaluación" });
    }
};

export const getEvaluation = async (req: Request, res: Response): Promise<any> => {
    try {
        console.log(req.params.id);

        const evaluation = await EvaluationService.getEvaluationById(req.params.id);
        if (!evaluation) return res.status(404).json({ message: "Evaluación no encontrada" });
        res.status(200).json(evaluation);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener evaluación" });
    }
};

export const updateEvaluation = async (req: Request, res: Response) => {
    try {
        const updatedEvaluation = await EvaluationService.updateEvaluation(req.params.id, req.body);
        res.json(updatedEvaluation);
    } catch (error) {
        res.status(400).json({ message: "Error al actualizar evaluación" });
    }
};

export const getEvaluationsByEmployee = async (req: Request, res: Response) => {
    try {
        const evaluations = await EvaluationService.getEvaluationsByEmployee(req.params.id);
        res.json(evaluations);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener evaluaciones" });
    }
};
