import React from "react";
import {useLocation} from "react-router-dom"
const Nav = () =>{
      const location = useLocation().pathname;
    return(
        <nav className=" justify-items-center nav py-2 z-50 sticky top-0 left-0 w-full">
        <ul  className= "grid grid-flow-col font-bold text-gray-700 " >
            <li className="  p-1.5 mx-5  ">
              {location == "/" ?  <a href="/#home">Home</a>:<a href="/"> Home</a>}
            </li>
            <li className="  p-1.5 mx-5 ">
                {location == "/" ?  <a href={"/#projects"} >My projects</a>:null}
            </li>
            <li className="  p-1.5 mx-5  ">
                {location == "/" ?  <a href="/#about" >About Me</a>:null}
            </li>
        </ul>
        </nav>
    )
}

export default Nav