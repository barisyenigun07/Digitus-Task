import React from 'react'
import users from "../data/users"
import UserCard from './UserCard'

const MembersYouMayKnow = () => {
  return (
    <div className="flex flex-col w-1/3 p-5 bg-slate-200 mt-10 rounded-3xl shadow-lg">
        <div className="flex flex-row justify-center items-center">
            <p className="text-2xl text-center text-slate-500 ml-28">Members You May Know</p>
            <p className="text-end ml-20">SEE ALL</p>
        </div>
        <div className="flex flex-row">
            <UserCard user={users[0]}/>
            <UserCard user={users[1]}/>
            <UserCard user={users[2]}/>
        </div>
    </div>
  )
}

export default MembersYouMayKnow