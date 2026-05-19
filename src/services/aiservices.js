export const generateInsights = async (languages, activityData) => {
    const response = await fetch("https://gitreflect-server.vercel.app", {
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