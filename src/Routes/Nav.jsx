import React from "react";

const Nav = () =>{
    return(
        <nav className=" justify-items-center nav py-2 sticky ">
        <ul  className= "grid grid-flow-col  " >
            <li className="  p-1.5 mx-5  ">
                 <a href="/" >Home</a>
            </li>
            <li className="  p-1.5 mx-5  ">
                <a href="#about" >About Me</a>
            </li>
            <li className="  p-1.5 mx-5 ">
                <a href="#projects" >My projects</a>
            </li>
        </ul>
        </nav>
    )
}

export default Nav