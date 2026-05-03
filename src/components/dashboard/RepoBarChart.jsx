import { BarChart,XAxis,YAxis,Tooltip,Bar,ResponsiveContainer } from "recharts";

const RepoBarChart = ({repos}) => {
    const data=repos.slice(0,5).map((repo)=>({
        name:repo.name,
        stars: repo.stargazers.count
    }));
  return (
    <h3></h3>
  )
}

export default RepoBarChart
