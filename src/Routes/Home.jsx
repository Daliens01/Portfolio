import React from "react";
import TimeLine from "../pages/timeline";
import AboutMe from "./AboutMe";
import Projects from "./projects";
import MyCarrousell from "./carousell";
const Home = () => {
    return (
        <div className=" grid grid-cols-1 mx-8 absolute">
            <div id="carousell"><MyCarrousell /></div>
            <div id="projects" className="z-40"><Projects /></div>
            <div id="about"><AboutMe /></div>
            <div><TimeLine /></div>
        </div>
    )
}

export { Home }