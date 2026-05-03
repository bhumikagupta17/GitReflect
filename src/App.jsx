import { useState } from 'react'
import { useGitHub } from './hooks/useGitHub'
import './App.css'
import SearchBar from './components/shared/SearchBar'
import ProfileHeader from './components/dashboard/ProfileHeader'
import RepoCard from './components/dashboard/RepoCard'
import ThemeToggle from './components/shared/ThemeToggle'
import LanguageChart from './components/dashboard/LanguageChart'

function App() {
  const { data, loading, error, fetchUser } = useGitHub();

  return (
    <div className="min-h-screen transition-colors duration-300  text-slate-900 dark:text-white">
      <div className="max-w-6xl mx-auto p-6 py-18 sm:px-4">
        {/* Top Navigation Row */}
        <nav className="flex justify-between items-center mb-12">
          <div className="text-left">
            <h1 className="text-3xl font-extrabold 
            bg-gradient-to-r 
            from-blue-800 to-purple-700 
            dark:from-blue-500 dark:to-purple-500 
            bg-clip-text text-transparent">GitReflect</h1>
            <p className=" text-black dark:text-slate-400 text-sm">Visualize your digital footprint.</p>
          </div>
          <ThemeToggle />
        </nav>

        <SearchBar onSearch={fetchUser} isLoading={loading} />

        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}

        {data && (
          <div className="mt-12 flex flex-col gap-8">
            {/* 1. Profile Header - Spans full width */}
            <div className="w-full">
              <ProfileHeader user={data.user} />
            </div>

            <LanguageChart repos={data.repos}/>

            {/* 2. Repositories Section */}
            <div className="glass-card p-8">
              <div className="flex justify-between items-center mb-6">

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Latest Repositories
                </h3>

                <span className="
                  px-3 py-1 rounded-full text-xs font-medium
                  bg-blue-200 text-blue-700
                  dark:bg-blue-500/10 dark:text-blue-400
                ">
                  {data.repos.length} Repos
                </span>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {data.repos.slice(0, 6).map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
