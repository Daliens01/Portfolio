import React from 'react'
import Githublogo from "../assets/gitlogo.png"
import Bghome from "../assets/bghome.png"

const MyCarrousell = () =>{ 
    return(
            <div className={`w-full py-20 mask-t-from-90% mask-b-from-90% md:mask-t-from-60% md:mask-b-from-60% z-0 relative
             bg-cover bg-center bg-no-repeat 
             md:flex flex-row md:place-content-center`}
             style={{ backgroundImage: `url(${Bghome})` }}>
                <div className=" md:place-self-center px-5">
                    <h1 className="text-3xl font-bold text-gray-900 ">Wellcome to my portfolio</h1>
                    <p className='m-3 text-sky-900'>Hi! i am <a className='font-bold italic'>Heberto Ortiz</a>, a software developer passionate  by technology, 
                    i am a novel writer aswell. there is my <a className='font-bold italic'>Github</a> profile next button</p>
                    <button className="inline-flex items-center px-3 py-2  text-sm font-medium text-center
                           text-violet-950 bg-gradient-to-br from-violet-400/50 via-violet-600/20 to-transparent backdrop-blur-md 
                           saturate-150 border border-violet-200/30 shadow-violet-950/30 rounded-md hover:from-violet-800/50 hover:via-violet-800/40 cursor-pointer"  
                 onClick={()=>{window.open("https://github.com/Daliens01")}}>Click to go to my GitHub Profile</button>
                </div>
                <div className="mt-14 justify-items-center
                                md:mt-0 ">
                    <img className=" size-20 
                                md:size-50 md:m-60 " 
                    src={Githublogo}></img>
                </div>
            </div>
    )
}

export default MyCarrousell