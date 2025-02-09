import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("✅ MongoDB conectado");
    } catch (error) {
        console.error("❌ Error al conectar a MongoDB", error);
        process.exit(1);
    }
};

export default connectDB;
