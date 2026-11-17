import React from "react";
import TimeLine from "../pages/timeline";
import AboutMe from "./AboutMe";
import Projects from "./projects";
import MyCarrousell from "./carousell";
const Home = () => {
    return (
        <div id="home" className=" grid grid-cols-1 ">
            <div id="carousell" className=" md:mb-50"><MyCarrousell /></div>
            <div id="projects" className="md:mb-96"><Projects /></div>
            <div id="about" className="md:mb-50"><AboutMe /></div>
            {/* <div><TimeLine /></div> */}
        </div>
    )
}

export { Home }