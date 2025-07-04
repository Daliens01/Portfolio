import React from "react";
import profilePic from "../assets/profilepic.jpg"
const AboutMe = () => {
  return (
    <div className="flex my-4 justify-center  z-30">
      {/* who am i */}
      <div  className="mx-4 flex flex-col items-center bg-white border border-gray-200 
      rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100
       dark:border-gray-700 dark:bg-gray-100 dark:hover:bg-gray-300 main-who-i-am">
        <img className="object-cover w-full rounded-t-lg 
        h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={profilePic} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">Who am i?</h5>
          <p className="mb-3 font-normal children-who-i-am ">
            I'm a TI Engineer graduated at the
            <a className="m-1 font-bold no-underline hover:underline text-blue-500 " 
            target="_blank" href="http://www.utsv.com.mx/">
              Universidad Tecnologia del Sureste de Veracruz.</a>
            I love programing web pages. I have experience as full-stack developer using JavaScript with react JS to create
            dynamic user interfaces in front-end and using node JS with many libraries for the creation of APIs. Recently i made
            a web page that extract and manage the last access data of students in Moodle throught an API. Besides, i have
            experience manage a Moodle plattform in a web server with linux and i provide thecnical support for stundets and teachers.

          </p>
        </div>
      </div>
      {/* what i like to do */}
      <div className="mx-4 flex flex-col items-center bg-white border border-gray-200 
      rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100
       dark:border-gray-700 dark:bg-gray-100 dark:hover:bg-gray-300 main-who-i-am">
        <img className="object-cover w-full rounded-t-lg 
        h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={profilePic} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">what i like to do</h5>
          <p className="mb-3 font-normal children-who-i-am ">
           when i was a kid, i realize technology was something that makes me feel happy. My dad
           bought a desktop computer and i got fascinated about how it works and what things you could do.
           but it wasn't my "cannon event" until i enter to college. Was there when i know about programing world
           and something just click in my mind
          </p>
        </div>
      </div>
      {/* what i want to do */}
      <div  className="mx-4 flex flex-col items-center bg-white border border-gray-200 
      rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100
       dark:border-gray-700 dark:bg-gray-100 dark:hover:bg-gray-300 main-who-i-am">
        <img className="object-cover w-full rounded-t-lg 
        h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={profilePic} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">what i want to do</h5>
          <p className="mb-3 font-normal children-who-i-am ">
            i can see me developing in a big tech company doing what i love to do
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe