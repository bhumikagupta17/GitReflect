import express from "express";

import { generateInsights } from "../controllers/insightsControllers.js";

const router = express.Router();

router.post("/", generateInsights);

export default router;