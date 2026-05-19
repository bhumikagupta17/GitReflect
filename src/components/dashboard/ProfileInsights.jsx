import { useState } from "react";
import { Sparkles, Loader2, AlertCircle } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import DashboardCard from "../shared/DashboardCard";
import { generateInsights } from "../../services/aiservices";

const ProfileInsights = ({ languages, activityData }) => {
    const [insights, setInsights] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchInsights = async () => {
        setLoading(true);
        setError("");

        try {
            const data = await generateInsights(
                languages,
                activityData
            );

            setInsights(data.insights);
        } catch (err) {
            console.error(err);

            setError(
                "Unable to generate insights right now."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardCard className="mt-6">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Sparkles
                        className="text-amber-500 animate-pulse"
                        size={20}
                    />

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Profile Insights
                    </h3>
                </div>

                <button
                    onClick={fetchInsights}
                    disabled={loading}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white text-xs px-4 py-2 rounded-xl font-medium transition"
                >
                    {loading ? (
                        <>
                            <Loader2
                                size={14}
                                className="animate-spin"
                            />
                            Generating
                        </>
                    ) : (
                        "Generate"
                    )}
                </button>
            </div>

            {loading && (
                <div className="space-y-3">
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                </div>
            )}

            {!loading && insights && (
                <div className="text-sm text-gray-700 dark:text-slate-300  bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                    <ReactMarkdown>{insights}
                        </ReactMarkdown>
                </div>
            )}

            {!loading && error && (
                <div className="flex items-center gap-2 text-sm text-red-500 bg-red-500/10 border border-red-500/20 p-3 rounded-xl">
                    <AlertCircle size={16} />
                    {error}
                </div>
            )}

            {!loading && !insights && !error && (
                <p className="text-xs text-gray-400 dark:text-slate-500 italic">
                    Generate personalized insights from your
                    GitHub activity and tech stack.
                </p>
            )}
        </DashboardCard>
    );
};

export default ProfileInsights;