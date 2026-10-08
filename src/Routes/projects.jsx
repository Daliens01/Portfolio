import React from 'react'
import BgHome from "../assets/bghome.png"
const Projects = () => {
    return (
        <div className='my-8   '>
            <h1 className=' p-3 flex justify-center'>There are some of my projects i made</h1>
            <div className=' grid  grid-cols-2 content-center'>
                <div className="justify-self-center max-w-xs bg-white border border-gray-200 animated-card
                 rounded-lg shadow-sm ">
                    <a href="#">
                        <img className=' w-4xl  mb-2' src={BgHome} />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight ">Last Access app for Moodle</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 
                        dark:text-gray-400">Its an interntal app developed by me to see how many students are not entering to their courses for at least 15 days </p>
                        <a href="/lastaccessproject" className="inline-flex items-center px-3 py-2
         text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800">
                            See more about it
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="justify-self-center max-w-xs bg-white border border-gray-200 animated-card rounded-lg shadow-sm ">
                    <a href="#">
                        <img className=' w-4xl  mb-2' src={BgHome} />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight ">Book: The Phantom - Hidden Souls</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">this is my first book released in wattpad at the moment. its only in spanish</p>
                        <a href="https://www.wattpad.com/story/416781650?utm_source=android&utm_medium=link&utm_content=share_writing&wp_page=create&wp_uname=berthortiz" target="_blank" className="inline-flex items-center px-3 py-2
         text-sm font-medium text-center text-white  bg-green-600 rounded-lg hover:bg-green-800">
                            Go To app
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