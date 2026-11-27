import React from 'react'
import BgHome from "../assets/dark.png"
const Projects = () => {
    return (
        <div className='my-8  '>
            <div id='title'>
                <h2 className='p-3 flex justify-center text-3xl font-bold text-gray-800' >Projects</h2>
                <h1 className=' p-3 flex justify-center text-gray-50'>There are some of my projects i made</h1>
            </div>
            <div className='grid grid-cols-2 content-center'>
                <div className="justify-self-center w-44   grid  grid-cols-1 md:w-xs md:h-full 
               bg-gradient-to-br from-gray-600-400/20 via-gray-200/10 to-transparent backdrop-blur-md saturate-150 border border-gray-50/55 shadow-black-950/30 
                shadow-xl rounded-lg transition  duration-300  hover:-translate-y-1 hover:scale-110">
                    <div className='cardimg '>
                        <img className='rounded-lg' src={BgHome} />
                    </div>
                    <div className="p-5">
                        <a>
                            <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 ">Last Access app for Moodle</h5>
                        </a>

                        <p className="mb-3 text-sm md:text-base font-normal text-gray-700 ">
                            Its an internal app developed by me to see how many students are not entering to their courses for at least 15 days</p>
                    </div>
                    <div className='md:pb-3 md:pr-3 place-self-center pb-2 md:place-self-end'>
                        <a href="/lastaccessproject" className="inline-flex items-center px-3 py-2  text-sm font-medium text-center
                           text-green-300 bg-gradient-to-br from-green-400/30 via-green-600/20 to-transparent backdrop-blur-md 
                           saturate-150 border border-emerald-200/30 shadow-emerald-950/30 rounded-md hover:from-green-800/30 hover:via-green-800/20
                           transition  duration-200  hover:-translate-y-1 hover:scale-95 ">
                            Click To See More
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="justify-self-center w-44   grid  grid-cols-1 md:w-xs md:h-full 
               bg-gradient-to-br from-gray-600-400/20 via-gray-200/10 to-transparent backdrop-blur-md saturate-150 border border-gray-50/55 shadow-black-950/30 
                shadow-xl rounded-lg transition  duration-300  hover:-translate-y-1 hover:scale-110">
                    <div className='cardimg'>
                        <img className='rounded-lg' src={"https://img.wattpad.com/cover/416781650-256-k864095.jpg"} />
                    </div>
                    <div className="p-5">
                        <a>
                            <h5 className="mb-2  text-lg md:text-2xl font-bold tracking-tight text-gray-900 ">Book: The Phantom - Hidden Souls {"(Spanish Version)"}</h5>
                        </a>
                        <p className="mb-3 text-sm md:text-base font-normal text-gray-700">this is my first book released in wattpad at the moment. its only in spanish</p>
                    </div>
                    <div className='md:pb-3 md:pr-3 place-self-center pb-3 md:place-self-end '>
                        <a href="https://www.wattpad.com/story/416781650?utm_source=android&utm_medium=link&utm_content=share_writing&wp_page=create&wp_uname=berthortiz"
                            target="_blank"
                            className="inline-flex items-center px-3 py-2  text-sm font-medium text-center
                           text-green-300 bg-gradient-to-br from-green-400/30 via-green-600/20 to-transparent backdrop-blur-md 
                           saturate-150 border border-emerald-200/30 shadow-emerald-950/30 rounded-md hover:from-green-800/30 hover:via-green-800/20
                          transition  duration-200  hover:-translate-y-1 hover:scale-95 ">
                            Go To Wattpad
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects