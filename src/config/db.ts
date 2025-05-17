import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI as string;

if (!uri) {
  throw new Error("❌ MONGO_URI not found in .env");
}

const client = new MongoClient(uri);
let isConnected = false;

export async function connectDB() {
  if (!isConnected) {
    try {
      await client.connect();
      console.log("✅ MongoDB connected");
      isConnected = true;
      // console.log((await client.db().collections())[0]);
    } catch (err) {
      console.error("❌ MongoDB connection failed", err);
      throw err;
    }
  }
}

export default client
