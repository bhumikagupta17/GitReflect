import { MapPin,Link as LinkIcon,Users } from "lucide-react";

import React from 'react'

const ProfileHeader = ({user}) => {
  return (
    <div className=" glass-card p-8 flex flex-col md:flex-row items-center gap-8">
        <img
        src={user.avatar_url}
        className="w-32 h-32 rounded-full border-4 border-blue-500/30 p-1 shadow-2xl shadow-blue-500/20"
        alt="avatar"
        />
        <div className="flex-1 text-center md: text-left">
            <h2 className="text-3xl font-bold text-white">{user.name || user.login}</h2>
            <p className="text-blue-400 font-mono text-sm mb-4">@{user.login}</p>
            <p className="text-slate-300 max-w-md">{user.bio || "This developer hasn't set a bio yet."}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 text-sm text-slate-400">
                <span className="flex items-center gap-1"><MapPin size={14}/> {user.location || "Earth"}</span>
                {user.blog && <span className="flex items-center gap-1"><LinkIcon size={14}/> {user.blog}</span>}
                <span className="flex items-center gap-1"><Users size={14}/> {user.followers} followers</span>
            </div>    
        </div>
      
    </div>
  )
}

export default ProfileHeader
