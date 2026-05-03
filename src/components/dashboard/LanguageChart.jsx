import { PieChart,Pie,Cell,Tooltip, ResponsiveContainer } from "recharts";

const colors=["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444"]

const LanguageChart = ({repos}) => {

    const langCount={}
    repos.forEach(repo => {
        if(repo.language){
            langCount[repo.language]=(langCount[repo.language] || 0)+1
        }
    });

    const data=Object.keys(langCount).map((lang)=>({
        name:lang,
        value:langCount[lang]
    }))
  return (
    <div className="glass-card p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Language Distribution</h3>

        <div className="w-full h-60">
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data}
                    dataKey="value"
                    outerRadius={80}
                    label={({ name, percent }) =>`${name} ${(percent * 100).toFixed(0)}%`
  }>
                        {data.map((_,index)=>(
                            <Cell key={index} fill={colors[index&colors.length]}/>
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
      
    </div>
  )
}

export default LanguageChart

