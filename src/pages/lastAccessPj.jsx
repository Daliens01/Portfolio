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
    const [theme, setTheme] = React.useState("blanco");
    const darkmode = (e) => {
        e = theme
        return e
    }
    return (
        <div className="justify-items-center">
            <div className="pb-10">
                <h1 className=" place-self-center font-bold text-3xl pb-5">Last Access App for Moodle {theme}</h1>
            </div>
            <div className="flex flex-row justify-center pb-10 ">
                <img className="size-5/12 rounded-lg px-2 mask-r-from-60%" src={light}></img>
                <div className="px-2">
                    <p className="place-self-center text-justify w-2xl">This app has as objetive to recollect the last access data
                        from students registered from custom courses. it is connected by a functional moodle plattform database.
                    </p>
                    <p className="place-self-center text-justify w-2xl pb-5">
                        i developed for my actual work that has a moodle plattform and i deployed localy for my co workers to use only in their work computer,
                        that is why i don't have a link to share
                    </p>
                    <button onClick={darkmode("dark")} className="cursor-pointer">Clic to change the image to dark mode</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pb-10">

                <div className=" max-w-xs bg-white border border-gray-200 animated-card 
                rounded-lg shadow-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
                    <div className='cardimg rounded-lg'>

                        <img className=' w-4xl  mb-2' src={select} />
                    </div>

                    <div className="p-5">
                        <p>You need to select the courses categories to display users last access data. This courses categories info was typed manually</p>
                    </div>
                </div>
                <div className=" max-w-xs bg-white border border-gray-200 animated-card 
                rounded-lg shadow-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
                    <div className='cardimg rounded-lg'>

                        <img className=' w-4xl  mb-2' src={langselector} />
                    </div>

                    <div className="p-5">
                        <p>At the moment is only available in spanish but i am working in an english version with an new interface to put your own id courses to use in your moodle plattform</p>
                    </div>
                </div>
                <div className=" max-w-xs bg-white border border-gray-200 animated-card 
                rounded-lg shadow-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ">
                    <div className='flex flex-row rounded-lg place-self-center p-1 '>
                        <img className='size-24  mb-2' src={reactimg} />
                        <img className=' size-24  mb-2' src={nodeimg} />
                        <img className=' size-24  mb-2' src={mysqlimg} />
                    </div>
                    <ul className="p-5 ">
                        <li>This app was made using:</li>
                        <li className="p-5">React JS in Frontend powered with HeroUI framework</li>
                        <li className="p-5">Node JS in Backend</li>
                        <li className="p-5">Mysql as my DB</li>
                    </ul>

                </div>
            </div>
            <div className="grid grid-cols-2 place-content-evenly gap-4 pb-52">
                <div className=" w-2xl">
                    <p className="pb-5  ">You can see every student that is not entering to their coursees form at least 15 days or never status</p>
                    <img className="rounded-lg mask-t-from-90%" src={table}></img>
                </div>
                <div>
                    <p className="pb-5">Below the table there is a download button to save all data as a xlsx file</p>
                    <div className="flex flex-row pb-5 ">
                        <img className="px-2 mask-y-from-70% mask-y-to-90%" src={downloadbutton}></img>
                        {/* <img className="px-2 mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80%" src={downloadedfile}></img> */}
                    </div>
                    <div>
                        <p>To see more information about the code, you can go to the repositorie</p>
                        <button className="rounded-md bg-violet-300 p-1.5
                 cursor-pointer hover:bg-violet-400 shadow-md"
                            onClick={() => { window.open("https://github.com/Daliens01") }}>Repositorie</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lastaccessproject