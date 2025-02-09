import mongoose, { Document, Schema } from "mongoose";

export interface IEmployee extends Document {
    user: mongoose.Schema.Types.ObjectId;
    position: string;
    department: string;
}

const employeeSchema = new Schema<IEmployee>(
    {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        position: { type: String, required: true },
        department: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model<IEmployee>("Employee", employeeSchema);
