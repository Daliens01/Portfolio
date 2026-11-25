import React from "react";
import { useLocation } from "react-router-dom"
const Nav = () => {
    const location = useLocation().pathname;
    return (
        <div>
            <nav className=" justify-items-center nav py-2 z-50 sticky top-0 left-0 w-full">
                {location == "/" ? 
                <ul className="grid grid-flow-col font-bold text-gray-700 " >
                    <li className="  p-1.5 mx-5  ">
                        {location == "/" ? <a href={"/"} >Home</a> : null}
                    </li>
                    <li className="  p-1.5 mx-5 ">
                        {location == "/" ? <a href={"/#projects"} >My projects</a> : null}
                    </li>
                    <li className="  p-1.5 mx-5  ">
                        {location == "/" ? <a href="/#about" >About Me</a> : null}
                    </li>
                </ul>
                : 
                <ul className="grid grid-flow-col font-bold text-gray-700 " >
                    <li className="  p-1.5 mx-5  ">
                        <a href="/"> Home</a>
                   </li>
                </ul>
                }
            </nav>
        </div>
    )
}

export default Nav