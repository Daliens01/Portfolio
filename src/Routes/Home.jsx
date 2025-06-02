import React from "react";
import Bunisessmanpic from "../../dist/bunisesman.png"
import TimeLine from "../pages/timeline";
import AboutMe from "./AboutMe";
import Projects from "./projects";
const Home = () => {
    const handleScroll = (event) => {
        // Access scroll information using event.target
        console.log('Scrolled!', event.target.scrollTop);
    };

    return (
        <div className=" items-center justify-center">
            <div className="border-2 flex flex-row place-content-center py-40 customimage">
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
           <div><TimeLine/></div>
           <div id="about"><AboutMe/></div>
           <div id="projects"><Projects/></div>
            
        </div>
    )
}

export { Home }