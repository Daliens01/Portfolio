import React from 'react'
import Githublogo from "../assets/gitlogo.png"
import Bghome from "../assets/bghome.png"

const MyCarrousell = () =>{ 
    return(
            <div className={`flex flex-row place-content-center py-40 
             bg-cover bg-center bg-no-repeat`}
             style={{ backgroundImage: `url(${Bghome})` }}>
                <div className=" place-self-center">
                    <h1 className="text-3xl font-bold ">Wellcome to my portfolio</h1>
                    <p className='m-3'>Hi! i am <a className='font-bold italic'>Heberto Ortiz</a>, a software developer passionate  by technology, 
                    i am a novel writer aswell. there is my <a className='font-bold italic'>Github</a> profile next button</p>
                    <button className="rounded-md bg-violet-300 p-1.5
                 cursor-pointer hover:bg-violet-400 shadow-md"  
                 onClick={()=>{window.open("https://github.com/Daliens01")}}>Click to go GitHub</button>
                </div>
                <div className=" bg">
                    <img className="size-50 m-60" src={Githublogo}></img>
                </div>
            </div>
    )
}

export default MyCarrousell