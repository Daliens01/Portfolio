import React from 'react'
import Githublogo from "../assets/gitlogo.png"
import Bghome from "../assets/bghome.png"

const MyCarrousell = () =>{ 
    return(
            <div className={`w-full py-40 mask-t-from-90% mask-b-from-90% md:mask-t-from-60% md:mask-b-from-60% z-0 relative
             bg-cover bg-center bg-no-repeat 
             md:flex flex-row md:place-content-center`}
             style={{ backgroundImage: `url(${Bghome})` }}>
                <div className=" md:place-self-center px-5">
                    <h1 className="text-3xl font-bold ">Wellcome to my portfolio</h1>
                    <p className='m-3'>Hi! i am <a className='font-bold italic'>Heberto Ortiz</a>, a software developer passionate  by technology, 
                    i am a novel writer aswell. there is my <a className='font-bold italic'>Github</a> profile next button</p>
                    <button className="rounded-md bg-violet-300 p-1.5 
                 cursor-pointer hover:bg-violet-400 shadow-md"  
                 onClick={()=>{window.open("https://github.com/Daliens01")}}>Click to go GitHub</button>
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