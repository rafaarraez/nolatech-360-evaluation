import mongoose, { Document, Schema } from "mongoose";

export interface IFeedback extends Document {
    evaluation: mongoose.Schema.Types.ObjectId;
    employee: mongoose.Schema.Types.ObjectId;
    feedback: string;
    givenBy: mongoose.Schema.Types.ObjectId;
}

const feedbackSchema = new Schema<IFeedback>(
    {
        evaluation: { type: Schema.Types.ObjectId, ref: "Evaluation", required: true },
        employee: { type: Schema.Types.ObjectId, ref: "Employee", required: true },
        feedback: { type: String, required: true },
        givenBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
    { timestamps: true }
);

export default mongoose.model<IFeedback>("Feedback", feedbackSchema);
