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

    </div>
  )
}

export default App
