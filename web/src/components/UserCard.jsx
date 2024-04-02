/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import closeMark from '../assets/close-mark.svg'

const UserCard = ({user}) => {
  return (
    <div className="w-1/3 bg-white rounded-2xl p-2 m-3">
        <div className="flex justify-end">
          <img src={closeMark} alt="Close Icon" width={20} height={20}/>
        </div>
        <div className="flex justify-center mt-1">
          <img src={user.profilePhoto} alt="Profile" className="w-30 h-30 rounded-full"/>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>{user.name}</p>
          {(user.title) ? <p className="text-orange-400">{user.title}</p> : <div className="mt-6"/>}
        </div>
        <div className="flex justify-center mt-2">
          <p>{user.location}</p>
        </div>
        <button className={(user.title) ? "w-full bg-orange-400 text-white mt-5 rounded-3xl" : "w-full bg-purple-400 text-white mt-5 rounded-3xl"}>
          Follow
        </button>
    </div>
  );

}

export default UserCard