import React from "react";
import TimeLine from "../pages/timeline";
import AboutMe from "./AboutMe";
import Projects from "./projects";
import MyCarrousell from "./carousell";
const Home = () => {
    return (
        <div className=" grid grid-cols-1   ">
            <div id="carousell"><MyCarrousell /></div>
            <div id="projects"><Projects /></div>
            <div id="about"><AboutMe /></div>
            <div><TimeLine /></div>
        </div>
    )
}

export { Home }