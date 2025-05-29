import React from "react";

const Nav = () =>{
    return(
        <div>
        <ul  className= " flex" >
            <li className=" flex-none p-1.5 border-amber-300 border-2 ">
                 <a href="/" >Home</a>
            </li>
            <li className="w-14 flex-auto p-1.5">
                <a href="/about" >About Me</a>
            </li>
        </ul>
        </div>
    )
}

export default Nav