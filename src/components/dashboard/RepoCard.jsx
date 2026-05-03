import { Star, GitFork, ExternalLink } from 'lucide-react';

const RepoCard = ({ repo }) => (
  <div
    className="
    glass-card p-5 cursor-pointer group
    hover:shadow-xl hover:-translate-y-1
    transition-all duration-300
  "
  >
    <div className="flex justify-between items-start mb-2">
      <h4
        className="
        text-gray-900 dark:text-white font-semibold text-xl
        group-hover:text-blue-600 dark:group-hover:text-blue-400
        transition
      "
      >
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
        >
          {repo.name}
          <ExternalLink
            size={12}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </a>
      </h4>
    </div>
    <p
      className="
      text-gray-600 dark:text-slate-400
      text-sm font-medium line-clamp-2 h-10 mb-4
    "
    >
      {repo.description || "No description provided."}
    </p>

    <div
      className="
      flex items-center gap-4
      text-xs font-medium
      text-gray-500 dark:text-slate-400
    "
    >
      {repo.language && (
        <span className="text-emerald-600 dark:text-emerald-400">
          {repo.language}
        </span>
      )}

      <span className="flex items-center gap-1">
        <Star size={12} />
        {repo.stargazers_count}
      </span>

      <span className="flex items-center gap-1">
        <GitFork size={12} />
        {repo.forks_count}
      </span>
    </div>
  </div>
);

export default RepoCard;