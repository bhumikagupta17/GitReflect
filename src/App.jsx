import { useState } from 'react'
import { useGitHub } from './hooks/useGitHub'
import './App.css'

function App() {
  const {data,loading,error,fetchUser}=useGitHub()

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <header className='text-center my-12'>
        <h1 className='text-5xl font-extrabold neon-text mb-4'>GitReflect</h1>
        <p className="text-slate-400">Visualize your digital footprint.</p>
      </header>
      {/* search bar */}
      {error && <p className='text-red-400 mt-4 text-center'>{error}</p>}
      {data && (
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* components */}
          <div className="glass-card p-6">
            <img src={'data.user.avatar_url'} className='rounded-full w-24 mb-4'></img>
            <h2 className='text-2xl font-bold'>{data.user.name}</h2>
            <p className="text-slate-400">{data.user.bio}</p>
          </div>

          <div className="md:col-span-2 glass-card p-6">
            <h3 className="text-xl font-bold mb-4">Latest Repos</h3>
            <ul className="space-y-2">
              {data.repos.slice(0, 5).map(repo => (
                <li key={repo.id} className="text-blue-400">/ {repo.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
