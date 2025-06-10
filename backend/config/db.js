import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
    try {
        await mongoose.connect(`${MONGO_URI}/food-del`);
        console.log("MongoDB Connected ✅");
    } catch (err) {
        console.error(`MongoDB connection error: ${err.message}`);
        process.exit(1);
    }
};

mongoose.connection.on("error", (err) => {
    console.log(`MongoDB connection error: ${err.message}`);
});
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});
