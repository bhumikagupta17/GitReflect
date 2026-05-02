import { Search } from "lucide-react";

const SearchBar=({onsSearch,isLoading})=>{
    const handleSubmit=(e)=>{
        e.preventDefault();
        const username=e.target.username.value
        if(username) onsSearch(username)
    };

    return(
        <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
            <input
            name="username"
            type="text"
            placeholder="Enter Github username..."
            className="w-full bg-slate-900/50 border border-slate-700 py-4 px-6 
            pr-12 rounded-2xl focus: outline-none focus: border-blue-500 transition-all backdrop-blur-sm"
            />
            <button type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-400 transition-colors">
                {isLoading? <div className="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-ful"></div>: <Search size={20}/>}
            </button>

        </form>
    );
};


export default SearchBar