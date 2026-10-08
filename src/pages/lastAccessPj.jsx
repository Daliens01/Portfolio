import React from "react"
import light from "../assets/light.png"
import dark from "../assets/dark.png"
import select from "../assets/select.png"
import table from "../assets/table.png"
import downloadbutton from "../assets/downloadbutton.png"
import downloadedfile from "../assets/downloadedfile.png"

const Lastaccessproject = ()=>{
    return(
        <div className="place-content-center">
        <h1 className="">Last Access App for Moodle</h1>
        <p>This app has as objetive to recollect the last access data from students registered from custom courses. it is connected by this moodle plattform database</p>
        <p>i developed for my actual work that has a moodle plattform and i deployed localy for my co workers to use only in their work computer, 
            that is why i don't have a link to share</p>
        <img className="" src={light}></img>
        <p>it works by a mysql query that needs id courses to display a table of all studends that are not entering to their courses in 15 days</p>
        <p>you can change the theme from light to dark</p>
        <img className="" src={dark}></img>
        <p>you need to select the level of courses to display users last access data</p>
        <img className="" src={select}></img>
        <p>you can see every student that is not entering to their coursees form at least 15 days or never</p>
        <img className="" src={table}></img>
        <p>below the table there is a download button to save all data as a xlsx file</p>
        <img className="" src={downloadbutton}></img>
        <img className="" src={downloadedfile}></img>
        <p>i used next js as my js framework with heroui v3 in frontend.</p>
        <p>in my backend i used node js, pm2 and xlsx dependencies</p>

    </div>
    )
}

export default Lastaccessproject