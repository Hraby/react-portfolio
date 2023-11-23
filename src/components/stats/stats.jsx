import React from "react"
import "./stats.css"
import CountUP from "react-countup"

export default function Stats(){
    return(
        <div className="stats">
            <img className="man" src="/3dman.png" alt=""/>
            <div className="statsInfo">
                <div className="yearsStats">
                    <h1><CountUP duration={3} end={5}/><span>+</span></h1>
                    <span>let na <br/>trhu</span>
                </div>
                <div className="projectsStats">
                    <h1><CountUP duration={3} end={10}/><span>+</span></h1>
                    <span>zrealizovaných <br/>projektů</span>
                </div>
                <div className="visitorsStats">
                    <h1><CountUP duration={3} end={100}/><span>+</span></h1>
                    <span>spokojených návštěvníků<br/> denně</span>
                </div>
            </div>
        </div>
    )
}