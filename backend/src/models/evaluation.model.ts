import mongoose, { Document, Schema } from "mongoose";

export interface IEvaluation extends Document {
    employee: mongoose.Schema.Types.ObjectId;
    date: Date;
    score: number;
    comments: string;
}

const evaluationSchema = new Schema<IEvaluation>(
    {
        employee: { type: Schema.Types.ObjectId, ref: "Employee", required: true },
        date: { type: Date, default: Date.now },
        score: { type: Number, required: true },
        comments: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model<IEvaluation>("Evaluation", evaluationSchema);
