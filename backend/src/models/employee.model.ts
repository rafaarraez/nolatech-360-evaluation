import mongoose, { Document, Schema } from "mongoose";

export interface IEmployee extends Document {
    name: string;
    position: string;
    department: string;
    manager: mongoose.Schema.Types.ObjectId;
}

const employeeSchema = new Schema<IEmployee>(
    {
        name: { type: String, required: true },
        position: { type: String, required: true },
        department: { type: String, required: true },
        manager: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Relación con Usuario
    },
    { timestamps: true }
);


export default mongoose.model<IEmployee>("Employee", employeeSchema);
