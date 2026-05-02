import {Sun,Moon} from 'lucide-react'
import { useState,useEffect } from 'react'

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme=localStorage.getItem("theme")
        if(theme==="light"){
            setDarkMode(false);
            document.documentElement.classList.remove('dark')
        }else{
            document.documentElement.classList.add('dark')
        }
    }, []);

    const toggleTheme=()=>{
        if(darkMode){
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')
            setDarkMode(false)
        }else{
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
            setDarkMode(true)
        }
    }

  return (
    <div>
      <button
      onClick={toggleTheme}
      className="relative w-14 h-8 flex items-center bg-slate-300 dark:bg-slate-700 rounded-full p-1 transition-colors duration-300 focus:outline-none">
        <div
        className={`bg-white dark:bg-slate-900 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          darkMode ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {darkMode ? <Moon size={14} className="text-blue-400" /> : <Sun size={14} className="text-yellow-500" />}
      </div>
      </button>
    </div>
  )
}

export default ThemeToggle
