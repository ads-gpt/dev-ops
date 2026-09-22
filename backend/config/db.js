import mongoose from "mongoose";
import dns from "node:dns";

// Atlas SRV records require a DNS resolver that supports SRV queries.
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB Connection Error:", error.message);

        process.exit(1);
    }
};

export default connectDB;
