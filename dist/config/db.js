"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const uri = process.env.MONGO_URI;
if (!uri) {
    throw new Error("❌ MONGO_URI not found in .env");
}
const client = new mongodb_1.MongoClient(uri);
let isConnected = false;
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!isConnected) {
            try {
                yield client.connect();
                console.log("✅ MongoDB connected");
                isConnected = true;
                // console.log((await client.db().collections())[0]);
            }
            catch (err) {
                console.error("❌ MongoDB connection failed", err);
                throw err;
            }
        }
    });
}
exports.default = client;
