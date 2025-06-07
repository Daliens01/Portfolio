import React from 'react'
import BgHome from "../assets/bghome.png"
const Projects = () => {
    return (
        <div className=' my-4 '>
            <h1>There are some of my projects i made</h1>
            <div className=' flex justify-center '>
                <div className='mx-8 bg-gray-200 w-[300px] rounded-md p-2 animated-card '>
                    <img className='w-4xl  mb-2' src={BgHome} />
                    <div>
                        <h5 className='font-bold'>App List</h5>
                        <p>This apps recolect the last data info
                            of students in a moodle platfform in two categories to chose
                        </p>
                        <button className="rounded-md bg-green-500 p-1.5 
                                cursor-pointer hover:bg-green-700 mt-4"
                            onClick={() => { window.open("http://test.esiapi.edu.mx/") }}>Click to go App List</button>
                    </div>
                </div>
                <div className='mx-8 bg-gray-200 w-[300px] rounded-md p-2 animated-card'>
                    <img className='w-4xl  mb-2' src={BgHome} />
                    <div>
                        <h5 className='font-bold'>App List</h5>
                        <p>This apps recolect the last data info
                            of students in a moodle platfform in two categories to chose
                        </p>
                        <button className="rounded-md bg-green-500 p-1.5
                                cursor-pointer hover:bg-green-700 mt-4"
                            onClick={() => { }}>Click to go GitHub</button>
                    </div>
                </div>
                <div className='mx-8 bg-gray-200 w-[300px] rounded-md p-2 animated-card'>
                    <img className='w-4xl  mb-2' src={BgHome} />
                    <div>
                        <h5 className='font-bold'>App List</h5>
                        <p>This apps recolect the last data info
                            of students in a moodle platfform in two categories to chose
                        </p>
                        <button className="rounded-md bg-green-500 p-1.5
                                cursor-pointer hover:bg-green-700 mt-4"
                            onClick={() => { }}>Click to go GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects