import React from "react";
import profilePic from "../../dist/profilepic.jpg"
const AboutMe = () => {
  return (
    <div className="flex">
      {/* who am i */}
      <a href="#" class="flex flex-col items-center bg-white border border-gray-200 
      rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100
       dark:border-gray-700 dark:bg-gray-100 dark:hover:bg-gray-300">
        <img class="object-cover w-full rounded-t-lg 
        h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={profilePic} alt="" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight ">Who am i?</h5>
          <p class="mb-3 font-normal  ">
            I'm a TI Engineer graduated at the
            <a className="m-1 font-bold underline text-blue-500" target="_blank" href="http://www.utsv.com.mx/">
              Universidad Tecnologia del Sureste de Veracruz.</a>
            I love programing web pages. I have experience as full-stack developer using JavaScript with react JS to create
            dynamic user interfaces in front-end and using node JS with many libraries for the creation of APIs. Recently i made
            a web page that extract and manage the last access data of students in Moodle throught an API. Besides, i have
            experience manage a Moodle plattform in a web server with linux and i provide thecnical support for stundets and teachers.

          </p>
        </div>
      </a>
      {/* what i like to do */}
      <a href="#" class="flex flex-col items-center bg-white border border-gray-200 
      rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100
       dark:border-gray-700 dark:bg-gray-100 dark:hover:bg-gray-300">
        <img class="object-cover w-full rounded-t-lg 
        h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={profilePic} alt="" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight ">what i like to do</h5>
          <p class="mb-3 font-normal  ">
           when i was a kid, i realize technology was something that makes me feel happy. My dad
           bought a desktop computer and i got fascinated about how it works and what things you could do.
           but it wasn't my "cannon event" until i enter to college. Was there when i know about programing world
           and something just click in my mind
          </p>
        </div>
      </a>
      {/* what i want to do */}
      <a href="#" class="flex flex-col items-center bg-white border border-gray-200 
      rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100
       dark:border-gray-700 dark:bg-gray-100 dark:hover:bg-gray-300">
        <img class="object-cover w-full rounded-t-lg 
        h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={profilePic} alt="" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight ">what i want to do</h5>
          <p class="mb-3 font-normal  ">
            i can see me developing in a big tech company doing what i love to do
          </p>
        </div>
      </a>
    </div>
  )
}

export default AboutMe