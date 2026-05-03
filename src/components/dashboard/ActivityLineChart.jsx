import { LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer } from "recharts";
import { Info } from "lucide-react";
import { useState } from "react";

const ActivityLineChart = ({repos}) => {
    const [showInfo, setShowInfo] = useState(false);

    const monthlyActivity={};

    repos.forEach((repo) => {
        if(!repo.updated_at) return;
        const date=new Date(repo.updated_at)
        const monthYear = date.toLocaleString("default", {
            month: "short",
            year: "numeric"
        });
        monthlyActivity[monthYear]=(monthlyActivity[monthYear] || 0)+1
    });

    const data=Object.keys(monthlyActivity).map((month)=>({
            month,
            activity : monthlyActivity[month],
        }))

    data.sort((a, b) => new Date(a.month) - new Date(b.month));

  return (
    <div className=" p-3 w-full glass-card">
        <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Activity Over Time
        </h3>
        <button
        onClick={()=>setShowInfo(!showInfo)}
        className="rounded-full p-1 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
        >
            <Info size={16} className="text-gray-500 dark:text-slate-400"/>
        </button>
    </div>
        {showInfo && (
            <div className="mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-sm text-gray-700 dark:text-slate-300">
                Each point represents the number of repositories updated in a given month.
                Higher values indicate more activity during that time period.
            </div>
        )}

        <div className="w-full h-64">
            <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Line type="monotone" dataKey="activity" strokeWidth={2}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default ActivityLineChart
