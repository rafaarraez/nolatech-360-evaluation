import mongoose, { Document, Schema } from "mongoose";

export interface IEmployee extends Document {
    name: string;
    position: string;
    department: string;
    evaluations: mongoose.Schema.Types.ObjectId[];
    calculateEvaluationStats: () => Promise<{
        averageScore: number;
        totalEvaluations: number;
        lastEvaluation: Date | null;
    }>;
}

const employeeSchema = new Schema<IEmployee>(
    {
        name: { type: String, required: true },
        position: { type: String, required: true },
        department: { type: String, required: true },
        evaluations: [{ type: Schema.Types.ObjectId, ref: "Evaluation" }],
    },
    { timestamps: true }
);

// 🔥 Método para calcular estadísticas de evaluaciones
employeeSchema.methods.calculateEvaluationStats = async function (): Promise<{ averageScore: number, totalEvaluations: number, lastEvaluation: Date | null }> {
    const evaluations = await mongoose.model("Evaluation").find({ employee: this._id });

    if (evaluations.length === 0) {
        return { averageScore: 0, totalEvaluations: 0, lastEvaluation: null };
    }

    const totalScore = evaluations.reduce((acc, evalItem) => acc + evalItem.score, 0);
    const averageScore = totalScore / evaluations.length;
    const lastEvaluation = evaluations[evaluations.length - 1].date;

    return { averageScore, totalEvaluations: evaluations.length, lastEvaluation };
};

export default mongoose.model<IEmployee>("Employee", employeeSchema);
