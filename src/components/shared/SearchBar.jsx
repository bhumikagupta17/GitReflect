import { Search } from "lucide-react";

const SearchBar=({onSearch,isLoading})=>{
    const handleSubmit=(e)=>{
        e.preventDefault();
        const username=e.target.username.value
        if(username) onSearch(username)
    };

    return(
        <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
            <input
            name="username"
            type="text"
            placeholder="Enter Github username..."
            className=" w-full px-5 py-3 rounded-xl
            border border-gray-300 bg-white shadow-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-[1.01]
            transition-all duration-200
            dark:bg-slate-800 dark:border-slate-600 dark:text-white"
            />
            <button type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-400 transition-colors">
                {isLoading? <div className="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>: <Search size={20}/>}
            </button>

        </form>
    );
};


export default SearchBar