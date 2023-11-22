import React from "react"
import Stats from "../stats/stats"
import "./_hero.css"

export default function Hero(){
    return(
        <>
        <div className="section">
            <div className="home">
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
                        <a href="#">Kontakt</a>
                    </button>
                </div>
            </div>
        </div>
        <div className="section">
            <Stats/>
        </div>
        </>
    )
}