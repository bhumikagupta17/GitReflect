import { Star, GitFork, ExternalLink } from 'lucide-react';

const RepoCard = ({ repo }) => (
  <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl hover:bg-slate-800/60 transition-all group">
    <div className="flex justify-between items-start mb-2">
      <h4 className="text-blue-400 font-bold group-hover:text-blue-300">
        <a href={repo.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-2">
          {repo.name} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
        </a>
      </h4>
    </div>
    <p className="text-slate-400 text-xs line-clamp-2 h-8 mb-4">
      {repo.description || "No description provided."}
    </p>
    <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500">
      {repo.language && <span className="text-emerald-400">{repo.language}</span>}
      <span className="flex items-center gap-0.5"><Star size={10}/> {repo.stargazers_count}</span>
      <span className="flex items-center gap-0.5"><GitFork size={10}/> {repo.forks_count}</span>
    </div>
  </div>
);

export default RepoCard;
