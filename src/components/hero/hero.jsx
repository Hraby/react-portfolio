import React from "react"
import {motion} from "framer-motion"
import "./hero.css"

export default function Hero(){
    return(
        <motion.div
            className="home"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
        >
            <div className="leftContent">
                <div>
                    <span>Michal </span>
                    <span className="nameGradient">Hrabal</span>
                </div>
                <h1>Vytvářím webové stránky jako <br/>virtuální vizitku Vaší budoucnosti</h1>
            </div>
            <div className="rightContent">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse nisl. Nulla pulvinar eleifend sem. Pellentesque pretium</p>
                <button className="kontaktBtn">
                    <a href="/">Kontakt</a>
                </button>
            </div>
        </motion.div>
    )
}