import React from "react"
import "./hero.css"

export default function Hero(){
    return(
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
                    <a href="/">Kontakt</a>
                </button>
            </div>
        </div>
    )
}