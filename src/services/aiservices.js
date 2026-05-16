export const generateInsights = async (languages, activityData) => {
    const response = await fetch("http://localhost:5000/api/insights", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            languages,
            activityData,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch insights");
    }

    return response.json();
};