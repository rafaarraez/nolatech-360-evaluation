import Evaluation from "../models/evaluation.model";

export const createEvaluation = async (data: any) => {
    return await Evaluation.create(data);
};

export const getEvaluationById = async (id: string) => {
    return await Evaluation.findById(id).populate("feedbacks").populate("employee evaluator", "name username");
};

export const updateEvaluation = async (id: string, data: any) => {
    return await Evaluation.findByIdAndUpdate(id, data, { new: true });
};

export const getEvaluationsByEmployee = async (employeeId: string) => {
    return await Evaluation.find({ employee: employeeId }).populate("evaluator", "name");
};
