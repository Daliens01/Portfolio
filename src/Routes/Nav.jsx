import React from "react";

const Nav = () =>{
    return(
        <nav>
        <ul  className= "grid grid-flow-col justify-items-end nav" >
            <li className="  p-1.5  ">
                 <a href="/" >Home</a>
            </li>
            <li className="  p-1.5  ">
                <a href="/about" >About Me</a>
            </li>
            <li className="  p-1.5">
                <a href="/projects" >My projects</a>
            </li>
        </ul>
        </nav>
    )
}

export default Nav