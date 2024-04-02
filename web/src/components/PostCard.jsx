/* eslint-disable no-unused-vars */
import React from 'react'
import profilePhoto from "../assets/profile-photo.png";
import digitusLogo from "../assets/DigitusLogo.png"
import heart from "../assets/heart.svg";
import share from "../assets/share.svg";
import bookmark from "../assets/bookmark.svg";

const PostCard = ({post}) => {
  return (
    <div className="w-1/3 bg-white rounded-2xl mt-10 shadow-xl">
        <div>
            <div className="flex items-start">
                <div className="flex border-2 rounded-full w-14 h-14 justify-center items-center m-2">
                  <img src={post.user.profilePhoto} alt="Profile" width={50} className="border-2 border-slate-300 rounded-full m-2"/>
                </div>
                <div className="flex flex-col justify-start items-start mt-3">
                  <p className="pl-4">{post.user.name}</p>
                  <p className={(post.user.title === "SPONSORED") ? "pl-4 text-red-600" : "pl-4 text-orange-400"}>{post.user.title}</p>
                </div>
            </div>
            <hr />
        </div>
        <div>
          <div className="h-2 bg-gradient-to-r from-blue-300 via-green-400 to-orange-400"></div>
          {post.captionPhoto ? <img src={post.captionPhoto} alt='Digitus' className="w-full" /> : null}
        </div>
        <div className="flex justify-between p-3">
          <div className="flex">
            <div className="flex flex-col items-center">
              <img src={heart} alt="Heart" className="mr-4" width={30} height={30}/>
              <p className="text-center mr-4">{post.liked}</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={share} alt="Arrow" width={43} height={30}/>
              <p className="text-center">{post.shared}</p>
            </div>
          </div>
          <div className="mr-3">
            <img src={bookmark} alt="Bookmark" width={30} height={30}/>
          </div>
        </div>
        <div className="flex justify-start p-4">
          <p className="mr-3">{post.publishedMinAgo} <span className="text-slate-400">Min</span></p>
          <p className="mr-3">{post.views} <span className="text-slate-400">Views</span></p>
          <p>{post.comments} <span className="text-slate-400">Comments</span></p>
        </div>
        <div className="p-3">
          <p className="font-bold">{post.description}</p>
        </div>
        <div className="flex flex-row items-start p-3">
          <p className="text-slate-500 mr-3">#child</p>
          <p className="text-slate-500 mr-3">#doctor</p>
          <p className="text-slate-500 mr-3">#hospital</p>
          <p className="text-slate-500 mr-3">#fever</p>
        </div>
        <hr />
        <div className="p-3 flex">
          <input type="text" className="w-full" placeholder='Comment This' />
          <button className="ml-3 border-2 border-slate-400 text-slate-400 rounded-full p-1 w-20">Post</button>
        </div>
    </div>
  )
}

export default PostCard