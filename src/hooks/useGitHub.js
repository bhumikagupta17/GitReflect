import { useState } from "react";
export const useGitHub=()=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUser=async (username)=>{
        setLoading(true);
        setError(null);
        try{
            const [userReq,repoRes]=await Promise.all([
                fetch(`https://api.github.com/users/${username}`),
                fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=50`)
            ]);
            if(!userReq.ok) throw new Error("user not found");

            const userData= await userReq.json();
            const reposData= await repoRes.json();

            setData({user:userData,repos:reposData})
        }catch(err){
            setError(err.message)
            setData(null)
        }finally{
            setLoading(false)
        }
    }
    return{data,loading,error,fetchUser};
}