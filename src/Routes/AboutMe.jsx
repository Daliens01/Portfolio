import React from "react";

const AboutMe = () =>{
    return(
        <>
        <div className="">
        <h1>Who am i?</h1>
        <p>
        I'm a TI Engineer graduated at the 
        <a className="m-1 font-bold underline text-blue-500" target="_blank" href="http://www.utsv.com.mx/">
         Universidad Tecnologia del Sureste de Veracruz.</a>
        I love programing web pages. I have experience as full-stack developer using JavaScript with react JS to create
        dynamic user interfaces in front-end and using node JS with many libraries for the creation of APIs. Recently i made
        a web page that extract and manage the last access data of students in Moodle throught an API. Besides, i have
        experience manage a Moodle plattform in a web server with linux and i provide thecnical support for stundets and teachers.
        </p>
      </div>
        </>
    )
}

export default AboutMe