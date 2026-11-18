import React from "react";
import profilePic from "../assets/profilepic.jpg"
const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 my-4 justify-center  z-30">
      {/* who am i */}
      <div  className="mx-4 flex flex-col  transition duration-300 md:hover:-translate-y-1 md:hover:scale-105
      rounded-lg shadow-sm md:flex-row md:max-w-xl main-who-i-am bg-white ">
        <img className="object-cover w-full rounded-t-lg 
        h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={profilePic} alt="" />
        <div className="flex flex-col  p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">Who am i ?</h5>
          <p className="mb-3 font-normal children-who-i-am ">
            I'm a TI Engineer graduated at the
            <a className="m-1 font-bold no-underline hover:underline text-blue-500 " 
            target="_blank" href="http://www.utsv.com.mx/">
              Universidad Tecnologia del Sureste de Veracruz.</a>
            I love developing web pages, i love technology since i was a kid using my dad's desktop PC to play games and use programs. i am curious and i like to know the meaning of everything.

          </p>
        </div>
      </div>
      {/* what i like to do */}
      <div className="mx-4 flex flex-col  transition duration-300 hover:-translate-y-1 hover:scale-105
      rounded-lg shadow-sm md:flex-row md:max-w-xl 
       main-who-i-am">
        <img className="object-cover w-full rounded-t-lg 
        h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={profilePic} alt="" />
        <div className="flex flex-col  p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">what i like to do</h5>
          <p className="mb-3 font-normal children-who-i-am  ">
           i love make websites, the fact that something you type is "alive" is beautiful, is the same way when i write my stories to become books soon.
          </p>
        </div>
      </div>
      {/* progress */}
      <div className="mx-4 flex flex-col  transition duration-300 hover:-translate-y-1 hover:scale-105
      rounded-lg shadow-sm md:flex-row md:max-w-xl 
       main-who-i-am">
        <img className="object-cover w-full rounded-t-lg 
        h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={profilePic} alt="" />
        <div className="flex flex-col p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">progress</h5>
          <p className="mb-3 font-normal children-who-i-am ">
            i worked in a univerity as a mls Administrator working with moodle, godaddy and phpmyadmin it's here where i developed my first project you can see above.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe