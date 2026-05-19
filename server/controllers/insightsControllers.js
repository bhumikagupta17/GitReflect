import { getInsightsFromGemini } from "../services/geminiService.js";

export const generateInsights = async (req, res) => {
    console.log("✅ Route hit!");
    try {
        const { languages, activityData } = req.body;

        const insights = await getInsightsFromGemini(
            languages,
            activityData
        );

        res.json({ insights });

    } catch (err) {
        console.error("CONTROLLER ERROR:", err.message);
        res.status(500).json({ error: "Failed to generate insights" });
    }
};