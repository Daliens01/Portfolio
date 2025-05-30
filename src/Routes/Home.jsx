import React from "react";
import Bunisessmanpic from "../../dist/bunisesman.png"

const Home = () => {
    return (
        <div className="flex flex-row place-content-center border-2 border-amber-400">
            <div className=" place-self-center">
                <h1 className="text-3xl font-bold ">Wellcome to my portfolio</h1>
                <p>Do you want to know about me? there are some of my project down below</p>
                <button className="rounded-md bg-violet-300 p-1.5
                 cursor-pointer hover:bg-violet-400">Click to go GitHub</button>
            </div>
            <div className="">
                <img className="size-96" src={Bunisessmanpic}></img>
            </div>
            
        </div>
    )
}

export default Home