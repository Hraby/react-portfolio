import React from "react"
import "./stats.css"
import CountUP from "react-countup"
import {motion, useAnimation} from "framer-motion"

export default function Stats(){
    const controls = useAnimation();

    React.useEffect(() => {
        controls.start({ scale: 1, opacity: 1, y: 0 });
    });
    return(
        <motion.div
            className="stats"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.25, delay: 0.25 }}
            viewport={{once: false}}
        >
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
        </motion.div>
    )
}