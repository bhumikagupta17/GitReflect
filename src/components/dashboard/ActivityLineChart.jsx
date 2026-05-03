import { LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer } from "recharts";

const ActivityLineChart = ({repos}) => {
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
    <>
    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        Activity Over Time
    </h3>
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
    </>
  )
}

export default ActivityLineChart
