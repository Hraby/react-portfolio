import React from "react"

export default function Home(){
    return(
        <div className="section">
            <div className="home">
                <div className="leftContent">
                    <span>Michal Hrabal</span>
                    <h1>Vytvářím webové stránky jako <br/>virtuální vizitku Vaší budoucnosti</h1>
                </div>
                <div className="rightContent">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse nisl. Nulla pulvinar eleifend sem. Pellentesque pretium</p>
                    <button className="kontaktBtn">
                        <a>Kontaktovat</a>
                    </button>
                </div>
            </div>
        </div>
    )
}