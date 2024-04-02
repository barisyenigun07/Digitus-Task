import React from 'react'
import digitusLogo from "../assets/DigitusLogo.png";
import searchIcon from "../assets/search-icon.svg";
import letterIcon from "../assets/letter.svg";
import bellIcon from "../assets/bell.svg";
import profilePhoto from "../assets/profile-photo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-white shadow-lg">
        <div>
            <img src={digitusLogo} alt="Digitus" width={150} height={90}/>
        </div>
        <div className="flex flex-row justify-evenly">
            <div className="bg-gradient-to-b from-pink-400 to-purple-600 w-10 h-10 rounded-full mt-5">
                <div className="text-white text-3xl text-center">
                    +
                </div>
            </div>
            <div className="p-5 mt-2">
                <a href="#" className="ml-4 mr-4 text-slate-500 font-bold">Moms</a>
                <a href="#" className="ml-4 mr-4 text-slate-500 font-bold">Experts</a>
                <a href="#" className="ml-4 mr-4 text-slate-500 font-bold">Explore</a>
                <a href="#" className="ml-4 mr-4 text-slate-500 font-bold">Forum</a>
                <a href="#" className="ml-4 mr-4 text-slate-500 font-bold">Mom Talk</a>
            </div>
            
        </div>
        <div className="flex pl-2">
            <img src={searchIcon} alt="Search Icon" width={30} height={30} className="mr-8" /> 
            <img src={letterIcon} alt='Letter Icon' width={30} height={30} className="mr-2"/>
            <img src={bellIcon} alt='Bell Icon' width={30} height={30} className="ml-3"/>
            <img src={profilePhoto} alt="Profile" className="w-18 h-18 rounded-full bg-blac p-1 ml-10"/>
        </div>
    </nav>
  )
}

export default Navbar