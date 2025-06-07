import React from 'react'
import Bunisessmanpic from "../assets/bunisesman.png"

const MyCarrousell = () =>{
    return(
            <div className="border-2 flex flex-row place-content-center py-40  ">
                <div className=" place-self-center">
                    <h1 className="text-3xl font-bold ">Wellcome to my portfolio</h1>
                    <p>Do you want to know about me? there are some of my project down below</p>
                    <button className="rounded-md bg-violet-300 p-1.5
                 cursor-pointer hover:bg-violet-400" 
                 onClick={()=>{window.open("https://github.com/Daliens01")}}>Click to go GitHub</button>
                </div>
                <div className=" bg">
                    <img className="size-96" src={Bunisessmanpic}></img>
                </div>
            </div>
    )
}

export default MyCarrousell