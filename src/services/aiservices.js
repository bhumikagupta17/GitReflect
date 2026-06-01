export const generateInsights = async (languages, activityData) => {
    const trimmedLanguages = Object.fromEntries(
    Object.entries(languages).slice(0, 5) // only top 5
    );
    const trimmedActivity = activityData.slice(-6); // only last 6 months
    const response = await fetch("https://gitreflect-server.vercel.app/api/insights", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            languages: trimmedLanguages,
            activityData: trimmedActivity,
        }),
    });
    if (!response.ok) {
        throw new Error("Failed to fetch insights");
    }
    return response.json();
};