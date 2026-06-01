import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import insightsRoutes from "./routes/insightsRoutes.js";

dotenv.config();

const app = express();

app.use(
    cors({
        origin: "https://git-reflect.vercel.app",
        methods: ["GET", "POST"],
    })
);

app.use(express.json({ limit: '10mb' }));

app.get("/", (req, res) => {
    res.send("Backend running");
});

app.use("/api/insights", insightsRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
export default app; 