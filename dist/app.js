"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.send('Hello from Node + TypeScript!');
});
app.get('/', (_req, res) => {
    res.send('Hello from Node + TypeScript!');
});
app.get('/health', (_req, res) => {
    res.send('Everything is working perfect! v1');
});
exports.default = app;
