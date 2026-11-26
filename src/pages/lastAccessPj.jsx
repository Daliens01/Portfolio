import React from "react"
import light from "../assets/light.png"
import dark from "../assets/dark.png"
import select from "../assets/select.png"
import table from "../assets/table.png"
import downloadbutton from "../assets/downloadbutton.png"
import downloadedfile from "../assets/downloadedfile.png"

import reactimg from "../assets/react.png"
import nodeimg from "../assets/node.png"
import mysqlimg from "../assets/mysql.png"
import langselector from "../assets/languageselector.jpg"

const Lastaccessproject = () => {
    const [theme, setTheme] = React.useState("light");
    const darkmode = (e) => {
        setTheme(e)
    }
    return (
        <div className="justify-items-center">
            <div className="pb-10">
                <h1 className=" place-self-center font-bold md:text-3xl pb-5">Last Access App for Moodle</h1>
            </div>
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 justify-items-center pb-10 ">
                <img className="md:w-[660px] md:h-[318px] md:rounded-lg md:px-2 md:mask-r-from-60% " src={theme == "light" ? light : dark}></img>
                <div className=" grid grid-cols-1 justify-self-start">
                    <p className=" text-justify text-sm md:text-base md:w-2xl  md:p-0 p-5 ">This app has as objetive to recollect the last access data
                        from students registered from custom courses. it is connected by a functional moodle plattform database.
                    </p>
                    <p className=" text-justify text-sm md:text-base pb-5 md:w-2xl md:p-0 p-5 ">
                        I developed for my actual work that has a moodle plattform and i deployed localy for my co workers to use only in their work computer,
                        that is why i don't have a link to share.
                    </p>
                    <div className="place-self-center">
                        <button onClick={clickbutton => darkmode(theme == "light" ? "dark" : "light")}
                            className="cursor-pointer font-bold italic">Click here to change the image to {theme == "light" ? "dark" : "light"} mode</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-4 pb-10">

                <div className=" max-w-xs text-gray-800
                bg-gradient-to-br from-white/25 via-white/10 to-white/5 backdrop-blur-md saturate-150 border border-white/35 shadow-black/20 ring-1 ring-inset ring-white/20
                animated-card 
                rounded-lg shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
                    <div className='cardimg rounded-lg'>
                        <img className=' w-4xl  mb-2' src={select} />
                    </div>

                    <div className="p-5">
                        <p className="text-sm md:text-base">You need to select the courses categories to display users last access data. This courses categories info was typed manually</p>
                    </div>
                </div>
                <div className=" max-w-xs  text-gray-800
                bg-gradient-to-br from-white/25 via-white/10 to-white/5 backdrop-blur-md saturate-150 border border-white/35 shadow-xl shadow-black/20 ring-1 ring-inset ring-white/20
                animated-card 
                rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
                    <div className='cardimg rounded-lg'>

                        <img className=' w-4xl  mb-2' src={langselector} />
                    </div>

                    <div className="p-5">
                        <p className="text-sm md:text-base">At the moment is only available in spanish but i am working in an english version with an new interface to put your own id courses to use in your moodle plattform</p>
                    </div>
                </div>
                <div className=" max-w-xs  text-gray-800
                bg-gradient-to-br from-white/25 via-white/10 to-white/5 backdrop-blur-md saturate-150 border border-white/35 shadow-xl shadow-black/20 ring-1 ring-inset ring-white/20
                animated-card 
                rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
                    <div className='flex flex-row rounded-lg place-self-center p-1 '>
                        <img className='size-24  mb-2' src={reactimg} />
                        <img className=' size-24  mb-2' src={nodeimg} />
                        <img className=' size-24  mb-2' src={mysqlimg} />
                    </div>
                    <ul className="p-5">
                        <li className="text-sm md:text-base">This app was made using:</li>
                        <li className="p-5 text-sm md:text-base">React JS in Frontend powered with HeroUI framework</li>
                        <li className="p-5 text-sm md:text-base">Node JS in Backend</li>
                        <li className="p-5 text-sm md:text-base">Mysql as my DB</li>
                    </ul>

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 place-content-evenly gap-4 pb-52">
                <div className="md:w-2xl   text-white">
                    <p className="pb-5 md:px-0 px-5 ">You can see every student that is not entering to their courses from at least 15 days or never status</p>
                    <img className="rounded-lg md:w-[672px] md:h-[332]" src={table}></img>
                </div>
                <div>
                    <p className="pb-5 md:px-0 px-5  text-white">Below the table there is a download button to save all data as a xlsx file</p>
                    <div className="flex flex-row pb-5 ">
                        <img className=" rounded-lg" src={downloadbutton}></img>
                        {/* <img className="px-2 mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80%" src={downloadedfile}></img> */}
                    </div>
                    <div>
                        <p className="md:px-0 px-5 pb-5  text-white">To see more information about the code, you can go to the repositorie:</p>
                        <div className="md:pb-3 md:pr-3 place-self-center pb-2 md:place-self-end text-white">
                            <button className="rounded-md bg-violet-400  p-2
                 cursor-pointer hover:bg-violet-300 shadow-md"
                                onClick={() => { window.open("https://github.com/Daliens01") }}>Repositorie</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lastaccessproject