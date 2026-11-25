import React from "react";
import profilePic from "../assets/profilepic.jpg"
const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 gap-2  md:grid-cols-3 my-4 justify-items-center ">
      {/* who am i */}
      <div className="mb-4 flex flex-col  transition duration-300 hover:-translate-y-1 hover:scale-105 md:w-[450px] w-[320px]  h-[330px] md:h-[341px]
      rounded-lg shadow-sm md:flex-row md:max-w-xl main-who-i-am bg-white ">
        <img className="object-cover w-full rounded-t-lg 
        h-32 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={profilePic} alt="" />
        <div className="flex flex-col  p-4 leading-normal">
          <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight ">Who am i ?</h5>
          <p className="mb-3 font-normal children-who-i-am text-sm md:text-base ">
            I'm a TI Engineer graduated from
            <a className="m-1 font-bold no-underline hover:underline text-blue-500 text-sm md:text-base"
              target="_blank" href="http://www.utsv.com.mx/">
              Universidad Tecnologia del Sureste de Veracruz.</a>
            I love developing web pages, i love technology since i was a kid using my dad's desktop PC to play games and use programs.
            i am curious and i like to know the meaning of everything.

          </p>
        </div>
      </div>
      {/* what i like to do */}
      <div className="mb-4 flex flex-col  transition duration-300 hover:-translate-y-1 hover:scale-105 md:w-[450px] w-[320px]  h-[330px] md:h-[341px]
      rounded-lg shadow-sm md:flex-row md:max-w-xl
       main-who-i-am bg-white">
        <img className="object-cover w-full rounded-t-lg 
        h-32 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={profilePic} alt="" />
        <div className="flex flex-col  p-4 leading-normal">
          <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight ">What I Like To Do?</h5>
          <p className="mb-3 font-normal children-who-i-am text-sm md:text-base ">
            i love make websites, the fact that something you type is "alive" is beautiful, is the same way when i write my stories to become books soon.
          </p>
        </div>
      </div>
      {/* progress */}
      <div className="mb-4 flex flex-col  transition duration-300 hover:-translate-y-1 hover:scale-105 md:w-[450px] w-[320px]  h-[330px] md:h-[341px]
      rounded-lg shadow-sm md:flex-row md:max-w-xl 
       main-who-i-am bg-white">
        <img className="object-cover w-full rounded-t-lg 
        h-32 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={profilePic} alt="" />
        <div className="flex flex-col p-4 leading-normal">
          <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight ">Life Progress</h5>
          <p className="mb-3 font-normal children-who-i-am text-sm md:text-base">
            <p className="font-bold"> - 2022 to actual day -</p> i worked in a College as a LMS Moodle Administrator working with GoDaddy Server to optimize and install the plattform
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe