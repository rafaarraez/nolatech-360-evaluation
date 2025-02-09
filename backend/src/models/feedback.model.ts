import mongoose, { Document, Schema } from "mongoose";

export interface IFeedback extends Document {
    evaluation: mongoose.Schema.Types.ObjectId;
    reviewer: mongoose.Schema.Types.ObjectId;
    comments: string;
}

const feedbackSchema = new Schema<IFeedback>(
    {
        evaluation: { type: Schema.Types.ObjectId, ref: "Evaluation", required: true },
        reviewer: { type: Schema.Types.ObjectId, ref: "User", required: true },
        comments: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model<IFeedback>("Feedback", feedbackSchema);
