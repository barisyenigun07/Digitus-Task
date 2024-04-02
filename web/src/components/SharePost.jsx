import React, { useState } from 'react'
import profilePhoto from "../assets/profile-photo.png";
import smileEmoji from "../assets/smile-emoji.svg";

const SharePost = () => {
  return ( 
    <div className="bg-white rounded-2xl w-1/3 p-3 shadow-xl mt-5">
        <div className="flex justify-center flex-row items-center p-3">
            <img src={profilePhoto} alt="Profile" height={10} className="border-2 border-slate-400 rounded-full mr-3"/>
            <textarea type="text" placeholder='Write something, Merve' className="h-16 w-5/6 bg-gray-200 ml-2 p-2"/>
        </div>
        <div className="flex justify-end">
            <img src={smileEmoji} alt="Smile" width={20} height={20}/>
            <div className="ml-5">|</div>
        </div>
    </div>
  )
}

export default SharePost