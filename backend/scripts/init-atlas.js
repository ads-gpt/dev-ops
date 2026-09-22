import dotenv from "dotenv";
import mongoose from "mongoose";
import dns from "node:dns";

import User from "../models/User.js";
import Book from "../models/Book.js";

dotenv.config();
dns.setServers(["1.1.1.1", "8.8.8.8"]);

if (!process.env.MONGO_URI) {
    throw new Error("Set MONGO_URI to your MongoDB Atlas connection string in .env.");
}

try {
    await mongoose.connect(process.env.MONGO_URI);

    // Explicitly create collections and schema-defined indexes in Atlas.
    for (const model of [User, Book]) {
        try {
            await model.createCollection();
        } catch (error) {
            if (error.codeName !== "NamespaceExists") {
                throw error;
            }
        }
        await model.init();
        console.log(`Initialized ${model.collection.name}`);
    }

    console.log("Atlas database schema initialization complete.");
} finally {
    await mongoose.disconnect();
}
