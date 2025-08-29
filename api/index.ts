// Vercel serverless function entry point
import express from "express";
import { registerRoutes } from "../server/routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up routes
await registerRoutes(app);

export default app;