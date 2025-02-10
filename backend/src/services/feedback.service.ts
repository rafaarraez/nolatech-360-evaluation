import Feedback from "../models/feedback.model";

export const createFeedback = async (data: any) => {
    return await Feedback.create(data);
};

export const getFeedbackByEvaluation = async (evaluationId: string) => {
    return await Feedback.find({ evaluation: evaluationId }).populate("givenBy", "name");
};
